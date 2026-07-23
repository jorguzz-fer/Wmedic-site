import { motion } from "framer-motion";
import { X, Check, ArrowUpRight } from "lucide-react";
import {
  ArrowsClockwise,
  ChartBar,
  Heart,
  Buildings,
  CalendarCheck,
  Rocket,
} from "@phosphor-icons/react";

const rows = [
  {
    Icon: ArrowsClockwise,
    criterio: "Processos",
    outros: "Processos manuais",
    wow: "Processos padronizados",
  },
  {
    Icon: ChartBar,
    criterio: "Gestão",
    outros: "Sem indicadores",
    wow: "Dados e governança",
  },
  {
    Icon: Heart,
    criterio: "Atendimento",
    outros: "Atendimento fragmentado",
    wow: "Jornada humanizada",
  },
  {
    Icon: Buildings,
    criterio: "Rede",
    outros: "Rede sem curadoria",
    wow: "Rede credenciada qualificada",
  },
  {
    Icon: CalendarCheck,
    criterio: "Escalas",
    outros: "Escalas descoordenadas",
    wow: "Gestão de escalas e atendimento",
  },
];

const ComparativoSection = () => {
  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
            Comparativo
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3 leading-tight max-w-3xl mx-auto">
            Gestão tradicional{" "}
            <span className="text-gradient">× Gestão WMedic</span>
          </h2>
          <p className="text-secondary-foreground/60 font-sans text-base mt-4">
            A diferença entre operar no improviso e operar com gestão.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
            <div className="px-5 py-4 font-display text-xs font-bold uppercase tracking-widest text-white/40">
              Critério
            </div>
            <div className="px-5 py-4 font-display text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
              <X className="w-4 h-4" /> Gestão tradicional
            </div>
            <div className="px-5 py-4 font-display text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Check className="w-4 h-4" /> Gestão WMedic
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.criterio}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`grid grid-cols-3 border-b border-white/[0.06] ${
                i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
              }`}
            >
              <div className="px-5 py-4 flex items-center gap-3">
                <row.Icon
                  size={18}
                  weight="duotone"
                  className="text-primary flex-shrink-0"
                />
                <span className="font-sans text-sm font-medium text-white/70">
                  {row.criterio}
                </span>
              </div>
              <div className="px-5 py-4 flex items-center gap-2">
                <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="font-sans text-sm text-red-300/80">{row.outros}</span>
              </div>
              <div className="px-5 py-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-sans text-sm font-semibold text-primary">
                  {row.wow}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto bg-gradient-orange rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-sans text-sm text-white/80 mb-1">
              Sua operação assistencial pode funcionar melhor...
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
              Conheça a gestão médica{" "}
              <span className="underline decoration-white/40">
                da WMedic.
              </span>
            </p>
          </div>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-orange-dark px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/90 transition-colors whitespace-nowrap shadow-lg flex-shrink-0"
          >
            <Rocket size={20} weight="fill" />
            Fale Conosco
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparativoSection;
