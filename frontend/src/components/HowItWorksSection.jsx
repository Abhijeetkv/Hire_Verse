const HowItWorksSection = () => {
  const steps = [
    {
      num: "01",
      title: "Create a session",
      desc: "Pick a problem from our library or add your own. Set up takes seconds."
    },
    {
      num: "02",
      title: "Invite candidate",
      desc: "Share a link. They join instantly—no accounts or downloads needed."
    },
    {
      num: "03",
      title: "Interview together",
      desc: "Collaborate in real-time with video, audio, and a shared code editor."
    },
    {
      num: "04",
      title: "Make decisions",
      desc: "Review recordings, analyze metrics, and hire with confidence."
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#6366f1] font-medium text-sm mb-4">HOW IT WORKS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Simple for you. Seamless for candidates.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gradient-to-r from-[#23232d] to-transparent"></div>
              )}
              
              <div className="text-5xl font-bold text-[#23232d] mb-4">{step.num}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-[#9898a8] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
