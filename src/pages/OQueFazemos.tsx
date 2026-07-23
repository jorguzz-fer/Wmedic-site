import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const OQueFazemos = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="bg-gradient-hero text-secondary-foreground py-28">
      <div className="container max-w-3xl">
        <span className="text-lime font-sans text-sm font-semibold uppercase tracking-widest">O que fazemos</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">Gestão médica de ponta a ponta</h1>
        <p className="text-secondary-foreground/70 font-sans text-lg mt-6 leading-relaxed">
          Coordenamos corpo clínico, rede credenciada, qualidade assistencial, experiência do paciente, inteligência de dados e suporte clínico.
        </p>
      </div>
    </section>
    <ServicesSection />
    <CTASection />
    <Footer />
  </div>
);

export default OQueFazemos;
