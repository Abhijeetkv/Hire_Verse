
const PISTON_API = import.meta.env.VITE_PISTON_API

const LANGUAGE_VERSIONS = {
    javascript: {language:"javascript", Version: "18.16.0"},
    python: {language:"python", Version: "3.11.4"},
    java: {language:"java", Version: "20.0.2"},
    cpp: {language: "cpp", Version: "10.2.0"},
    c: {language: "c", Version: "10.2.0"},
}

/**
 * @param {string} language
 * @param {string} code
 * @returns {promise<{success: boolean, output?:string, error?: string}>}
 */

export async function executeCode(language, code) {
    try {
        const languageConfig = LANGUAGE_VERSIONS[language.toLowerCase()];

        if (!languageConfig) {
            return { success: false, error: "Unsupported language" };
        }

        const response = await fetch(`${PISTON_API}/execute`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                language: languageConfig.Language,
                version: languageConfig.Version,
                files: [{ 
                    name: `main.${getFileExtension(language)}`,
                    content: code 
                }],
            })
        })

        if (!response.ok) {
            return { success: false,  error: `API Error: ${response.status}` };
        }

        const data = await response.json();

        const output = data.run.output || "";
        const stderr = data.run.stderr || "";

        if (stderr) {
            return { success: false,
                output: output,
                 error: stderr };
        }
        return { success: true, output: output || "" };
    } catch (error) {
        return { success: false, error: error.message || "Unknown error" };
    }
}

function getFileExtension(language) {
    const extensions = {
        javascript: "js",
        python: "py",
        java: "java",
        cpp: "cpp",
        c: "c",
    }
    return extensions[language.toLowerCase()] || "txt"
}