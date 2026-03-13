// Judge0 CE - Free online code execution engine (60+ languages)
// Public instance: https://ce.judge0.com
// Docs: https://judge0.com/#docs

const JUDGE0_API = process.env.JUDGE0_API_URL || "https://ce.judge0.com";

// Judge0 language IDs
const LANGUAGE_IDS = {
  javascript: 63, // Node.js 12.14.0
  python: 71,     // Python 3.8.1
  java: 62,       // Java (OpenJDK 13.0.1)
  cpp: 54,        // C++ (GCC 9.2.0, C++17)
  c: 50,          // C (GCC 9.2.0)
  typescript: 74, // TypeScript 3.7.4
  ruby: 72,       // Ruby 2.7.0
  go: 60,         // Go 1.13.5
  rust: 73,       // Rust 1.40.0
  csharp: 51,     // C# (Mono 6.6.0.161)
  php: 68,        // PHP 7.4.1
  swift: 83,      // Swift 5.2.3
  kotlin: 78,     // Kotlin 1.3.70
};

// Judge0 expects Java main class to be named "Main"
// This renames whatever class contains the main method to "Main"
function preprocessJavaCode(code) {
  // Find the class that contains "public static void main"
  // Replace its name with "Main"
  const classRegex = /class\s+(\w+)\s*\{/g;
  let match;
  let classWithMain = null;

  // Find which class contains the main method
  const lines = code.split("\n");
  let currentClass = null;
  let braceCount = 0;

  for (const line of lines) {
    const classMatch = line.match(/class\s+(\w+)/);
    if (classMatch && braceCount === 0) {
      currentClass = classMatch[1];
    }
    if (line.includes("public static void main")) {
      classWithMain = currentClass;
      break;
    }
    braceCount += (line.match(/{/g) || []).length;
    braceCount -= (line.match(/}/g) || []).length;
  }

  if (classWithMain && classWithMain !== "Main") {
    // Replace the class name with "Main"
    return code.replace(
      new RegExp(`class\\s+${classWithMain}`),
      "class Main"
    );
  }

  return code;
}

// C++ starter code often lacks includes and main()
// Add common includes and a stub main if missing
function preprocessCppCode(code) {
  let processed = code;

  // Add common includes if no #include found
  if (!code.includes("#include")) {
    const includes = [
      "#include <iostream>",
      "#include <vector>",
      "#include <string>",
      "#include <algorithm>",
      "#include <map>",
      "#include <unordered_map>",
      "#include <set>",
      "#include <stack>",
      "#include <queue>",
      "#include <climits>",
      "#include <cmath>",
      "#include <sstream>",
    ].join("\n");
    processed = includes + "\nusing namespace std;\n\n" + processed;
  }

  // Add a main function if none exists
  if (!/int\s+main\s*\(/.test(processed)) {
    processed += "\n\nint main() {\n    return 0;\n}\n";
  }

  return processed;
}

// C starter code often lacks includes and main()
function preprocessCCode(code) {
  let processed = code;

  // Add common includes if no #include found
  if (!code.includes("#include")) {
    const includes = [
      "#include <stdio.h>",
      "#include <stdlib.h>",
      "#include <string.h>",
      "#include <stdbool.h>",
      "#include <limits.h>",
      "#include <math.h>",
    ].join("\n");
    processed = includes + "\n\n" + processed;
  }

  // Add a main function if none exists
  if (!/int\s+main\s*\(/.test(processed)) {
    processed += "\n\nint main() {\n    return 0;\n}\n";
  }

  return processed;
}

export async function executeCode(req, res) {
  try {
    const { language, code } = req.body;

    if (!language || !code) {
      return res.status(400).json({
        success: false,
        error: "Language and code are required",
      });
    }

    const languageId = LANGUAGE_IDS[language];
    if (!languageId) {
      return res.status(400).json({
        success: false,
        error: `Unsupported language: ${language}. Supported: ${Object.keys(LANGUAGE_IDS).join(", ")}`,
      });
    }

    // Preprocess code based on language
    let sourceCode = code;
    if (language === "java") {
      sourceCode = preprocessJavaCode(code);
    } else if (language === "cpp") {
      sourceCode = preprocessCppCode(code);
    } else if (language === "c") {
      sourceCode = preprocessCCode(code);
    }

    const headers = { "Content-Type": "application/json" };

    // Support optional RapidAPI key for higher rate limits in production
    if (process.env.JUDGE0_API_KEY) {
      headers["X-RapidAPI-Key"] = process.env.JUDGE0_API_KEY;
      headers["X-RapidAPI-Host"] = "judge0-ce.p.rapidapi.com";
    }

    const response = await fetch(
      `${JUDGE0_API}/submissions?base64_encoded=false&wait=true`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          source_code: sourceCode,
          language_id: languageId,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        success: false,
        error: `Code execution API error: ${response.status} - ${errorText}`,
      });
    }

    const data = await response.json();

    // Judge0 status codes: 1=In Queue, 2=Processing, 3=Accepted,
    // 4=Wrong Answer, 5=Time Limit, 6=Compilation Error,
    // 7-12=Runtime errors, 13=Internal Error, 14=Exec Format Error
    const statusId = data.status?.id;

    if (statusId === 6) {
      // Compilation error
      return res.json({
        success: false,
        output: "",
        error: data.compile_output || "Compilation error",
      });
    }

    if (statusId >= 7 && statusId <= 12) {
      // Runtime error
      return res.json({
        success: false,
        output: data.stdout || "",
        error: data.stderr || data.status?.description || "Runtime error",
      });
    }

    if (statusId === 5) {
      return res.json({
        success: false,
        output: data.stdout || "",
        error: "Time Limit Exceeded",
      });
    }

    if (statusId !== 3) {
      return res.json({
        success: false,
        output: data.stdout || "",
        error: data.stderr || data.compile_output || data.message || data.status?.description || "Execution failed",
      });
    }

    // Success (status 3 = Accepted)
    return res.json({
      success: true,
      output: data.stdout || "No output",
    });
  } catch (error) {
    console.error("Code execution error:", error);
    return res.status(500).json({
      success: false,
      error: `Failed to execute code: ${error.message}`,
    });
  }
}

// Endpoint to get supported languages
export async function getLanguages(req, res) {
  return res.json(
    Object.entries(LANGUAGE_IDS).map(([name, id]) => ({ name, id }))
  );
}
