import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import StatsSection from "../components/StatsSection.jsx";
import HowItWorksSection from "../components/HowItWorksSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import CTASection from "../components/CTASection.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
