import { Handshake, BadgeCheck, Users } from "lucide-react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";

const partnersImg = "/partners/partners_full.png";

const beneficios = [
  {
    icon: BadgeCheck,
    titulo: "Rede qualificada",
    texto: "Curadoria e acompanhamento contínuo de prestadores e serviços.",
  },
  {
    icon: Users,
    titulo: "Parcerias estratégicas",
    texto: "Conexões que ampliam o acesso e a qualidade do cuidado.",
  },
  {
    icon: Handshake,
    titulo: "Relação de confiança",
    texto: "Transparência, governança e resultados para todos os envolvidos.",
  },
];

const Parceiros = () => (
  <InstitutionalLayout
    eyebrow="Institucional"
    title="Parceiros e rede"
    docTitle="Parceiros e rede — WMedic"
    intro="Construímos uma rede credenciada qualificada e parcerias estratégicas para entregar o melhor cuidado em todo o Brasil."
  >
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {beneficios.map((b) => (
            <div key={b.titulo} className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{b.titulo}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-warm-gray">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Parceiros que confiam na WMedic
        </h2>
        <div className="max-w-5xl mx-auto">
          <img
            src={partnersImg}
            alt="Parceiros WMedic"
            className="w-full h-auto object-contain rounded-2xl"
            loading="lazy"
          />
        </div>
        <div className="text-center mt-12">
          <a
            href="/contato"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-sans text-sm font-semibold hover:bg-orange-dark transition-colors shadow-orange"
          >
            Seja parceiro WMedic
          </a>
        </div>
      </div>
    </section>
  </InstitutionalLayout>
);

export default Parceiros;
