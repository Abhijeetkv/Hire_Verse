import React, { useEffect } from "react";
import { LANGUAGE_CONFIG } from "../data/problem";
import { Loader2Icon, PlayIcon } from "lucide-react";
import Editor  from "@monaco-editor/react";

const CodeEditor = ({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) => {

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme("customTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#1d232a",  // base-300 background
        "editor.foreground": "#e4e4e4",
      },
    });
  }

  return (
    <>
      <div className="h-full bg-base-300 flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
          <div className="flex items-center gap-3">
            <img
              src={LANGUAGE_CONFIG[selectedLanguage].icon}
              alt={LANGUAGE_CONFIG[selectedLanguage].name}
              className="size-6"
            />
            <select
              className="select select-sm"
              value={selectedLanguage}
              onChange={onLanguageChange}
            >
              {Object.entries(LANGUAGE_CONFIG).map(([Key, lang]) => (
                <option key={Key} value={Key}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-primary btn-sm gap-2" disabled={isRunning} onClick={onRunCode}>
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
        </div>

        <div className="flex-1">
          <Editor
            height={"100%"}
            beforeMount={handleEditorWillMount}
            language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
            value={code}
            onChange={onCodeChange}
            theme="customTheme"
            options={{
              fontSize: 16,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              minimap: { enabled: false },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
