const partners = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/parceiros/${i + 1}.jpg`,
  alt: `Parceiro ${i + 1}`,
}));

const MarqueeSection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden border-t border-b border-secondary-foreground/5">
      <div className="container mb-8 text-center">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Nossos Parceiros e Rede Credenciada
        </h3>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee items-center">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-16 md:h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
