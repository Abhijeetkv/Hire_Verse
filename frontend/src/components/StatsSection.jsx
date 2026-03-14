;const StatsSection = () => {
  const stats = [
    { value: "10K+", label: "Companies" },
    { value: "500K+", label: "Interviews" },
    { value: "98%", label: "Satisfaction" },
    { value: "40%", label: "Faster hiring" }
  ];

  return (
    <section className="py-16 border-y border-[#18181f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="stat-value text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
