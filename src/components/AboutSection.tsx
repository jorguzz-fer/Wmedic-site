import { motion } from "framer-motion";
const aboutImage = "/images/5.webp";

const stats = [
  { value: "50k+", label: "Atendimentos Realizados" },
  { value: "NPS 96,5%", label: "Satisfação dos Pacientes" },
  { value: "20+", label: "Estados Atendidos" },
  { value: "+20", label: "Especialidades Disponíveis" },
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
              Como funciona
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Saúde acessível <span className="text-gradient">de verdade.</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
              Com a WOW+ você tem acesso à uma rede completa de saúde e benefícios. 
              Tudo funciona de forma simples:
            </p>
            
            <ul className="mt-8 space-y-4 font-sans text-foreground/80 font-medium text-lg">
              <li className="flex items-center gap-4 border-l-2 border-orange pl-4 bg-muted/40 py-2 rounded-r-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">1</span>
                Ative sua assinatura
              </li>
              <li className="flex items-center gap-4 border-l-2 border-orange pl-4 bg-muted/40 py-2 rounded-r-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">2</span>
                Escolha o atendimento que precisa
              </li>
              <li className="flex items-center gap-4 border-l-2 border-orange pl-4 bg-muted/40 py-2 rounded-r-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">3</span>
                Use quando quiser — online ou presencial
              </li>
            </ul>

            <p className="font-sans text-lg mt-8 leading-relaxed font-semibold text-foreground">
              Sem burocracia, sem filas e com preços acessíveis.
            </p>
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
                alt="Equipe WOW Mais"
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
