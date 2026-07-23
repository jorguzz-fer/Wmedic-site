import { motion } from "framer-motion";
import {
  Stethoscope,
  CheckCircle,
  ArrowUpRight,
  Heart,
} from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";

const services = [
  {
    id: "med",
    Icon: Stethoscope,
    title: "WOW+ Med",
    subtitle: "Saúde digital ao seu alcance",
    description:
      "Atendimento médico rápido, digital e presencial. Com a WOW+ Med você tem acesso à médicos 24h por dia, 7 dias por semana, direto do seu celular.",
    features: [
      "Clínico geral e pediatria disponíveis 24h",
      "Mais de 20 especialidades médicas online",
      "Psicologia online — 1 consulta por mês inclusa",
      "Nutrição online — 1 consulta por mês inclusa",
      "Consultas presenciais com desconto em clínicas parceiras",
      "Receitas e atestados médicos digitais",
      "Rede nacional de +320 clínicas e laboratórios",
      "Agendamento rápido pelo app",
    ],
    highlight:
      "80% dos casos são resolvidos online, sem filas, sem burocracia. Consulté um médico em minutos, de onde você estiver.",
    image: "/images/5.webp",
  },
];

const Serviços = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
              Nossos Serviços
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground mt-4 leading-tight">
              O seu Super App de{" "}
              <span className="text-gradient">Saúde e Benefícios</span>
            </h1>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-2xl mx-auto">
              A WOW+ conecta você a serviços essenciais com qualidade superior e
              preço acessível. Conheça cada um dos nossos serviços em detalhe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-warm-gray" : "bg-background"}`}
        >
          <div className="container">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:[direction:rtl] lg:[&>*]:![direction:ltr]" : ""
              }`}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center">
                    <service.Icon size={28} weight="duotone" className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="font-sans text-sm text-primary font-semibold uppercase tracking-wider">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 font-sans text-base text-foreground/80"
                    >
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="p-5 bg-primary/5 border-l-4 border-primary rounded-r-xl mb-8">
                  <p className="font-sans text-base font-medium text-foreground/90">
                    {service.highlight}
                  </p>
                </div>

                <a
                  href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-bold text-base hover:bg-orange-dark transition-colors shadow-orange"
                >
                  Assinar Plano
                  <ArrowUpRight size={20} />
                </a>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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
              Todos os serviços em um só lugar
            </h2>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
              Assine a WOW+ e tenha acesso à saúde, entretenimento e economia
              para toda a família.
            </p>
            <a
              href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
              className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
            >
              Começar Agora
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Serviços;
