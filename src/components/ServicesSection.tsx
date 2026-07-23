import { motion } from "framer-motion";
import { Stethoscope, ShieldCheck, HeartPulse, Users, LineChart, Headphones } from "lucide-react";

const services = [
  { icon: Users, title: "Corpo Clínico", description: "Gestão e coordenação de médicos e especialistas.", features: ["Seleção e avaliação contínua", "Coordenação de equipes", "Escalas e cobertura"], link: "/o-que-fazemos" },
  { icon: ShieldCheck, title: "Credenciamento e Rede", description: "Seleção criteriosa de profissionais e prestadores em todo o Brasil.", features: ["Rede qualificada", "Cobertura nacional", "Gestão de prestadores"], link: "/o-que-fazemos" },
  { icon: HeartPulse, title: "Qualidade Assistencial", description: "Protocolos clínicos, segurança do paciente e melhoria contínua dos processos.", features: ["Protocolos clínicos", "Segurança do paciente", "Melhoria contínua"], link: "/o-que-fazemos" },
  { icon: Stethoscope, title: "Experiência do Paciente", description: "Atendimento humanizado, eficiente e resolutivo em todas as jornadas de cuidado.", features: ["Atendimento humanizado", "Jornada de cuidado", "Resolutividade"], link: "/o-que-fazemos" },
  { icon: LineChart, title: "Gestão e Inteligência", description: "Dados, indicadores e governança para uma operação de alta performance.", features: ["Indicadores e dados", "Governança assistencial", "Alta performance"], link: "/o-que-fazemos" },
  { icon: Headphones, title: "Suporte Clínico", description: "Apoio contínuo aos pacientes e à equipe médica.", features: ["Apoio à equipe médica", "Suporte ao paciente", "Disponibilidade contínua"], link: "/o-que-fazemos" },
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
            O que fazemos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Gestão médica <span className="text-gradient">de ponta a ponta</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg mt-4 max-w-2xl mx-auto">
            A WMedic cuida de toda a operação assistencial com excelência, segurança e humanização.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.link}
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
                Saiba mais →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
