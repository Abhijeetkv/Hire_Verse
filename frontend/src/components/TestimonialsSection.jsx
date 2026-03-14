import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "HireVerse cut our time-to-hire in half. The collaborative coding environment is exactly what we needed.",
      name: "Sarah Chen",
      role: "VP Engineering",
      company: "TechFlow",
      initials: "SC"
    },
    {
      quote: "Finally, a platform that feels like pair programming. Candidates love it, and so do we.",
      name: "Marcus Johnson",
      role: "Engineering Manager",
      company: "DataScale",
      initials: "MJ"
    },
    {
      quote: "The best technical interview tool we've used. Clean, fast, and the problem library is excellent.",
      name: "Emily Rodriguez",
      role: "Head of Talent",
      company: "CloudNative",
      initials: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#6366f1] font-medium text-sm mb-4">TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted by engineering teams
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#c4c4d0] leading-relaxed mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="font-medium text-white text-sm">{t.name}</div>
                  <div className="text-[#6b6b7b] text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
