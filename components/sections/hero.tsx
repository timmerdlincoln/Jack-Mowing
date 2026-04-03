
export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image + gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="Stately luxury mansion with a sprawling, perfectly manicured green lawn at sunset"
          className="w-full h-full object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-ce-background" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="text-center px-6 max-w-4xl">
        <span className="font-label uppercase tracking-[0.3em] text-white/80 text-sm mb-6 block drop-shadow-sm">
          Perfection in every cut
        </span>
        <h1 className="font-headline text-6xl md:text-8xl text-white leading-tight mb-10 drop-shadow-lg">
          Refined Nature,
          <br />
          <span className="italic">Expertly Curated</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-ce-primary text-ce-on-primary px-10 py-5 text-base font-medium shadow-2xl hover:opacity-90 transition-opacity"
          >
            Begin Your Transformation
          </a>
          <a
            href="#services"
            className="rounded-full glass-effect text-white border border-white/20 bg-white/10 hover:bg-white/20 px-10 py-6 text-base font-medium transition-all inline-flex items-center justify-center"
          >
            View Our Yards
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
