import { motion } from "framer-motion";
import {
  ArrowUpRight,
  WhatsappLogo,
  ChartLineUp,
  ShieldCheck,
  Gauge,
  Clock,
  CheckCircle,
  Stethoscope,
  Brain,
  DesktopTower,
  Star,
  Briefcase,
  Heart,
  Heartbeat,
  UsersFour,
  MapTrifold,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5511978369030&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20os%20planos%20empresariais%20WOW%2B.";

const benefits = [
  {
    Icon: UsersFour,
    title: "Retenção de Talentos",
    description:
      "Colaboradores com benefícios de saúde ficam mais satisfeitos, produtivos e leais à empresa.",
  },
  {
    Icon: ChartLineUp,
    title: "Menos Faltas",
    description:
      "Acesso rápido a médicos online reduz absenteísmo e mantém a equipe operando no máximo.",
  },
  {
    Icon: ShieldCheck,
    title: "NR-1 Incluso",
    description:
      "O plano CARE+ já inclui conformidade com a NR-1 — riscos psicossociais mapeados, documentados e monitorados.",
  },
  {
    Icon: Gauge,
    title: "Dashboard de RH",
    description:
      "Painel completo para gestão dos colaboradores, relatórios de uso e controle de benefícios.",
  },
];

const plans = [
  {
    id: "smart",
    Icon: Briefcase,
    name: "SMART",
    tag: "Saúde inteligente para o time",
    price: "19,90",
    highlighted: false,
    badge: null,
    features: [
      { Icon: Stethoscope, text: "Clínico Geral + Pediatria 24/7" },
      { Icon: Brain, text: "1 Psicologia + 1 Nutrição por mês" },
      { Icon: DesktopTower, text: "Dashboard de RH" },
      { Icon: UsersFour, text: "Dependentes por R$19,90 / vida" },
    ],
    avulso: "Especialidades por coparticipação facilitada",
    cta: "Falar sobre o plano",
  },
  {
    id: "care",
    Icon: Star,
    name: "CARE+",
    tag: "Saúde ampliada + NR-1",
    price: "24,90",
    highlighted: true,
    badge: "Mais Vendido",
    features: [
      { Icon: CheckCircle, text: "Tudo do SMART" },
      { Icon: Stethoscope, text: "1 Especialidade Médica por mês + 20 especialidades" },
      { Icon: ShieldCheck, text: "Gestão NR-1 e riscos psicossociais" },
      { Icon: UsersFour, text: "Dependentes por R$19,90 / vida" },
    ],
    avulso: "Consultas adicionais por coparticipação reduzida",
    cta: "Falar sobre o plano",
  },
];

const intensivo = [
  { Icon: Brain, label: "Psicologia Intensiva", detail: "4 sessões/mês (1 por semana)" },
  { Icon: Heartbeat, label: "Nutrição Intensiva", detail: "4 sessões/mês (1 por semana)" },
];

const pillars = [
  { Icon: Clock, label: "Atendimento imediato" },
  { Icon: ShieldCheck, label: "Sem carência" },
  { Icon: UsersFour, label: "Menos faltas" },
  { Icon: MapTrifold, label: "Cobertura nacional" },
];

const steps = [
  {
    number: "1",
    title: "Fale com um consultor",
    description: "Entre em contato pelo WhatsApp. Apresentamos a solução ideal para o porte e necessidade da sua empresa.",
  },
  {
    number: "2",
    title: "Escolha o plano ideal",
    description: "SMART ou CARE+ — definimos juntos o pacote que faz mais sentido para o seu time.",
  },
  {
    number: "3",
    title: "Ative para a equipe",
    description: "Em poucos minutos todos os colaboradores já têm acesso imediato a médicos, especialistas e benefícios.",
  },
];

const faqs = [
  {
    question: "Qual o número mínimo de colaboradores?",
    answer:
      "Atendemos empresas de todos os portes, a partir de 1 colaborador. Para grupos acima de 20 vidas, negociamos condições especiais.",
  },
  {
    question: "O que é o plano CARE+ e por que ele é o mais vendido?",
    answer:
      "O plano CARE+ inclui tudo do SMART (Clínico Geral e Pediatria 24/7, Psicologia, Nutrição e Dashboard RH) e ainda traz 1 consulta com Especialidade Médica por mês, acesso ampliado a especialidades e a Gestão Inteligente NR-1 — com mapeamento de riscos psicossociais, dashboard, trilhas educacionais e relatórios gerenciais. É o plano mais completo para empresas que querem cumprir a legislação e cuidar da equipe.",
  },
  {
    question: "O que está incluso na adequação NR-1?",
    answer:
      "O plano CARE+ inclui o mapeamento de riscos psicossociais (com metodologias COPSOQ e HSE), check-in emocional contínuo, trilhas educacionais para colaboradores e lideranças, dashboard de indicadores anonimizados e relatórios gerenciais — tudo integrado ao Dashboard de RH para comprovar a conformidade com a norma.",
  },
  {
    question: "Como funciona o Dashboard de RH?",
    answer:
      "É um painel administrativo 100% online onde o RH pode incluir e remover colaboradores, acompanhar o uso dos benefícios, gerar relatórios e controlar cobranças — tudo em um só lugar.",
  },
  {
    question: "A empresa paga o plano ou o colaborador?",
    answer:
      "O modelo é flexível. A empresa pode subsidiar total ou parcialmente o valor, ou disponibilizar o benefício para que o colaborador pague direto. Definimos juntos o modelo que faz mais sentido.",
  },
  {
    question: "Existe carência?",
    answer:
      "Não. Após a ativação, os colaboradores já podem usar todos os serviços no mesmo dia — médicos online, especialistas e benefícios.",
  },
  {
    question: "A WOW+ substitui o plano de saúde?",
    answer:
      "A WOW+ é uma plataforma de saúde digital que complementa ou substitui parcialmente planos tradicionais. Não é plano de saúde regulamentado pela ANS, mas oferece acesso rápido a médicos, especialistas, exames e medicamentos com muito mais agilidade e custo acessível.",
  },
];

const ParaEmpresas = () => {
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
                Para Empresas
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
                Soluções para empresas{" "}
                <span className="text-gradient">de todos os portes</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl leading-relaxed">
                Reduza custos. Aumente produtividade. Ofereça saúde real para seus colaboradores com planos a partir de{" "}
                <strong className="text-primary">R$19,90/vida</strong>.
              </p>

              {/* mini stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 max-w-sm">
                {[
                  { value: "Sem carência", label: "Ativo no mesmo dia" },
                  { value: "NR-1", label: "Incluso no plano CARE+" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="font-display text-lg font-bold text-primary">{s.value}</div>
                    <div className="font-sans text-xs text-secondary-foreground/60 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Fale com um Consultor
                </a>
                <a
                  href="#planos"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  Ver os planos
                  <ArrowUpRight size={20} />
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
                  src="/images/10.jpg"
                  alt="Equipe empresarial"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Benefícios ── */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Vantagens
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Por que oferecer a{" "}
              <span className="text-gradient">WOW+ para sua equipe?</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                  <b.Icon size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{b.description}</p>
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
            className="text-center mb-14"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Planos empresariais
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
              Menor custo.{" "}
              <span className="text-gradient">Maior impacto na empresa.</span>
            </h2>
            <p className="text-secondary-foreground/60 font-sans text-base mt-3">
              Escolha o plano certo para o momento da sua empresa.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-center">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
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

                {/* Plan header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    plan.highlighted ? "bg-primary-foreground/20" : "bg-secondary-foreground/10"
                  }`}>
                    <plan.Icon size={20} weight="duotone" className={plan.highlighted ? "text-white" : "text-primary"} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${
                      plan.highlighted ? "text-primary-foreground/80" : "text-secondary-foreground/50"
                    }`}>
                      {plan.name}
                    </div>
                    <div className={`text-sm font-medium ${
                      plan.highlighted ? "text-primary-foreground/90" : "text-secondary-foreground/70"
                    }`}>
                      {plan.tag}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-sans text-base relative top-[-0.7rem]">R$</span>
                  <span className="font-display text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`font-sans text-sm ml-1 ${
                    plan.highlighted ? "text-primary-foreground/70" : "text-secondary-foreground/50"
                  }`}>
                    / vida/mês
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 font-sans text-sm">
                      <f.Icon
                        size={18}
                        weight="duotone"
                        className={`flex-shrink-0 ${plan.highlighted ? "text-white" : "text-primary"}`}
                      />
                      <span className={plan.highlighted ? "text-primary-foreground/90" : "text-secondary-foreground/75"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Avulso */}
                <div className={`text-xs font-sans px-3 py-2 rounded-lg mb-6 ${
                  plan.highlighted
                    ? "bg-primary-foreground/10 text-primary-foreground/65"
                    : "bg-secondary-foreground/5 text-secondary-foreground/45"
                }`}>
                  {plan.avulso}
                </div>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full font-sans font-bold text-sm transition-colors ${
                    plan.highlighted
                      ? "bg-secondary text-secondary-foreground hover:bg-navy-dark shadow-xl"
                      : "bg-primary text-primary-foreground hover:bg-orange-dark shadow-orange"
                  }`}
                >
                  <WhatsappLogo size={16} weight="fill" />
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Pillars bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {pillars.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 justify-center"
              >
                <p.Icon size={20} weight="duotone" className="text-primary flex-shrink-0" />
                <span className="font-sans text-sm font-semibold text-secondary-foreground/80 uppercase tracking-wide">
                  {p.label}
                </span>
              </div>
            ))}
          </motion.div>

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
                Disponível para qualquer plano, para colaboradores que precisam de cuidado contínuo.
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

      {/* ── Como Funciona ── */}
      <section className="py-24 bg-warm-gray">
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
              Ativar é <span className="text-gradient">rápido e simples</span>
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
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="font-sans text-muted-foreground text-base leading-relaxed">{step.description}</p>
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
              Cuide de quem faz sua empresa crescer
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Fale com nosso time e descubra como a WOW+ pode transformar a saúde e
              a produtividade da sua equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
              >
                <WhatsappLogo size={22} weight="fill" />
                Falar com um Consultor
              </a>
              <a
                href="/nr1"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-secondary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-white/5 transition-colors"
              >
                <Heartbeat size={22} weight="duotone" />
                Saiba mais sobre NR-1
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ParaEmpresas;
