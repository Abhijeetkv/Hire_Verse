import { SignInButton } from "@clerk/clerk-react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className=" border border-gray-200 px-5 py-2 lg:py-3 lg:px-40">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <div className="flex">
              <img src={logo} alt="" className="h-12 w-12 pt-2" />
              <p className="text-2xl text-gray-950 pt-3 px-1 text-bold ">
                HireVerse
              </p>
            </div>
          </Link>
          <SignInButton mode="modal">
            <button className="text-gray-950 btn btn-primary px-6 py-2 rounded-2xl">
              Sign Up
            </button>
          </SignInButton>
        </div>
      </div>
    </>
  );
}

export default Navbar;
