import { motion } from "framer-motion";
import { UsersThree, Lightning, Sparkle } from "@phosphor-icons/react";

const especialidades = [
  "Médicos Clínicos 24h",
  "Especialidades Médicas",
  "Psicologia",
  "Nutrição",
  "Pediatria",
  "Programas de Saúde",
  "Gestão de Escalas e Atendimento",
  "Suporte e Qualidade",
];

const EspecialidadesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Nossas frentes de atuação
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-3 leading-tight">
              Frentes de <span className="text-gradient">atuação</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mt-5 leading-relaxed max-w-md">
              Cobertura clínica completa, do atendimento 24h aos programas de
              saúde e à gestão de escalas.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 bg-muted/50 rounded-xl px-5 py-4">
                <UsersThree size={28} weight="duotone" className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans font-semibold text-foreground text-sm">
                    Para toda a família
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Consultas avulsas com qualquer especialidade a partir de{" "}
                    <strong className="text-primary">R$29,90</strong> — titular
                    ou dependentes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-muted/50 rounded-xl px-5 py-4">
                <Lightning size={28} weight="duotone" className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans font-semibold text-foreground text-sm">
                    Atendimento rápido
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Sem fila, sem espera. 80% dos casos resolvidos online, na
                    hora.
                  </p>
                </div>
              </div>
            </div>

            <p className="font-sans text-sm font-medium text-primary italic mt-8">
              Sua saúde, quando e onde precisar.{" "}
              <strong>Acessível para toda a família.</strong>
            </p>

            <a
              href="/contato"
              className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
            >
              Fale conosco
            </a>
          </motion.div>

          {/* Right: specialties grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-2.5">
              {especialidades.map((esp, i) => (
                <motion.div
                  key={esp}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-card hover:border-primary/40 hover:shadow-card-hover transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-sans text-sm font-medium text-foreground/85">
                    {esp}
                  </span>
                </motion.div>
              ))}

              {/* E muito mais */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: especialidades.length * 0.03 }}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-4 py-3 col-span-2"
              >
                <Sparkle size={18} weight="fill" />
                <span className="font-display text-sm font-bold">E muito mais!</span>
              </motion.div>
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { value: "24h", label: "Atendimento" },
                { value: "100%", label: "Online e seguro" },
                { value: "NPS 96,5%", label: "Satisfação" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border rounded-xl p-3 text-center shadow-card"
                >
                  <div className="font-display text-lg font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="font-sans text-xs text-muted-foreground mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesSection;
