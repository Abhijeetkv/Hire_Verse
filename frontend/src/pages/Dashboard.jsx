import React from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import DashNavbar from "../components/DashNavbar";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-400">
        <DashNavbar />
        
      </div>
    </>
  );
};

export default Dashboard;
