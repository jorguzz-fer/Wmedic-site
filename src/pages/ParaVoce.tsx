import { motion } from "framer-motion";
import {
  ArrowUpRight,
  WhatsappLogo,
  Heart,
  CheckCircle,
  Stethoscope,
  Brain,
  ForkKnife,
  UsersThree,
  Lightning,
  ShieldCheck,
  Clock,
  CurrencyDollar,
  Sparkle,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";

const steps = [
  { number: "1", text: "Ative sua assinatura pelo app ou site" },
  { number: "2", text: "Escolha o atendimento que precisa" },
  { number: "3", text: "Use quando quiser — online ou presencial" },
];

const services = [
  {
    Icon: Heart,
    title: "WOW+ Med",
    description: "Médicos 24h, especialistas online e consultas presenciais com desconto.",
    link: "/serviços#med",
  },
];

const plans = [
  {
    name: "SMART",
    tag: "Uso individual",
    price: "29,90",
    highlighted: false,
    badge: null,
    features: [
      { Icon: Stethoscope, text: "Clínico Geral online 24/7" },
      { Icon: Stethoscope, text: "Pediatria online 24/7" },
      { Icon: CheckCircle, text: "Especialidades com coparticipação reduzida" },
      { Icon: CurrencyDollar, text: "Desconto em exames e medicamentos" },
    ],
    avulso: "Consultas com especialistas por coparticipação reduzida",
  },
  {
    name: "CARE+",
    tag: "Mais Escolhido",
    price: "49,90",
    highlighted: true,
    badge: "Mais Escolhido",
    features: [
      { Icon: CheckCircle, text: "Tudo do plano SMART" },
      { Icon: Brain, text: "1 Psicologia + 1 Nutrição + 1 Especialidade por mês" },
      { Icon: Stethoscope, text: "+20 especialidades médicas" },
      { Icon: UsersThree, text: "Dependentes por R$19,90 / vida" },
      { Icon: ShieldCheck, text: "Qualquer pessoa, qualquer membro, seja quem for, qualquer idade" },
      { Icon: CurrencyDollar, text: "Descontos em exames e medicamentos" },
    ],
    avulso: "Consultas adicionais por coparticipação reduzida",
  },
];

const intensivo = [
  { Icon: Brain, label: "Psicologia Intensiva", detail: "4 sessões/mês (1 por semana)" },
  { Icon: ForkKnife, label: "Nutrição Intensiva", detail: "4 sessões/mês (1 por semana)" },
];

const reasons = [
  { Icon: Clock, text: "Atendimento médico 24h" },
  { Icon: UsersThree, text: "Rede nacional de clínicas" },
  { Icon: CurrencyDollar, text: "Descontos em exames e medicamentos" },
  { Icon: Heart, text: "Benefícios para toda a família" },
  { Icon: Lightning, text: "Sem burocracia" },
  { Icon: ShieldCheck, text: "100% digital" },
];

const faqs = [
  {
    question: "Como funciona a telemedicina do WOW+ Med?",
    answer:
      "Nosso serviço de telemedicina está disponível 24 horas por dia, 7 dias por semana. Você acessa consultas médicas online diretamente pelo app, com profissionais qualificados prontos para atender você e sua família.",
  },
  {
    question: "Qual a diferença entre o plano SMART e o CARE+?",
    answer:
      "O SMART (R$29,90) é individual e foca no acesso rápido à saúde: Clínico Geral e Pediatria online 24/7, especialidades por coparticipação e desconto em medicamentos. O CARE+ (R$49,90) inclui tudo do SMART e ainda traz, todo mês, 1 sessão de Psicologia, 1 de Nutrição e 1 consulta com Especialidade Médica — além de permitir dependentes por R$19,90/pessoa.",
  },
  {
    question: "Posso incluir minha família no plano?",
    answer:
      "Sim! No plano CARE+, você pode incluir qualquer pessoa como dependente — qualquer membro, seja quem for, de qualquer idade. Dependentes adicionais custam apenas R$19,90 por vida. O plano SMART é individual e não inclui dependentes.",
  },
  {
    question: "Psicologia e Nutrição estão inclusas em qual plano?",
    answer:
      "No plano CARE+ você tem, todo mês, 1 sessão de Psicologia, 1 de Nutrição e 1 consulta com Especialidade Médica, sem custo adicional. Para um acompanhamento mais próximo, há o add-on opcional de Acompanhamento Intensivo (4 sessões/mês) por R$199,90.",
  },
  {
    question: "Como funciona a coparticipação?",
    answer:
      "Consultas adicionais com especialistas ficam disponíveis por coparticipação, com valores reduzidos para assinantes WOW+. Assim você só paga um valor menor quando realmente precisar de um atendimento além do que já está incluso no plano.",
  },
  {
    question: "A WOW+ é plano de saúde?",
    answer:
      "Não. A WOW+ é uma plataforma de serviços e benefícios em saúde que oferece acesso à telemedicina, descontos em consultas, exames e medicamentos por meio de parceiros e rede credenciada. Não substitui plano de saúde.",
  },
  {
    question: "Como faço para contratar?",
    answer:
      "A contratação é 100% digital. Basta acessar o app ou site, escolher o plano ideal e fazer seu cadastro. Em poucos minutos você já está ativo.",
  },
];

const ParaVocê = () => {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Para Você
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
                Saúde e bem-estar para{" "}
                <span className="text-gradient">você e sua família</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl leading-relaxed">
                Médicos 24h, mais de 20 especialidades, psicologia, nutrição e
                muito mais — por menos de R$1,67 por dia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Assine Agora
                  <ArrowUpRight size={20} />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511978369030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Tire suas dúvidas
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/5.webp"
                  alt="Família saudável"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Como Funciona ── */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Como funciona
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Simples assim, <span className="text-gradient">de verdade.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl font-bold mx-auto mb-6 shadow-orange">
                  {step.number}
                </div>
                <p className="font-sans text-lg font-medium text-foreground">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planos ── */}
      <section id="planos" className="py-24 bg-navy">
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
              Mais barato que uma única consulta particular.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12 items-center">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-3xl p-8 relative flex flex-col ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground shadow-[0_0_50px_-10px_rgba(253,131,17,0.6)] border border-orange-light ring-4 ring-navy z-10 scale-100 md:scale-105"
                    : "bg-navy-light text-secondary-foreground border border-secondary-foreground/10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className={`inline-block self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                  plan.highlighted ? "bg-primary-foreground/20 text-white" : "bg-secondary-foreground/10 text-secondary-foreground/70"
                }`}>
                  {plan.name}
                </div>

                <p className={`font-sans text-sm mb-4 ${plan.highlighted ? "text-primary-foreground/80" : "text-secondary-foreground/60"}`}>
                  {plan.tag}
                </p>

                <div className="mb-6">
                  <span className="font-sans text-base relative top-[-0.8rem]">R$</span>
                  <span className="font-display text-6xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`font-sans text-sm ml-1 ${plan.highlighted ? "text-primary-foreground/70" : "text-secondary-foreground/50"}`}>/mês</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 font-sans text-sm">
                      <f.Icon size={18} weight="duotone" className={`flex-shrink-0 ${plan.highlighted ? "text-white" : "text-primary"}`} />
                      <span className={plan.highlighted ? "text-primary-foreground/90" : "text-secondary-foreground/80"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className={`text-xs font-sans px-3 py-2 rounded-lg mb-6 ${
                  plan.highlighted ? "bg-primary-foreground/10 text-primary-foreground/65" : "bg-secondary-foreground/5 text-secondary-foreground/45"
                }`}>
                  {plan.avulso}
                </div>

                <a
                  href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full font-sans font-bold text-base transition-colors ${
                    plan.highlighted
                      ? "bg-secondary text-secondary-foreground hover:bg-navy-dark shadow-xl"
                      : "bg-primary text-primary-foreground hover:bg-orange-dark shadow-orange"
                  }`}
                >
                  <Sparkle size={18} weight="fill" />
                  Assinar {plan.name}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Add-on: Acompanhamento Intensivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 max-w-3xl mx-auto bg-navy-light border border-secondary-foreground/10 rounded-2xl p-6 md:p-8"
          >
            <div className="text-center mb-5">
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
            <div className="grid sm:grid-cols-2 gap-3">
              {intensivo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <item.Icon size={22} weight="duotone" className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-sans text-sm font-semibold text-secondary-foreground">
                        {item.label}
                      </div>
                      <div className="font-sans text-xs text-secondary-foreground/50">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                  <span className="font-display text-base font-bold text-primary whitespace-nowrap">
                    R$ 199,90
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Serviços Inclusos ── */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Tudo incluso
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Serviços que fazem a <span className="text-gradient">diferença</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.a
                key={service.title}
                href={service.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.Icon size={28} weight="duotone" className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">{service.description}</p>
                <span className="inline-block mt-4 text-primary font-sans text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Saiba mais →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-orange font-sans text-sm font-semibold uppercase tracking-widest">
              Diferencial
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3 leading-tight">
              Por que escolher a WOW+?
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-4">
              Ter saúde de qualidade nunca foi tão simples, rápido e econômico.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-navy-light/50 border border-secondary-foreground/10 px-6 py-4 rounded-xl backdrop-blur-sm"
              >
                <r.Icon size={22} weight="duotone" className="text-orange flex-shrink-0" />
                <span className="font-sans text-base md:text-lg font-medium text-secondary-foreground">
                  {r.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Perguntas Frequentes
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="font-sans text-base font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart size={48} weight="fill" className="text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Comece a cuidar do que mais importa hoje mesmo
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Cadastre-se e tenha acesso imediato a todos os benefícios WOW+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
              >
                <Sparkle size={22} weight="fill" />
                Começar Agora
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5511978369030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-secondary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-white/5 transition-colors"
              >
                <WhatsappLogo size={22} weight="fill" />
                Falar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ParaVocê;
