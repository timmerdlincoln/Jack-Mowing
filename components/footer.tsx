const exploreLinks = [
  { label: "Sustainability Pledge", href: "#" },
  { label: "Careers", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#03210C] text-white rounded-t-[3rem] mt-24">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-headline italic text-3xl mb-6 tracking-wide">
              Jack Mowing
            </h3>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-8">
              Defining the standard of high-end residential landscaping through
              artistic vision and botanical expertise.
            </p>
            <div className="flex gap-6">
              {(["share", "mail", "call"] as const).map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label={icon}
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 tracking-widest uppercase gap-4">
          <span>© 2024 Verdant. Jack Mowing.</span>
          <div className="flex gap-8">
            {["Journal", "Heritage", "Studio"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
