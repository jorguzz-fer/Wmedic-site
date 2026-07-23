import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle,
  Buildings,
  UsersThree,
  HandHeart,
  WhatsappLogo,
  ShieldCheck,
  ChartLineUp,
  Heart,
  Star,
  Stethoscope,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5511978369030&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20plano%20WOW%2B%20para%20entidades.";

const planFeatures = [
  "Médico 24h online — clínico e pediatria",
  "Mais de 20 especialidades médicas",
  "Psicologia 1x ao mês inclusa",
  "Nutrição 1x ao mês inclusa",
  "Receitas e atestados médicos digitais",
  "Descontos em consultas presenciais",
  "Descontos em exames e medicamentos",
  "Plano famíliar incluído",
];

const entityTypes = [
  {
    icon: Buildings,
    title: "Associações",
    description: "Ofereça saúde de qualidade como benefício exclusivo aos seus associados.",
  },
  {
    icon: UsersThree,
    title: "Sindicatos",
    description: "Fortaleça a valorização dos trabalhadores com acesso à cuidados médicos.",
  },
  {
    icon: HandHeart,
    title: "Cooperativas",
    description: "Proteja seus cooperados e dependentes com um plano moderno e acessível.",
  },
  {
    icon: ShieldCheck,
    title: "Federações",
    description: "Amplie os benefícios federados com saúde digital de alto padrão.",
  },
];

const differentials = [
  { icon: ChartLineUp, text: "50% de desconto exclusivo para entidades" },
  { icon: ShieldCheck, text: "Gestão simplificada via painel administrativo" },
  { icon: UsersThree, text: "Plano para grupos a partir de 10 vidas" },
  { icon: Heart, text: "Sem carência e ativação imediata" },
  { icon: Star, text: "NPS 96,5% de satisfação dos usuários" },
  { icon: Stethoscope, text: "80% dos atendimentos resolvidos online" },
];

const faqs = [
  {
    question: "Qual o número mínimo de vidas para fechar parceria?",
    answer:
      "O plano para entidades é indicado para grupos a partir de 10 vidas. Quanto maior o volume de associados, melhor a condição negociada.",
  },
  {
    question: "Como funciona o desconto de 50%?",
    answer:
      "Entidades parceiras têm acesso ào plano WOW+ Saúde por R$24,95/mês por vida — exatamente metade do valor individual de R$49,90. O desconto é aplicado automaticamente na contratação coletiva.",
  },
  {
    question: "A entidade paga o plano ou o associado?",
    answer:
      "O modelo é flexível: a entidade pode subsidiar total ou parcialmente o plano, ou apenas disponibilizar o benefício para que o associado contraté no valor especial. Definimos juntos o modelo que faz mais sentido.",
  },
  {
    question: "Existe carência?",
    answer:
      "Não. O plano é ativado imediatamente após a contratação, sem períodos de carência. O associado já pode usar os serviços no mesmo dia.",
  },
  {
    question: "O plano famíliar está incluído?",
    answer:
      "Sim. Cada vida contratada permite incluir qualquer pessoa como dependente — qualquer membro, seja quem for, de qualquer idade. Dependentes adicionais podem ser adicionados por R$19,90/pessoa.",
  },
  {
    question: "Como é feita a gestão dos associados?",
    answer:
      "A entidade recebe acesso à um painel administrativo onde pode incluir, remover e acompanhar os beneficiários. O processo é 100% digital e simplificado.",
  },
  {
    question: "A WOW+ é um plano de saúde?",
    answer:
      "Não. A WOW+ é uma plataforma de serviços e benefícios em saúde que oferece telemedicina, descontos em consultas, exames e medicamentos por meio de parceiros e rede credenciada. Não substitui plano de saúde, mas complementa com acesso rápido e acessível.",
  },
];

