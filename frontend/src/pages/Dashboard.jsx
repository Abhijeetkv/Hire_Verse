import React from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import DashNavbar from "../components/DashNavbar";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-blue-50 to-blue-200">
        <DashNavbar />
        <div>Dashboard</div>
        <SignedIn>
          <button
            className="btn btn-success"
            onClick={() => toast.success("Signed in successfully!")}
          >
            Click me
          </button>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
};

export default Dashboard;
