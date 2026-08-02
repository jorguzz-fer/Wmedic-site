import { Stethoscope, Network, ShieldCheck, HeartHandshake } from "lucide-react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";
import FeaturesSection from "@/components/FeaturesSection";

const pilares = [
  {
    icon: Stethoscope,
    titulo: "Gestão assistencial",
    texto: "Coordenamos corpo clínico, protocolos e jornada do paciente com governança e método.",
  },
  {
    icon: Network,
    titulo: "Rede credenciada",
    texto: "Rede qualificada em todo o Brasil, com curadoria e acompanhamento contínuo.",
  },
  {
    icon: ShieldCheck,
    titulo: "Segurança e qualidade",
    texto: "Processos padronizados alinhados às melhores práticas de segurança do cuidado.",
  },
  {
    icon: HeartHandshake,
    titulo: "Cuidado humanizado",
    texto: "Experiência acolhedora do primeiro contato à alta, centrada na pessoa.",
  },
];

const QuemSomos = () => (
  <InstitutionalLayout
    eyebrow="A WMedic"
    title="Quem somos"
    docTitle="Quem somos — WMedic"
    intro="A WMedic é responsável pela gestão da operação assistencial do grupo Wow+, garantindo excelência, qualidade e acesso à saúde de forma humanizada, segura e eficiente."
  >
    <section className="py-24">
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Gestão médica que cuida de ponta a ponta
        </h2>
        <p className="text-muted-foreground font-sans text-lg leading-relaxed">
          Somos a área que estrutura e opera o cuidado dentro do grupo Wow+: do corpo clínico à
          rede credenciada, da qualidade assistencial à experiência de cada paciente. Unimos
          governança clínica, tecnologia e pessoas para transformar a gestão em saúde em resultado
          real — para pacientes, clientes e para toda a rede.
        </p>
      </div>
    </section>

    <section className="py-24 bg-warm-gray">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((p) => (
            <div key={p.titulo} className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.titulo}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FeaturesSection />
  </InstitutionalLayout>
);

export default QuemSomos;
