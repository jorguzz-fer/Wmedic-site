import Header from "@/components/Header";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const FrentesDeAtuacao = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="bg-gradient-hero text-secondary-foreground py-28">
      <div className="container max-w-3xl">
        <span className="text-lime font-sans text-sm font-semibold uppercase tracking-widest">Nossas frentes de atuação</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">Cobertura clínica completa</h1>
        <p className="text-secondary-foreground/70 font-sans text-lg mt-6 leading-relaxed">
          Do atendimento clínico 24h às especialidades, psicologia, nutrição, pediatria, programas de saúde e gestão de escalas.
        </p>
      </div>
    </section>
    <EspecialidadesSection />
    <CTASection />
    <Footer />
  </div>
);

export default FrentesDeAtuacao;
