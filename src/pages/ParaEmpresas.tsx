import { Briefcase, HeartPulse, LineChart, Users2, ShieldCheck, Headset } from "lucide-react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";

const solucoes = [
  {
    icon: HeartPulse,
    titulo: "Saúde e bem-estar",
    texto: "Programas de cuidado que impactam a qualidade de vida das equipes.",
  },
  {
    icon: Briefcase,
    titulo: "Benefício corporativo",
    texto: "Saúde como benefício estratégico para atrair e reter talentos.",
  },
  {
    icon: LineChart,
    titulo: "Gestão orientada por dados",
    texto: "Indicadores que mostram o resultado do cuidado na sua operação.",
  },
  {
    icon: Users2,
    titulo: "Cuidado personalizado",
    texto: "Soluções desenhadas para a realidade de cada empresa.",
  },
  {
    icon: ShieldCheck,
    titulo: "Segurança e conformidade",
    texto: "Processos alinhados às melhores práticas e à LGPD.",
  },
  {
    icon: Headset,
    titulo: "Suporte dedicado",
    texto: "Acompanhamento próximo em toda a jornada do cliente.",
  },
];

const ParaEmpresas = () => (
  <InstitutionalLayout
    eyebrow="Empresas & Parcerias"
    title="Soluções para empresas"
    docTitle="Soluções para empresas — WMedic"
    intro="Gestão médica e cuidado à saúde como benefício estratégico para a sua empresa e as suas equipes."
  >
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solucoes.map((s) => (
            <div key={s.titulo} className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.titulo}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{s.texto}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/contato"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-sans text-sm font-semibold hover:bg-orange-dark transition-colors shadow-orange"
          >
            Solicitar proposta
          </a>
        </div>
      </div>
    </section>
  </InstitutionalLayout>
);

export default ParaEmpresas;
