import { Cpu, BarChart3, Video, Lock, Workflow, Sparkles } from "lucide-react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";

const frentes = [
  {
    icon: Cpu,
    titulo: "Tecnologia integrada",
    texto: "Sistemas conectados que dão visibilidade e agilidade à operação assistencial.",
  },
  {
    icon: BarChart3,
    titulo: "Dados e indicadores",
    texto: "Governança orientada por dados para decisões mais rápidas e seguras.",
  },
  {
    icon: Video,
    titulo: "Telemedicina",
    texto: "Acesso ampliado ao cuidado, com atendimento remoto qualificado.",
  },
  {
    icon: Workflow,
    titulo: "Processos padronizados",
    texto: "Protocolos claros que reduzem variabilidade e elevam a qualidade.",
  },
  {
    icon: Lock,
    titulo: "Segurança da informação",
    texto: "Proteção de dados sensíveis em conformidade com a LGPD.",
  },
  {
    icon: Sparkles,
    titulo: "Melhoria contínua",
    texto: "Ciclos de evolução constante da experiência e dos resultados em saúde.",
  },
];

const InovacaoEmSaude = () => (
  <InstitutionalLayout
    eyebrow="A WMedic"
    title="Inovação em saúde"
    docTitle="Inovação em saúde — WMedic"
    intro="Unimos tecnologia, dados e governança clínica para tornar o cuidado mais seguro, ágil e acessível dentro do grupo Wow+."
  >
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frentes.map((f) => (
            <div key={f.titulo} className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.titulo}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{f.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </InstitutionalLayout>
);

export default InovacaoEmSaude;
