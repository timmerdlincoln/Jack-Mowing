const services = [
  {
    tag: "Sculptural Form",
    title: "Pruning",
    description:
      "Hand-sculpted hedges and precision trimming that respect the natural architecture of your greenery.",
    icon: "content_cut",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkDamKycpfMLl85LF5jVyuFJi0fvtlNwLaaXS6_llOBBtWj2k7jwk9J5gBQ77H_FQhaZnpKxZ9o39ewY8dQY1zlwaTK1BU9BCib8kHyO5LMKwsZbhPBSDDgtwf_43j9Bif2oj30prEuK2ZfZrmoG5IQTPVK-6_1uAY9cYMZILV3BkgpEUFVIChauESTrkeoVvqlgcEbTKhbu8s40mcPEM513wf3WsOr793CDbO9sjFI_vdj9rWRVMBUIi6l0ECVdWViTGetb76Nb0",
    imageAlt:
      "Close-up of professional gardener using precision shears to prune decorative boxwood shrubs",
  },
  {
    tag: "Elemental Health",
    title: "Soil Nutrition",
    description:
      "Custom organic blends designed specifically for your estate's unique geological composition.",
    icon: "potted_plant",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGTkIJwwYFs42KXmxqYkysaKdjZpW-Vbql_sCug0bcn_hbkpvCMphgkrI9N7dPjiUlqBdyd3qPQv0Yx_G-LCe7hll7neY7eI9ocJ1t_nE8v2E7QmW0uNg_-Mo2ZjGCVwj2TGxUE3ril9Qtin9NPoDEsGP7wP4BOwmyGEPM5WBva2cwQTqzveWHEtGnd8MpcbNW--VZCptSppRHEbRfNGGt1Vltx2XRWJA9tHaEegNxPrSHl5qDYRLUuGVkvHLI3oauLr-3m8NAqiA",
    imageAlt:
      "Rich dark soil being turned by hand with small green sprouts emerging",
  },
  {
    tag: "Atmospheric Balance",
    title: "Hydration",
    description:
      "Intelligent water management systems that mirror natural rainfall patterns for deep-root health.",
    icon: "water_drop",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqaiLSyhfZdlg6Uihq8MSLLvJ445Faydbz2q6nrkBjd8moa_2wm6ClB8IdqytwgCuZfZ5pA_h-KwNzFfBIu_bn-an1FsOURMCEMdz3gviZjgvHAY3MTWh0JlJ_kakbkwT2fRTuVIO8RjqG3adsGotEA0VgSx2uAFqx4qzqJRMjzCdzLZAXWGaEyuQcPDj2Ha3zrLFk_GoaFbp5Ewip_Wkan-Oak6EvUJAkQ_Z_Q0DxYqhvLcylIqZgX4al-OtmTsXqUnk9CGIMzRM",
    imageAlt:
      "Automated irrigation system spraying a fine mist over a perfectly leveled emerald green lawn at dusk",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 px-8 md:px-12 bg-ce-surface">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-5xl text-ce-primary mb-6 leading-tight">
              Beautiful Lawns for Families to Flourish
            </h2>
            <p className="text-ce-on-surface-variant text-xl leading-relaxed">
              Our approach blends botanical precision with an editorial eye,
              ensuring your estate is not just maintained, but a masterpiece of
              living art.
            </p>
          </div>
          <div className="pb-2 shrink-0">
            <a
              href="#"
              className="text-ce-primary font-bold border-b-2 border-ce-secondary-fixed-dim pb-1 hover:border-ce-primary transition-colors"
            >
              Explore All Services
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-ce-surface-container-lowest rounded-[1rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-[380px] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10">
                <span className="text-ce-secondary font-label tracking-widest uppercase text-xs mb-4 block">
                  {s.tag}
                </span>
                <h3 className="font-headline text-3xl mb-4 text-ce-on-surface">
                  {s.title}
                </h3>
                <p className="text-ce-on-surface-variant mb-6 leading-relaxed">
                  {s.description}
                </p>
                <span className="material-symbols-outlined text-ce-primary">
                  {s.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
