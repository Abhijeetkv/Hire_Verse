import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PROBLEMS } from '../data/problem';
import DashNavbar from '../components/DashNavbar';
import { PanelGroup, Panel } from 'react-resizable-panels';
import { useParams } from 'react-router-dom';

const ProblemPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [currentProblemId, setCurrentProblemId] = useState("two-sum");
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCodes.javascript);
    const [output, setOutput] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const currentProblem = PROBLEMS[currentProblemId];

    useEffect(() => {
        if (id && PROBLEMS[id]) {
            setCurrentProblemId(id);
            setCode(PROBLEMS[id].starterCodes[selectedLanguage]);
            setOutput(null);
        }
    }, [id, selectedLanguage]);

    const handleLanguageChange = (e) => {}
    
    const handleProblemChange = (e) => {}

    const triggerConfetti = () => {}

    const checkIfTestPassed = () => {}

    const handleRunCode = () => {}
  return (
    <>
        <div className="h-screen w-screen bg-base-100 flex flex-col">
            <DashNavbar />
            <div className="flex-1">
                <PanelGroup direction="horizontal" className="h-full">

                </PanelGroup>
            </div>
        </div>
    </>
  )
}

export default ProblemPage