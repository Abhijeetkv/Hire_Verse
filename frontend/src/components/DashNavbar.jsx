import React from "react";
import logo from "../assets/logo.svg";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { BookOpen, BookOpenIcon, Flame, FlameIcon, LayoutDashboard } from "lucide-react";

const DashNavbar = () => {
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="container border-b border-gray-250 px-5 py-2 lg:py-3 lg:px-30">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img src={logo} alt="" className="h-12 w-12 pt-2" />
            <p className="text-xl text-gray-950 pt-3 px-1 text-bold sm:text-2xl">
              HireVerse
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Link
              to={"/problems"}
              className={`px-4 py-2.5 rounded-lg transition-all duration-200
                ${
                  isActive("/problems")
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              <div className="flex items-center gap-x-2.5">
                <FlameIcon className="size-4" />
                <span className="font-medium hidden sm:inline">Problems</span>
              </div>
            </Link>

            <Link
              to={"/dashboard"}
              className={`px-4 py-2.5 lg:mr-4 rounded-lg transition-all duration-200
                ${
                  isActive("/dashboard")
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              <div className="flex items-center gap-x-2.5">
                <LayoutDashboard className="size-4" />
                <span className="font-medium hidden sm:inline">Dashboard</span>
              </div>
            </Link>

              <UserButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashNavbar;
