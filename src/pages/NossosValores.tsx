import { Award, ShieldCheck, HeartHandshake, TrendingUp } from "lucide-react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";

const valores = [
  {
    icon: Award,
    titulo: "Excelência",
    texto: "Em cada detalhe da operação assistencial, buscando sempre o melhor padrão de cuidado.",
  },
  {
    icon: ShieldCheck,
    titulo: "Segurança",
    texto: "Em cada processo, alinhada às melhores práticas de segurança do paciente.",
  },
  {
    icon: HeartHandshake,
    titulo: "Humanização",
    texto: "Em cada atendimento e em cada jornada de cuidado, com empatia e respeito.",
  },
  {
    icon: TrendingUp,
    titulo: "Resultados",
    texto: "Que geram valor real para pacientes, clientes e para toda a rede.",
  },
];

const NossosValores = () => (
  <InstitutionalLayout
    eyebrow="A WMedic"
    title="Nossos valores"
    docTitle="Nossos valores — WMedic"
    intro="Os princípios que guiam a forma como cuidamos, decidimos e nos relacionamos dentro do grupo Wow+."
  >
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {valores.map((v) => (
            <div
              key={v.titulo}
              className="bg-card rounded-2xl p-8 shadow-card border border-border flex gap-5"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{v.titulo}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{v.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </InstitutionalLayout>
);

export default NossosValores;
