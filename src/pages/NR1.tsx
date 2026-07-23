import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ShieldCheck,
  Brain,
  Buildings,
  Scales,
  Warning,
  CheckCircle,
  WhatsappLogo,
  FileText,
  Heartbeat,
  UsersThree,
  ChartLineUp,
  Clock,
  FirstAidKit,
  Gavel,
  CalendarBlank,
  ListChecks,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511978369030";

const timelineItems = [
  {
    date: "Maio 2025",
    title: "Publicação da atualização",
    description: "MTE publica as novas diretrizes incluindo riscos psicossociais no PGR.",
    icon: FileText,
  },
  {
    date: "2025-2026",
    title: "Período de adequação",
    description: "Empresas devem se preparar, documentar processos e implementar medidas preventivas.",
    icon: CalendarBlank,
  },
  {
    date: "Maio 2026",
    title: "Fiscalização intensificada",
    description: "MTE começa fiscalização ativa. Empresas não adequadas estão sujeitas a multas e interdicoes.",
    icon: Gavel,
  },
];

const risks = [
  {
    icon: Brain,
    title: "Estrêsse Ocupacional",
    description: "Pressão excessiva, metas inalcancaveis e sobrecarga de trabalho que afetam a saúde mental.",
  },
  {
    icon: Warning,
    title: "Burnout",
    description: "Esgotamento fisico e emocional causado por excesso de trabalho continuo sem recuperação adequada.",
  },
  {
    icon: UsersThree,
    title: "Assedio Moral",
    description: "Exposicao a situações humilhantes e constrangedoras de forma repetida no ambiente de trabalho.",
  },
  {
    icon: Scales,
    title: "Desequilibrio Trabalho-Vida",
    description: "Falta de limites entre jornada e vida pessoal, agravada pelo trabalho remoto e hiperconectividade.",
  },
];

const consequences = [
  { value: "R$ 50mil+", label: "Multa por infração", icon: Gavel },
  { value: "2x", label: "Mais turnover", icon: UsersThree },
  { value: "-40%", label: "Produtividade", icon: ChartLineUp },
  { value: "3x", label: "Mais afastamentos", icon: Clock },
];

const solutionItems = [
  {
    title: "Telemedicina com psicologos 24h",
    description: "Atendimento psicológico online ilimitado para todos os colaboradores, 24 horas por dia.",
  },
  {
    title: "Programa de bem-estar corporativo",
    description: "Palestras, conteúdos e acompanhamento continuo sobre saúde mental e qualidade de vida.",
  },
  {
    title: "Relatorios gerenciais para RH",
    description: "Dados de utilização e indicadores para acompanhar a saúde emocional da equipe.",
  },
  {
    title: "Documentação de conformidade",
    description: "Evidencias e relatorios prontos para comprovar adequação a NR-1 em caso de fiscalização.",
  },
  {
    title: "Canal de apoio confidencial",
    description: "Linha de suporte anonima para colaboradores reportarem problemas sem medo de retaliação.",
  },
  {
    title: "Treinamento para lideranças",
    description: "Capacitação de gestores para identificar sinais de risco e agir preventivamente.",
  },
  {
    title: "Atendimento emergêncial para crises",
    description: "Suporte imediato em situações criticas com profissionais especializados.",
  },
  {
    title: "Descontos em medicamentos",
    description: "Até 70% de desconto em medicamentos em mais de 19 mil farmácias credenciadas.",
  },
];

const faqs = [
  {
    question: "O que é a NR-1 e por que ela mudou?",
    answer:
      "A NR-1 (Norma Regulamentadora 1) estabelece as disposicoes gerais sobre seguranca e saúde no trabalho. A atualização de 2025 incluiu a obrigatoriedade de gestão de riscos psicossociais — como estrêsse, assedio e burnout — no Programa de Gerenciamento de Riscos (PGR). Isso significa que a saúde mental dos colaboradores agora e responsabilidade legal do empregador.",
  },
  {
    question: "Quais empresas precisam se adequar?",
    answer:
      "Todas as empresas com empregados regidos pela CLT, independentemente do porte ou segmento de atuação. Microempresas, pequenas, medias e grandes empresas — todas devem incluir riscos psicossociais no PGR.",
  },
  {
    question: "Quando a fiscalização começa?",
    answer:
      "A atualização foi publicada em 2025, com período de adequação. A fiscalização intensificada pelo Ministerio do Trabalho e Emprego (MTE) começa em maio de 2026. Empresas devem se preparar agora para estar em conformidade.",
  },
  {
    question: "O que acontece se minha empresa não se adequar?",
    answer:
      "A empresa pode sofrer autuações com multas a partir de R$ 50 mil por infração, interdicoes de setores ou da empresa inteira, além de ficar exposta a ações trabalhistas. O dano reputacional também e significativo.",
  },
  {
    question: "O que são riscos psicossociais?",
    answer:
      "São fatores no ambiente de trabalho que podem afetar a saúde mental dos colaboradores: estrêsse excessivo, pressão por metas inalcancaveis, assedio moral ou sexual, jornadas exaustivas, falta de apoio da liderança e desequilibrio entre trabalho e vida pessoal.",
  },
  {
    question: "Como a WOW+ ajuda na adequação?",
    answer:
      "A WOW+ oferecé uma solução completa: telemedicina com suporte psicológico 24h, programas de bem-estar, relatorios para RH, documentação de conformidade, canal de apoio confidencial e treinamento para lideranças. Tudo integrado em uma única plataforma digital acessível.",
  },
  {
    question: "Quanto custa a solução da WOW+ para empresas?",
    answer:
      "Os planos empresariais da WOW+ são personalizados de acordo com o tamanho e necessidades da empresa. Entre em contato pelo WhatsApp para receber uma proposta sob medida.",
  },
];

