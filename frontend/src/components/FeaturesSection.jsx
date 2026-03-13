import { Video, Code2, BookOpen, BarChart3, Shield, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Crystal-clear video",
      description: "HD video with ultra-low latency. See every expression, hear every word."
    },
    {
      icon: Code2,
      title: "Live code collaboration",
      description: "Real-time editing with syntax highlighting for 50+ languages."
    },
    {
      icon: BookOpen,
      title: "Problem library",
      description: "Curated challenges across all difficulty levels, or create your own."
    },
    {
      icon: BarChart3,
      title: "Smart insights",
      description: "AI-powered performance analysis and skill assessments."
    },
    {
      icon: Shield,
      title: "Enterprise ready",
      description: "SOC 2 compliant with end-to-end encryption."
    },
    {
      icon: Zap,
      title: "One-click setup",
      description: "No downloads. Just share a link and start interviewing."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#6366f1] font-medium text-sm mb-4">FEATURES</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to hire great engineers
          </h2>
          <p className="text-[#9898a8] text-lg">
            A complete toolkit for modern technical interviews.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div key={i} className="feature-card group">
              <div className="feature-icon">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[#9898a8] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
