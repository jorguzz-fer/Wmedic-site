import { motion } from "framer-motion";
import {
  CheckCircle,
  Laptop,
  Hospital,
  Flask,
  Pill,
} from "@phosphor-icons/react";

const networkItems = [
  { Icon: Laptop, text: "Atendimento clínico coordenado" },
  { Icon: Hospital, text: "Consultas presenciais na rede credenciada" },
  { Icon: Flask, text: "Exames em clínicas e laboratórios parceiros" },
  { Icon: Pill, text: "Cobertura distribuída em todo o Brasil" },
];

const NetworkSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/images/3.webp"
                alt="Rede credenciada WMedic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
            </div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="absolute -bottom-8 -right-8 bg-card border border-border p-6 rounded-2xl shadow-card max-w-[280px]"
            >
              {/* TODO cliente: números reais */}
              <div className="font-display text-orange font-bold text-2xl mb-1">Rede credenciada</div>
              <p className="font-sans text-sm text-muted-foreground">Qualificada e distribuída em todo o território nacional.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Nossa rede
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight mb-6">
              Rede credenciada <span className="text-gradient">em todo o Brasil.</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-8 leading-relaxed">
              A WMedic conecta pacientes a médicos, especialistas, clínicas e laboratórios em diversas regiões do Brasil,
              com uma rede credenciada qualificada. Assim você conta com:
            </p>

            <ul className="space-y-4 mb-8">
              {networkItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 font-sans font-medium text-lg text-foreground/80"
                >
                  <CheckCircle size={22} weight="fill" className="text-primary flex-shrink-0" />
                  {item.text}
                </motion.li>
              ))}
            </ul>

            <div className="bg-muted p-6 rounded-xl border-l-4 border-orange">
              <p className="font-sans text-lg font-semibold text-foreground/90">
                Mais acesso. Mais qualidade. Mais cuidado para cada paciente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
