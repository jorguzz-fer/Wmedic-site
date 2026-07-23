import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Lightning,
  ClipboardText,
  Rocket,
  CheckCircle,
  Clock,
  CurrencyDollar,
} from "@phosphor-icons/react";

const plans = [
  {
    name: "SMART",
    tag: "Uso Individual",
    price: "29,90",
    period: "/mês",
    description: "Saúde inteligente. Sem burocracia.",
    features: [
      "Clínico Geral online 24/7",
      "Pediatria online 24/7",
      "Especialidades com coparticipação reduzida",
      "Desconto em exames e medicamentos",
    ],
    avulso: "Consultas com especialistas por coparticipação reduzida",
    link: "https://app.wowmais.com.br/consumer?ref=negócioswowbrasil",
    highlighted: false,
  },
  {
    name: "CARE+",
    tag: "Mais Escolhido",
    price: "49,90",
    period: "/mês",
    description: "Mais cuidado para você e sua família",
    features: [
      "Tudo do plano SMART",
      "1 Psicologia + 1 Nutrição + 1 Especialidade por mês",
      "+20 especialidades médicas",
      "Dependentes por R$19,90 / vida",
      "Qualquer pessoa, qualquer membro, seja quem for, qualquer idade",
      "Descontos em exames e medicamentos",
    ],
    avulso: "Consultas adicionais por coparticipação reduzida",
    link: "https://app.wowmais.com.br/consumer?ref=negócioswowbrasil",
    highlighted: true,
  },
];

const intensivo = [
  { label: "Psicologia Intensiva", detail: "4 sessões/mês (1 por semana)" },
  { label: "Nutrição Intensiva", detail: "4 sessões/mês (1 por semana)" },
];

const sidePerks = [
  { Icon: Lightning, label: "Sem fila" },
  { Icon: ClipboardText, label: "Sem burocracia" },
  { Icon: Rocket, label: "Atendimento imediato" },
  { Icon: CheckCircle, label: "Resolve na hora" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-navy">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
            Planos para pessoas e famílias
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
            Escolha simples.{" "}
            <span className="text-gradient">Uso imediato.</span>
          </h2>
          <p className="text-secondary-foreground/60 font-sans text-base mt-3">
            Saúde que cabe na vida — e no bolso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-center mt-12">
          {/* ── Plans ── */}
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-3xl p-8 relative flex flex-col ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-[0_0_50px_-10px_rgba(253,131,17,0.6)] border border-orange-light ring-4 ring-navy z-10 scale-100 lg:scale-105"
                  : "bg-navy-light text-secondary-foreground border border-secondary-foreground/10"
              }`}
            >
              {/* Top badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full whitespace-nowrap">
                  Mais Escolhido
                </div>
              )}

              {/* Plan name tag */}
              <div
                className={`inline-block self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                  plan.highlighted
                    ? "bg-primary-foreground/20 text-white"
                    : "bg-secondary-foreground/10 text-secondary-foreground/70"
                }`}
              >
                {plan.name}
              </div>

              <h3 className="font-display text-xl font-bold mb-1">{plan.description}</h3>
              <p
                className={`font-sans text-sm mb-5 ${
                  plan.highlighted ? "text-primary-foreground/80" : "text-secondary-foreground/60"
                }`}
              >
                {plan.tag}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="font-sans text-lg relative top-[-0.8rem]">R$</span>
                <span className="font-display text-6xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`font-sans text-sm ml-1 ${
                    plan.highlighted ? "text-primary-foreground/70" : "text-secondary-foreground/50"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-sans text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white" : "text-orange"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted
                          ? "text-primary-foreground/90"
                          : "text-secondary-foreground/75"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Avulso note */}
              <div
                className={`text-xs font-sans px-3 py-2 rounded-lg mb-6 ${
                  plan.highlighted
                    ? "bg-primary-foreground/10 text-primary-foreground/70"
                    : "bg-secondary-foreground/5 text-secondary-foreground/50"
                }`}
              >
                {plan.avulso}
              </div>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 px-6 rounded-full font-sans font-bold text-base transition-colors ${
                  plan.highlighted
                    ? "bg-secondary text-secondary-foreground hover:bg-navy-dark shadow-xl"
                    : "bg-primary text-primary-foreground hover:bg-orange-dark shadow-orange"
                }`}
              >
                Assinar {plan.name}
              </a>
            </motion.div>
          ))}

          {/* ── Side: Acesso Imediato ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-navy-light border border-secondary-foreground/10 rounded-2xl p-6">
              <h4 className="font-display text-base font-bold text-secondary-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
                <Clock size={20} weight="duotone" className="text-primary" />
                Acesso imediato à saúde
              </h4>
              <div className="space-y-4">
                {sidePerks.map((p) => (
                  <div key={p.label} className="flex items-center gap-3">
                    <p.Icon size={24} weight="duotone" className="text-primary flex-shrink-0" />
                    <span className="font-sans text-base font-medium text-secondary-foreground/80">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA banner */}
            <div className="bg-gradient-orange rounded-2xl p-6 text-center">
              <p className="font-sans text-xs text-white/80 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
                <CurrencyDollar size={14} weight="fill" /> Lembre-se
              </p>
              <p className="font-display text-lg font-bold text-white leading-snug">
                Mais barato que uma única consulta particular
              </p>
              <a
                href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-white text-orange-dark px-6 py-2.5 rounded-full font-sans font-bold text-sm hover:bg-white/90 transition-colors"
              >
                Começar agora →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Add-on: Acompanhamento Intensivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto bg-navy-light border border-secondary-foreground/10 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-primary font-sans text-xs font-semibold uppercase tracking-widest">
                Add-on opcional
              </span>
              <h4 className="font-display text-xl font-bold text-secondary-foreground mt-1">
                Acompanhamento Intensivo
              </h4>
              <p className="font-sans text-sm text-secondary-foreground/60 mt-1">
                Disponível para qualquer plano, quando você precisa de um cuidado mais próximo.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:min-w-[260px]">
              {intensivo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <div>
                    <div className="font-sans text-sm font-semibold text-secondary-foreground">
                      {item.label}
                    </div>
                    <div className="font-sans text-xs text-secondary-foreground/50">
                      {item.detail}
                    </div>
                  </div>
                  <span className="font-display text-base font-bold text-primary whitespace-nowrap">
                    R$ 199,90
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
