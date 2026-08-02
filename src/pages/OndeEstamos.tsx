import { MapPin, Globe2, Building2 } from "lucide-react";
import InstitutionalLayout from "@/components/layout/InstitutionalLayout";

const destaques = [
  {
    icon: Globe2,
    titulo: "Cobertura nacional",
    texto: "Rede credenciada qualificada presente em todo o Brasil.",
  },
  {
    icon: Building2,
    titulo: "Rede integrada",
    texto: "Unidades e parceiros conectados sob a mesma gestão assistencial.",
  },
  {
    icon: MapPin,
    titulo: "Perto de você",
    texto: "Acesso ao cuidado onde o paciente estiver, presencial ou remoto.",
  },
];

const OndeEstamos = () => (
  <InstitutionalLayout
    eyebrow="Institucional"
    title="Onde estamos"
    docTitle="Onde estamos — WMedic"
    intro="A WMedic coordena uma rede credenciada qualificada em todo o Brasil, aproximando o cuidado de quem precisa."
  >
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {destaques.map((d) => (
            <div key={d.titulo} className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <d.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{d.titulo}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{d.texto}</p>
            </div>
          ))}
        </div>

        {/* TODO cliente: endereços, unidades e mapa das operações */}
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-warm-gray p-8 text-center">
          <p className="text-muted-foreground font-sans">
            Para conhecer as unidades e a rede credenciada da sua região,{" "}
            <a href="/contato" className="text-primary font-semibold hover:text-orange-dark">
              fale com a WMedic
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </InstitutionalLayout>
);

export default OndeEstamos;
