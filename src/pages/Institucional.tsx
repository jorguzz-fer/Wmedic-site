import { motion } from "framer-motion";
import {
  Heart,
  Eye,
  Star,
  Globe,
  CheckCircle,
  ArrowUpRight,
  Lightbulb,
  Stethoscope,
  Brain,
  ForkKnife,
  UsersThree,
  Buildings,
  Heartbeat,
  Leaf,
  Pill,
  TrendUp,
  MapPin,
  Phone,
  WhatsappLogo,
  UserCircle,
  Laptop,
  Shield,
} from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";

const values = [
  {
    Icon: Heart,
    title: "Missão",
    description:
      "Democratizar o acesso à cuidados médicos, assistência e vantagens exclusivas, proporcionando saúde de qualidade e economia para todas as famílias brasileiras.",
  },
  {
    Icon: Eye,
    title: "Visão",
    description:
      "Ser a maior plataforma de saúde digital do Brasil, reconhecida pela acessibilidade, inovação tecnológica e impacto positivo na vida de milhões de pessoas.",
  },
  {
    Icon: Star,
    title: "Valores",
    description:
      "Acessibilidade, transparência, inovação, cuidado com as pessoas e compromisso com a qualidade em cada serviço que oferecemos.",
  },
];

const ecosystem = [
  { Icon: Stethoscope, label: "Médicos 24h" },
  { Icon: Brain, label: "Psicologia" },
  { Icon: ForkKnife, label: "Nutrição" },
  { Icon: Pill, label: "Medicamentos" },
  { Icon: UsersThree, label: "Família" },
  { Icon: Buildings, label: "Empresas (NR1)" },
  { Icon: Heartbeat, label: "Bem-Estar" },
  { Icon: Leaf, label: "Saúde Preventiva" },
];

const stats = [
  { value: "50k+", label: "Atendimentos Realizados" },
  { value: "NPS 96,5%", label: "Satisfação dos Clientes" },
  { value: "20+", label: "Estados Atendidos" },
  { value: "+320", label: "Clínicas Parceiras" },
];

const techFeatures = [
  "Plataforma 100% digital e mobile-first",
  "Telemedicina com tecnologia de ponta",
  "App intuitivo para toda a família",
  "Segurança de dados e conformidade LGPD",
  "Integração com rede nacional de parceiros",
  "Atendimento automatizado + humano 24h",
];

const team = [
  {
    name: "Samuel Messias",
    role: "CEO",
    Icon: UserCircle,
  },
  {
    name: "Fernando Jorge",
    role: "CMO",
    Icon: UserCircle,
  },
  {
    name: "Pedro Paulino",
    role: "CTO",
    Icon: Laptop,
  },
];

const marketData = [
  { year: "2021", value: "R$175bi", label: "Mercado de saúde digital" },
  { year: "2024", value: "R$295bi", label: "Crescimento acelerado" },
  { year: "2029E", value: "R$875bi", label: "+400% em 5 anos" },
];

