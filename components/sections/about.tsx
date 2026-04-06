const stats = [
  { value: "25+", label: "Years of Stewardship" },
  { value: "120", label: "Active Estates" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 md:px-12 bg-ce-surface">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Image column */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="/about.png"
              alt="Grand stone estate with perfectly manicured lawn and formal garden at golden hour"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative block */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-ce-secondary-container rounded-[1rem] -z-10" />
        </div>

        {/* Text column */}
        <div className="w-full md:w-1/2">
          <span className="font-label uppercase tracking-widest text-ce-secondary text-sm mb-6 block">
            Our Story
          </span>
          <h2 className="font-headline text-5xl text-ce-primary mb-8 leading-tight">
            The Legacy of Play
          </h2>
          <p className="text-xl text-ce-on-surface-variant mb-8 leading-relaxed">
            We believe a lawn is more than just grass; it is a stage for your
            family's most precious memories. From the first steps of a toddler
            to grand summer garden parties, our mission is to provide the
            perfect foundation.
          </p>
          <blockquote className="text-lg text-ce-on-surface-variant/80 mb-10 leading-relaxed italic border-l-4 border-ce-secondary-fixed-dim pl-6">
            "We don't just cut grass. We curate landscapes that invite
            connection and celebrate the art of living outdoors."
          </blockquote>

          {/* Stats */}
          <div className="flex items-center gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <p className="text-4xl font-headline text-ce-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-ce-secondary mt-1">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-12 bg-ce-outline-variant/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
