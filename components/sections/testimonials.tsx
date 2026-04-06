"use client";

const testimonials = [
  {
    name: "Nyla Witzel",
    quote:
      "I had a great experience with Jack Mowing. The attention to detail was outstanding, every edge was clean, the lawn was evenly cut, and nothing was rushed. Customer service was excellent from start to finish, with clear communication.",
    time: "1 month ago",
  },
  {
    name: "Rachel Gibson",
    quote:
      "We've been using Jack Mowing as our lawn care service for a couple seasons now and are very happy with our service. Brayden is always on top of communication and they do a great job with the lawn. A+ service all around.",
    time: "1 month ago",
  },
  {
    name: "Dallas Flynn",
    quote:
      "The guys came over and serviced me multiple times in the front and back. Elijah was kind and very thorough. When he finished, it was all over for me. Instant 5 star!!",
    time: "4 weeks ago",
  },
  {
    name: "Steven",
    quote:
      "Brayden and his crew showed up quick when we moved into a new home. They are very kind and responsive as well as followed up to ask if they had worked to our satisfaction. I recommend him for all of your lawn needs.",
    time: "5 months ago",
  },
  {
    name: "Tori Evans",
    quote:
      "Jack Mowing was very helpful after I broke my mower and was in the process of selling my house. They kept my lawn neat and tidy, were consistent & affordable. Communication with the owner was convenient & easy. Highly recommend.",
    time: "4 months ago",
  },
  {
    name: "Brayden Bayliss",
    quote:
      "The service was exceptional and the guys made my lawn look fantastic. Brayden did a great job getting in and out with his crew!",
    time: "2 months ago",
  },
  {
    name: "Katherine Bezzina",
    quote:
      "Absolutely fantastic and professional lawn care service. Communication is prompt and they were able to add us on as a client same day. Recommend strongly for your lawn care needs.",
    time: "4 months ago",
  },
  {
    name: "Kendall Anglin",
    quote:
      "LawnMasters in Lincoln, NE is reliable, professional, and does great work. My lawn always looks clean and well cared for, and they're easy to communicate with. Highly recommend!",
    time: "2 months ago",
  },
  {
    name: "Dave Michael",
    quote:
      "Brayden and the Jack Mowing crew applied lawn treatments on time and took care of my army worm problem this year. They're always prompt and listen to my concerns. They also installed my Christmas lights and did a great job.",
    time: "4 months ago",
  },
  {
    name: "Ashley Ellis",
    quote:
      "Service is great — my yard always looked amazing after they were done. Communication is amazing. I'd definitely recommend them to anyone. Thank you again.",
    time: "4 months ago",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="relative bg-ce-surface-container-lowest p-10 rounded-[1rem] flex-shrink-0 w-[340px] mx-4 flex flex-col">
      <span className="material-symbols-outlined text-ce-tertiary-fixed-dim text-4xl absolute -top-5 left-10 select-none">
        format_quote
      </span>
      <Stars />
      <p className="text-base text-ce-on-surface leading-relaxed italic mb-6 flex-1">
        "{t.quote}"
      </p>
      <div>
        <p className="font-bold text-ce-primary">{t.name}</p>
        <p className="text-xs text-ce-secondary uppercase tracking-widest mt-1">{t.time}</p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-32 bg-ce-surface-container-high overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-track {
          animation: scroll-left 50s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 mb-16">
        <h2 className="font-headline text-center text-5xl text-ce-primary">
          Voices of Our Clients
        </h2>
      </div>

      <div className="flex testimonial-track w-max items-stretch">
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </section>
  );
}
