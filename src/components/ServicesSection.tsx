import { motion } from "framer-motion";
import { Heart, Activity, Pill } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "WOW+ Saúde",
    description: "Atendimento médico rápido, digital e presencial.",
    features: [
      "Clínico geral e pediatria 24h",
      "Especialistas online",
      "Consultas presenciais com desconto",
      "Rede de clínicas parceiras"
    ],
    link: "https://app.wowmais.com.br/consumer?ref=negócioswowbrasil",
  },
  {
    icon: Activity,
    title: "WOW+ Exames",
    description: "Economize em exames laboratoriais e diagnósticos.",
    features: [
      "Laboratórios parceiros",
      "Preços reduzidos",
      "Atendimento em diversas cidades"
    ],
    link: "https://app.wowmais.com.br/consumer?ref=negócioswowbrasil",
  },
  {
    icon: Pill,
    title: "WOW+ Farmácia",
    description: "Descontos em milhares de medicamentos.",
    features: [
      "Até 90% de economia",
      "Rede nacional de farmácias",
      "Compra simples e rápida"
    ],
    link: "https://app.wowmais.com.br/consumer?ref=negócioswowbrasil",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-warm-gray">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            O seu Super App de <span className="text-gradient">Saúde e Benefícios</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg mt-4 max-w-2xl mx-auto">
            A WOW+ conecta você a serviços essenciais com qualidade superior e preço acessível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="mt-auto space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
                    <span className="text-orange mt-0.5">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <span className="inline-block text-primary font-sans text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Assinar Plano →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
