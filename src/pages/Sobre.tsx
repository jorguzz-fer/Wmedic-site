import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const valores = [
  { titulo: "Excelência", texto: "Em cada detalhe da operação assistencial." },
  { titulo: "Segurança", texto: "Em cada processo, alinhada às melhores práticas." },
  { titulo: "Humanização", texto: "Em cada atendimento e jornada de cuidado." },
  { titulo: "Resultados", texto: "Que geram valor para pacientes, clientes e rede." },
];

const Sobre = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="bg-gradient-hero text-secondary-foreground py-28">
      <div className="container max-w-3xl">
        <span className="text-lime font-sans text-sm font-semibold uppercase tracking-widest">Sobre a WMedic</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">Gestão que cuida. Cuidado que transforma.</h1>
        <p className="text-secondary-foreground/70 font-sans text-lg mt-6 leading-relaxed">
          A WMedic é responsável pela gestão da operação assistencial do grupo WFSP, garantindo excelência, qualidade e acesso à saúde de forma humanizada, segura e eficiente.
        </p>
      </div>
    </section>
    <AboutSection />
    <section className="py-24 bg-warm-gray">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Nossos valores</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((v) => (
            <div key={v.titulo} className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-3">{v.titulo}</h3>
              <p className="text-muted-foreground font-sans">{v.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FeaturesSection />
    <CTASection />
    <Footer />
  </div>
);

export default Sobre;