const Institucional = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-full font-sans text-sm font-semibold mb-6">
                <Shield size={16} weight="fill" />
                WOW+ Health Tech
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-2 leading-tight">
                Conheça a{" "}
                <span className="text-gradient">WOW+</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl">
                Não estamos acompanhando a mudança.{" "}
                <strong className="text-secondary-foreground">Estamos construindo ela.</strong>{" "}
                Uma plataforma criada para democratizar o acesso à saúde para todas as famílias brasileiras.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/12.jpg"
                  alt="Equipe WOW Mais"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                Quem Somos
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
                Saúde acessível{" "}
                <span className="text-gradient">de verdade.</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
                A WOW+ não nasce como um plano. Nasce como um <strong className="text-foreground">ecossistema</strong> — uma plataforma de serviços e benefícios em saúde que democratiza o acesso à cuidados médicos para toda a família.
              </p>
              <p className="text-muted-foreground font-sans text-lg mt-4 leading-relaxed">
                +213 milhões de brasileiros não conseguem atendimento quando precisam. 163 milhões dependem exclusivamente do SUS. +50 milhões têm plano, mas enfrentam filas, carências e limitações.
              </p>
              <p className="text-muted-foreground font-sans text-lg mt-4 leading-relaxed">
                A WOW+ resolve isso: saúde acessível, preventiva e conectada — a partir de R$29,90/mês.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/5.webp"
                  alt="Sobre a WOW+"
                  className="w-full aspect-[4/5] md:aspect-[3/4] object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecossistema */}
      <section className="py-24 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Ecossistema WOW+
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
              Saúde completa em{" "}
              <span className="text-gradient">um só lugar</span>
            </h2>
            <p className="text-secondary-foreground/60 font-sans text-lg mt-4 max-w-2xl mx-auto">
              Um ecossistema integrado que cuida de você em todas as dimensões da saúde.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {ecosystem.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-navy-light border border-secondary-foreground/10 rounded-2xl p-6 text-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
              >
                <item.Icon
                  size={36}
                  weight="duotone"
                  className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform"
                />
                <span className="font-sans text-sm font-semibold text-secondary-foreground/80">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="font-sans text-secondary-foreground/50 text-sm italic">
              Saúde acessível, preventiva e conectada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Nosso Propósito
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              Missão, Visão e{" "}
              <span className="text-gradient">Valores</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 mx-auto">
                  <item.Icon size={32} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
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

      {/* Mercado */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendUp size={28} weight="duotone" className="text-primary" />
                <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                  Mercado
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                O maior mercado em{" "}
                <span className="text-gradient">expansão do Brasil</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
                A saúde digital é um oceano azul. O mercado cresce mais de 400% em 5 anos — e a WOW+ está posicionada no centro dessa transformação.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {marketData.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-2xl p-5 text-center border ${
                      i === marketData.length - 1
                        ? "bg-primary/10 border-primary/30"
                        : "bg-warm-gray border-border"
                    }`}
                  >
                    <div className="font-sans text-xs text-muted-foreground mb-1">{item.year}</div>
                    <div className={`font-display text-xl font-bold ${i === marketData.length - 1 ? "text-primary" : "text-foreground"}`}>
                      {item.value}
                    </div>
                    <div className="font-sans text-xs text-muted-foreground mt-1">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { value: "+213 milhões", desc: "de brasileiros sem atendimento adequado" },
                { value: "163 milhões", desc: "dependem exclusivamente do SUS" },
                { value: "+50 milhões", desc: "têm plano, mas enfrentam limitações" },
                { value: "R$29,90/mês", desc: "acesso digital de qualidade com a WOW+" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 bg-warm-gray border border-border rounded-xl p-5"
                >
                  <div className="w-2 h-12 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <div className="font-display text-xl font-bold text-primary">{item.value}</div>
                    <div className="font-sans text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tecnologia & Inovação */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/14.jpg"
                  alt="Tecnologia WOW+"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb size={28} weight="duotone" className="text-primary" />
                <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                  Tecnologia & Inovação
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Tecnologia a serviço da sua{" "}
                <span className="text-gradient">saúde</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
                Nossa plataforma foi construída com as mais modernas tecnologias para oferecer uma experiência simples, segura e eficiente. Do agendamento à consulta, tudo acontece na palma da sua mão.
              </p>

              <ul className="space-y-3 mt-8">
                {techFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 font-sans text-base text-foreground/80"
                  >
                    <CheckCircle size={20} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-24 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Nossos Números
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground mt-3">
              Impacto que{" "}
              <span className="text-gradient">cresce</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-light border border-secondary-foreground/10 rounded-2xl p-8 text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-secondary-foreground/60 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Liderança
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
              O time por trás da{" "}
              <span className="text-gradient">WOW+</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <member.Icon size={40} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="font-sans text-sm font-semibold text-primary mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onde Estamos */}
      <section className="py-24 bg-warm-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe size={28} weight="duotone" className="text-primary" />
                <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
                  Infraestrutura
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Presença{" "}
                <span className="text-gradient">nacional</span>
              </h2>
              <p className="text-muted-foreground font-sans text-lg mt-6 leading-relaxed">
                Com sede em Osasco, SP, a WOW+ está presente em mais de 20 estados do Brasil através da nossa rede de parceiros, clínicas e laboratórios credenciados.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  { Icon: MapPin, text: "Sede própria — Osasco, SP (Urban Offices)" },
                  { Icon: Buildings, text: "+320 clínicas e laboratórios parceiros" },
                  { Icon: Pill, text: "4.000 farmácias parceiras em todo o Brasil" },
                  { Icon: Phone, text: "Central de atendimento via WhatsApp (seg–sáb)" },
                  { Icon: Shield, text: "Segurança e conformidade LGPD" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 font-sans text-foreground/80">
                    <item.Icon size={20} weight="duotone" className="text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                <p className="font-sans text-base font-medium text-foreground/90">
                  Mais acesso. Mais conveniência. Mais cuidado para sua família.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/9.jpg"
                  alt="Presença nacional WOW+"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Faça parte dessa transformação
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Junte-se a milhares de famílias que já cuidam da saúde com a WOW+.
            </p>
            <a
              href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
            >
              Começar Agora
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Institucional;
