import React, { useState } from "react";
import DashNavbar from "../components/DashNavbar";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useCreateSession, useActiveSessions, useMyRecentSessions } from "../hooks/useSessions";
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "../components/StatsCards";
import ActiveSessions from "../components/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModel from "../components/CreateSessionModel";

const Dashboard = () => {
  const navigate = useNavigate();
  const {user} = useUser()
  const [showCreateModel, setShowCreateModel] = useState(false)
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: ""});

  const createSessionMutation = useCreateSession();

  const { data: activeSessionData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if(!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate({
      problem: roomConfig.problem,
      difficulty: roomConfig.difficulty.toLowerCase(),
    },
  {
      onSuccess: (data) => {
        setShowCreateModel(false);
        navigate(`/session/${data.session.id}`); 
      }
  })
  
  }

  const activeSessions = activeSessionData?.sessions || []
  const recentSessions = recentSessionsData?.sessions || []

  const isUserInSession = (session) => {
    if (!user.id) return false;

    return session.host?.clerkId ===user.id || session.participant?.clerkId === user.id
  }

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-400">
        <DashNavbar />

        <WelcomeSection onCreateSession={() => setShowCreateModel(true)} />

          <div className="container max-w-7xl mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <StatsCards 
              activeSessionsCount={activeSessions.length}
              recentSessionsCount={recentSessions.length}
            />
            <ActiveSessions
              sessions={activeSessions}
              isLoading={loadingActiveSessions}
              isUserInSession={isUserInSession}
            />
          </div>

          <RecentSessions
            sessions={recentSessions}
            isLoading={loadingRecentSessions}
          />
          </div>
      </div>

      <CreateSessionModel
        isOpen={showCreateModel}
        onClose={() => setShowCreateModel(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreate={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
};

export default Dashboard;