const ParaEntidades = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <ShieldCheck size={14} weight="fill" />
                Para Entidades
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
                Saúde de qualidade{" "}
                <span className="text-gradient">para seus associados</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl leading-relaxed">
                Associações, sindicatos e cooperativas: ofereça o plano WOW+ com{" "}
                <strong className="text-primary">50% de desconto</strong> como
                benefício exclusivo para seus associados e dependentes.
              </p>

              {/* Price highlight */}
              <div className="mt-8 p-6 bg-white/5 border border-primary/30 rounded-2xl inline-block">
                <p className="font-sans text-sm text-secondary-foreground/60 mb-1">
                  Valor especial para entidades
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-lg text-secondary-foreground">R$</span>
                  <span className="font-display text-6xl font-bold text-primary">24,95</span>
                  <span className="font-sans text-base text-secondary-foreground/60">/mês por vida</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="line-through text-secondary-foreground/40 font-sans text-sm">R$49,90</span>
                  <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">50% OFF</span>
                </div>
                <p className="font-sans text-xs text-secondary-foreground/50 mt-2">Menos de R$1 por dia</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Falar com consultor
                </a>
                <a
                  href="#plano"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-secondary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-white/5 transition-colors"
                >
                  Ver o plano completo
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.div>

            {/* Entity types */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {entityTypes.map((entity, i) => (
                <motion.div
                  key={entity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/40 hover:bg-white/8 transition-all duration-300"
                >
                  <entity.icon
                    size={32}
                    weight="duotone"
                    className="text-primary mb-4"
                  />
                  <h3 className="font-display text-lg font-bold text-secondary-foreground mb-2">
                    {entity.title}
                  </h3>
                  <p className="font-sans text-sm text-secondary-foreground/60 leading-relaxed">
                    {entity.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-warm-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Por que WOW+?
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Vantagens para sua{" "}
              <span className="text-gradient">entidade</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} weight="duotone" className="text-primary" />
                </div>
                <p className="font-sans text-base font-medium text-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plano completo */}
      <section id="plano" className="py-24 bg-navy">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Plano para Entidades
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-3 mb-2">
                WOW+ Saúde Coletivo
              </h2>
              <p className="text-secondary-foreground/70 font-sans text-base mb-6">
                Tudo que o plano individual oferece, com o melhor preço do mercado.
              </p>

              <div className="mb-6">
                <span className="font-sans text-xl text-secondary-foreground relative top-[-1rem]">R$</span>
                <span className="font-display text-6xl font-bold tracking-tight text-primary">24,95</span>
                <span className="font-sans text-base font-medium ml-1 text-secondary-foreground/60">/mês por vida</span>
                <div className="mt-2 flex items-center gap-3">
                  <span className="line-through text-secondary-foreground/40 font-sans text-sm">R$49,90</span>
                  <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">50% OFF para entidades</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {planFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-sans text-base text-secondary-foreground/80"
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-white/5 rounded-xl border border-primary/20 text-sm font-sans flex items-start gap-3 mb-8">
                <Heart size={20} weight="fill" className="text-orange shrink-0 mt-0.5" />
                <p className="leading-relaxed text-secondary-foreground/80">
                  <strong className="block text-orange mb-1">Plano Famíliar Incluído!</strong>
                  Inclui qualquer pessoa como dependente — qualquer membro, de qualquer idade. Dependentes adicionais por apenas{" "}
                  <strong className="text-orange">R$19,90/pessoa</strong>.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
              >
                <WhatsappLogo size={20} weight="fill" />
                Quero esse plano para minha entidade
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/5.webp"
                  alt="Saúde para entidades"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </div>
              {/* Stats overlay */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { value: "50%", label: "Desconto exclusivo" },
                  { value: "50k+", label: "Atendimentos" },
                  { value: "NPS 96,5%", label: "Satisfação" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                  >
                    <div className="font-display text-xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="font-sans text-xs text-secondary-foreground/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como funciona a parceria */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Processo simples
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Como funciona a <span className="text-gradient">parceria</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Fale com nosso consultor",
                description:
                  "Entre em contato pelo WhatsApp. Vamos entender as necessidades da sua entidade e montar a melhor proposta.",
              },
              {
                step: "2",
                title: "Proposta e contrato personalizado",
                description:
                  "Enviamos uma proposta personalizada com condições exclusivas para o volume de vidas da sua entidade.",
              },
              {
                step: "3",
                title: "Cadastro dos associados",
                description:
                  "Você acessa o painel administrativo e cadastra os beneficiários. Processo 100% digital e simplificado.",
              },
              {
                step: "4",
                title: "Associados usando imediatamente",
                description:
                  "Sem carência. Após o cadastro, seus associados já podem consultar médicos, psicólogos, nutricionistas e usar todos os benefícios.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-bold shadow-orange">
                  {item.step}
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl p-5 shadow-card">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
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
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Heart size={32} weight="duotone" className="text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Leve saúde de verdade para seus associados
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              50% de desconto exclusivo para entidades. Ative agora e transforme
              o benefício dos seus associados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
              >
                <WhatsappLogo size={22} weight="fill" />
                Falar com consultor agora
              </a>
              <a
                href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-secondary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-white/5 transition-colors"
              >
                Acessar plataforma
                <ArrowUpRight size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ParaEntidades;
