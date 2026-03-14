import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import interview from "../assets/interview.mp4";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="hero-gradient"></div>
      <div className="hero-grid"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Announcement */}
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181f] border border-[#23232d] text-sm text-[#9898a8] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#6366f1]"></span>
              Welcome To The Future of Technical Hiring
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 fade-up delay-1">
            <span className="text-white">Technical hiring,</span>
            <br />
            <span className="text-gradient">reimagined.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[#9898a8] max-w-xl mx-auto mb-10 leading-relaxed fade-up delay-2">
            The modern interview platform for engineering teams. 
            Conduct live coding sessions, assess candidates in real-time, 
            and make confident hiring decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up delay-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-primary px-6 py-3 text-base">
                  Start for free
                  <ArrowRight className="w-4 h-4" />
                </button>
              </SignInButton>
              <button className="btn-ghost px-6 py-3 text-base">
                <Play className="w-4 h-4" />
                Watch demo
              </button>
            </SignedOut>
            <SignedIn>
              <Link to="/dashboard">
                <button className="btn-primary px-6 py-3 text-base">
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </SignedIn>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-[#6b6b7b] fade-up delay-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#34d399]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free 14-day trial
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#34d399]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card
            </div>
          </div>
        </div>

        {/* Video Preview */}
        <div className="mt-20 fade-up delay-4">
          <div className="video-container max-w-4xl mx-auto">
            <video
              className="w-full block"
              src={interview}
              loop
              muted
              autoPlay
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
