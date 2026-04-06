import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "The Seasonal",
    subtitle: "Essential Stewardship",
    price: "$450",
    period: "/ MONTHLY",
    features: [
      "Bi-weekly Precision Mowing",
      "Edge Refining & Cleanup",
      "Seasonal Mineral Enrichment",
    ],
    icon: "check",
    cta: "Select Plan",
    premium: false,
  },
  {
    name: "The Concierge",
    subtitle: "Full Home Management",
    price: "$875",
    period: "/ MONTHLY",
    features: [
      "Daily Home Inspection",
      "Priority Storm Response",
      "Bespoke Shrub Sculpting",
      "Smart Hydration Control",
    ],
    icon: "verified",
    cta: "Inquire Now",
    premium: true,
    badge: "Most Coveted",
  },
];

export function PricingSection() {
  return (
    <section className="py-32 bg-white px-8 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="font-label uppercase tracking-[0.3em] text-ce-secondary text-sm mb-4 block">
            Invest in Stewardship
          </span>
          <h2 className="font-headline text-5xl text-ce-primary">
            Our Plans
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col min-h-[700px] p-16 rounded-[1rem] transition-all duration-300",
                tier.premium
                  ? "bg-ce-primary text-white shadow-2xl hover:-translate-y-1"
                  : "bg-ce-surface-container-low/50 border border-ce-outline-variant/20 hover:shadow-lg"
              )}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute top-8 inset-x-0 text-center">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Top content */}
              <div className="text-center flex-1">
                <h3
                  className={cn(
                    "font-headline text-4xl mb-4",
                    tier.premium ? "text-white mt-6" : "text-ce-primary"
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "mb-12 text-sm uppercase tracking-widest font-label",
                    tier.premium ? "text-white/70" : "text-ce-on-surface-variant"
                  )}
                >
                  {tier.subtitle}
                </p>

                {/* Price */}
                <div className="mb-12">
                  <span
                    className={cn(
                      "text-5xl font-headline",
                      !tier.premium && "text-ce-primary"
                    )}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "text-xs ml-1",
                      tier.premium ? "text-white/60" : "text-ce-on-surface-variant/60"
                    )}
                  >
                    {tier.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-5 mb-16 text-left max-w-[280px] mx-auto">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-4">
                      <span
                        className={cn(
                          "material-symbols-outlined mt-0.5",
                          tier.premium ? "text-white" : "text-ce-secondary"
                        )}
                      >
                        {tier.icon}
                      </span>
                      <span className="text-base">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 mt-auto">
                {tier.premium ? (
                  <Button
                    className="w-full py-6 bg-white text-ce-primary font-bold hover:bg-stone-100 uppercase text-sm tracking-[0.2em] rounded-full transition-all"
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                ) : (
                  <button className="w-full py-5 border-b-2 border-ce-primary text-ce-primary font-bold hover:bg-ce-primary/5 transition-all uppercase text-sm tracking-[0.2em]">
                    {tier.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="mt-20 text-center text-ce-on-surface-variant/60 text-sm italic">
          Custom enterprise solutions available for estates exceeding 5 acres.{" "}
          <a
            href="#contact"
            className="text-ce-primary underline underline-offset-4 font-medium"
          >
            Request a site visit.
          </a>
        </p>
      </div>
    </section>
  );
}
