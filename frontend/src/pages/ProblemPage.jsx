import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PROBLEMS } from "../data/problem";
import DashNavbar from "../components/DashNavbar";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { useParams } from "react-router-dom";
import ProblemDescription from "../components/ProblemDescription.jsx";
import CodeEditor from "../components/CodeEditor.jsx";
import OutputPanel from "../components/OutputPanel.jsx";


const ProblemPage = () => {
 const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);



  const handleLanguageChange = (e) => {};

  const handleProblemChange = (e) => (newProblemId) => navigate(`/problem/${newProblemId}`)

  const triggerConfetti = () => {};

  const checkIfTestPassed = () => {};

  const handleRunCode = () => {};
  return (
    <>
      <div className="h-screen bg-base-100 flex flex-col">
        <DashNavbar />
        <div className="flex-1">
          <PanelGroup direction="horizontal" className="h-full">
            <Panel defaultSize={40} minSize={30}>
              <ProblemDescription
                problem={currentProblem}
                currentProblemId={currentProblemId}
                onProblemChange={handleProblemChange}
                allProblems={Object.values(PROBLEMS)}
              />
            </Panel>

            <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

            <Panel defaultSize={60} minSize={30}>
              <PanelGroup direction="vertical">
                <Panel defaultSize={70} minSize={30}>
                  <CodeEditor />
                </Panel>

                <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                <Panel defaultSize={30} minSize={30}>
                  <OutputPanel />
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </>
  );
};

export default ProblemPage;