const NR1 = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-flex items-center gap-2 bg-red-500/15 text-red-400 px-4 py-1.5 rounded-full font-sans text-sm font-semibold mb-6">
                <Warning size={16} weight="fill" />
                Fiscalização a partir de Maio/2026
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight">
                Sua empresa esta pronta para a{" "}
                <span className="text-gradient">nova NR-1?</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl leading-relaxed">
                A NR-1 agora exige que todas as empresas gerenciem riscos
                psicossociais no ambiente de trabalho. Quem não se adequar esta
                sujeito a multas, interdicoes e ações trabalhistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Falar com especialista
                </a>
                <Link
                  to="/para-empresas"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  Ver planos empresariais
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {consequences.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-navy-light border border-secondary-foreground/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
                  >
                    <stat.icon
                      size={28}
                      weight="duotone"
                      className="text-primary mx-auto mb-3"
                    />
                    <div className="font-display text-2xl font-bold text-red-400">
                      {stat.value}
                    </div>
                    <div className="font-sans text-xs text-secondary-foreground/50 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Cronograma
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Linha do tempo da{" "}
              <span className="text-gradient">NR-1</span>
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border inline-block max-w-sm">
                    <div className="font-sans text-xs text-primary font-bold uppercase tracking-wider mb-2">
                      {item.date}
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <item.icon size={24} weight="fill" className="text-primary-foreground" />
                </div>
                <div className="flex-1 md:hidden">
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                    <div className="font-sans text-xs text-primary font-bold uppercase tracking-wider mb-2">
                      {item.date}
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Riscos Psicossociais */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              O que mudou
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Riscos psicossociais que devem ser{" "}
              <span className="text-gradient">gerenciados</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mt-4 max-w-2xl mx-auto">
              A atualização da NR-1 obriga empresas a identificar, avaliar e
              controlar estes fatores no PGR.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {risks.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                  <item.icon
                    size={28}
                    weight="duotone"
                    className="text-red-500"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alerta de Consequencias */}
      <section className="py-16 bg-red-500/5 border-y border-red-500/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Warning size={48} weight="fill" className="text-red-500 mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Não se adequar pode custar caro
            </h3>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
              Empresas que não incluirem riscos psicossociais no PGR estão sujeitas a
              autuações a partir de R$ 50 mil por infração, interdicoes do MTE, ações
              trabalhistas e danos a reputação corporativa.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:hidden">
              {consequences.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-xl font-bold text-red-500">{stat.value}</div>
                  <div className="font-sans text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solução WOW+ */}
      <section className="py-24 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Solução completa
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
              Como a WOW+ ajuda sua empresa a se{" "}
              <span className="text-gradient">adequar</span>
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-4 max-w-2xl mx-auto">
              Uma plataforma única com tudo que sua empresa precisa para cumprir
              a NR-1 e cuidar da saúde mental da equipe.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {solutionItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 bg-navy-light border border-secondary-foreground/10 rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <CheckCircle
                  size={24}
                  weight="fill"
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-display text-base font-bold text-secondary-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-secondary-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
            >
              <WhatsappLogo size={20} weight="fill" />
              Solicitar proposta
            </a>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Heartbeat, value: "24h", label: "Suporte psicológico disponível" },
              { icon: Buildings, value: "100%", label: "Digital e escalável" },
              { icon: FileText, value: "PGR", label: "Documentação de conformidade" },
              { icon: ShieldCheck, value: "NR-1", label: "Adequação garantida" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-card border border-border hover:shadow-card-hover transition-all"
              >
                <stat.icon
                  size={36}
                  weight="duotone"
                  className="text-primary mx-auto mb-4"
                />
                <div className="font-display text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-warm-gray">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Perguntas sobre a{" "}
              <span className="text-gradient">NR-1</span>
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

      {/* CTA Final */}
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
            <ShieldCheck size={56} weight="duotone" className="text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Adeque sua empresa a NR-1 com a WOW+
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Proteja seus colaboradores, evite multas e garanta a conformidade
              da sua empresa. Fale com nosso time especializado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
              >
                <WhatsappLogo size={24} weight="fill" />
                Falar com especialista
              </a>
              <Link
                to="/para-empresas"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-secondary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Ver planos empresariais
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NR1;
