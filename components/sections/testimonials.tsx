const testimonials = [
  {
    quote:
      "The team at The Curated Estate has transformed our grounds into a sanctuary. Their attention to detail is quite simply unparalleled in the industry.",
    name: "Julianna Vane",
    estate: "Somerset Heights Estate",
  },
  {
    quote:
      "Finally, a service that understands the importance of organic soil health without compromising on the visual perfection of a formal garden.",
    name: "Alistair Thorne",
    estate: "The Thorne Manor",
  },
  {
    quote:
      "Their concierge service has saved me countless hours. I can trust that my estate is always guest-ready, regardless of the season.",
    name: "Marcus Sterling",
    estate: "Sterling Oaks",
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-32 bg-ce-surface-container-high px-8 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-headline text-center text-5xl text-ce-primary mb-20">
          Voices of the Estate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-ce-surface-container-lowest p-12 rounded-[1rem] relative"
            >
              {/* Opening quote */}
              <span className="material-symbols-outlined text-ce-tertiary-fixed-dim text-5xl absolute -top-6 left-12 select-none">
                format_quote
              </span>

              <p className="text-lg text-ce-on-surface mb-8 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-ce-primary">{t.name}</p>
                <p className="text-sm text-ce-secondary uppercase tracking-widest mt-1">
                  {t.estate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
