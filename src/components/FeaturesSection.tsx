import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Atendimento médico 24h",
  "Rede nacional de clínicas",
  "Descontos em exames e medicamentos",
  "Benefícios para toda a família",
  "Sem burocracia"
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange font-sans text-sm font-semibold uppercase tracking-widest">
            Diferencial
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Por que escolher a WOW+?
          </h2>
          <p className="text-secondary-foreground/70 font-sans text-lg mt-4 max-w-2xl mx-auto">
            Ter saúde de qualidade nunca foi tão simples, rápido e econômico.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-navy-light/50 border border-secondary-foreground/10 px-6 py-4 rounded-xl backdrop-blur-sm"
            >
              <CheckCircle2 className="text-orange w-6 h-6 flex-shrink-0" />
              <span className="font-sans text-base md:text-lg font-medium">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
