import { motion } from "framer-motion";
const aboutImage = "/images/home-2.jpg";

{/* TODO cliente: números reais */}
const stats = [
  { value: "24h", label: "Clínicos disponíveis" },
  { value: "Nacional", label: "Rede credenciada" },
  { value: "100%", label: "Foco no paciente" },
  { value: "Wow+", label: "Grupo integrado" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Sobre a WMedic
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Gestão da operação assistencial do grupo{" "}
              <span className="text-gradient">Wow+</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
              A WMedic é responsável por garantir excelência, qualidade e acesso à
              saúde de forma humanizada, segura e eficiente — coordenando corpo
              clínico, rede credenciada, qualidade assistencial e a experiência de
              cada paciente.
            </p>

            <ul className="mt-8 space-y-4 font-sans text-foreground/80 font-medium text-lg">
              <li className="flex items-center gap-4 border-l-2 border-orange pl-4 bg-muted/40 py-2 rounded-r-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">1</span>
                Corpo clínico gerido e coordenado
              </li>
              <li className="flex items-center gap-4 border-l-2 border-orange pl-4 bg-muted/40 py-2 rounded-r-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">2</span>
                Rede credenciada em todo o Brasil
              </li>
              <li className="flex items-center gap-4 border-l-2 border-orange pl-4 bg-muted/40 py-2 rounded-r-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">3</span>
                Protocolos clínicos e segurança do paciente
              </li>
              <li className="flex items-center gap-4 border-l-2 border-orange pl-4 bg-muted/40 py-2 rounded-r-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">4</span>
                Governança de alta performance
              </li>
            </ul>

            <a
              href="/sobre"
              className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-semibold text-base hover:bg-orange-dark transition-colors shadow-orange"
            >
              Saiba mais
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src={aboutImage}
                alt="WMedic — Gestão Médica"
                className="w-full aspect-square object-cover object-top"
              />
            </div>
            {/* Stats overlay */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 text-center shadow-card"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
