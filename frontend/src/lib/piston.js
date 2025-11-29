const PISTON_API = import.meta.env.VITE_PISTON_API;

const LANGUAGE_VERSIONS = {
    javascript: { Language: "javascript", Version: "18.16.0" },
    python:     { Language: "python",     Version: "3.11.4" },
    java:       { Language: "java",       Version: "20.0.2" },
    cpp:        { Language: "cpp",        Version: "10.2.0" },
    c:          { Language: "c",          Version: "10.2.0" },
};

/**
 * @param {string} language
 * @param {string} code
 * @returns {Promise<{success: boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
    try {
        if (!language) {
            return { success: false, error: "Language not provided" };
        }

        const lang = language.toLowerCase();
        const languageConfig = LANGUAGE_VERSIONS[lang];

        if (!languageConfig) {
            return { success: false, error: `Unsupported language: ${language}` };
        }

        const response = await fetch(`${PISTON_API}/execute`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                language: languageConfig.Language,
                version: languageConfig.Version,
                files: [
                    {
                        name: `main.${getFileExtension(lang)}`,
                        content: code,
                    },
                ],
            }),
        });

        if (!response.ok) {
            return { success: false, error: `API Error: ${response.status}` };
        }

        const data = await response.json();
        const output = data.run.output || "";
        const stderr = data.run.stderr || "";

        if (stderr.trim() !== "") {
            return { success: false, error: stderr.trim(), output };
        }

        return { success: true, output: output.trim() };
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
    };
    return extensions[language] || "txt";
}
