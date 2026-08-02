import { Target, Eye, Compass } from "lucide-react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";

const blocos = [
  {
    icon: Target,
    titulo: "Missão",
    texto:
      "Gerir a operação assistencial do grupo Wow+ com excelência, garantindo acesso à saúde de forma humanizada, segura e eficiente.",
  },
  {
    icon: Eye,
    titulo: "Visão",
    texto:
      "Ser referência em gestão médica no Brasil, reconhecida pela qualidade do cuidado, pela governança clínica e pelos resultados que gera.",
  },
  {
    icon: Compass,
    titulo: "Propósito",
    texto:
      "Cuidar de pessoas e transformar vidas — colocando o paciente no centro de cada decisão e de cada processo.",
  },
];

const NossaMissao = () => (
  <InstitutionalLayout
    eyebrow="A WMedic"
    title="Nossa missão"
    docTitle="Nossa missão — WMedic"
    intro="Existimos para cuidar de pessoas e transformar a gestão em saúde em cuidado real, seguro e humano dentro do grupo Wow+."
  >
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {blocos.map((b) => (
            <div
              key={b.titulo}
              className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{b.titulo}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-warm-gray">
      <div className="container max-w-3xl text-center">
        <p className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug">
          “Gestão que cuida. Cuidado que transforma.”
        </p>
        <p className="text-muted-foreground font-sans mt-4">
          É o compromisso que orienta cada decisão da WMedic.
        </p>
      </div>
    </section>
  </InstitutionalLayout>
);

export default NossaMissao;
