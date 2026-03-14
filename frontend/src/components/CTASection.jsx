import { SignInButton, SignedOut, SignedIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c14] via-[#111118] to-[#0c0c14]"></div>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99, 102, 241, 0.08), transparent)"
      }}></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
          Ready to transform your technical hiring?
        </h2>
        <p className="text-lg text-[#9898a8] mb-10 max-w-xl mx-auto">
          Join companies using HireVerse to find, test, and hire the best developers faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn-primary px-8 py-3.5 text-base">
                Get started — it's free
                <ArrowRight className="w-4 h-4" />
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link to="/dashboard">
              <button className="btn-primary px-8 py-3.5 text-base">
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </SignedIn>
          <button className="btn-ghost px-8 py-3.5 text-base">
            Talk to Us
          </button>
        </div>

        <p className="text-sm text-[#6b6b7b] mt-8">
          Free for small teams. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
