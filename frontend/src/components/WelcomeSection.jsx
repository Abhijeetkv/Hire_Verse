import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";

const WelcomeSection = ({ onCreateSession }) => {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between">
          <div>
              <h1 className="text-xl sm:text-4xl sm:ml-16 font-black text-gray-800 sm:mb-4 mb-1">
                Welcome back, {user?.firstName || "there"}!
              </h1>
            <p className="text-sm sm:text-xl text-gray-700 sm:ml-16">
              Ready to level up your coding skills?
            </p>
          </div>

          <button
            onClick={onCreateSession}
            className="group px-4 py-3 sm:px-8 sm:py-4 bg-blue-600 rounded-2xl transition-all duration-200 hover:opacity-90"
          >
            <div className="flex items-center lg:gap-3  text-white font-bold md:text-lg">
              <ZapIcon className="w-6 h-6 hidden md:block" />
              <span className="text-xs sm:text-lg">Create Session</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
