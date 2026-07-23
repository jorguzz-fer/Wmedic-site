import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import NetworkSection from "@/components/NetworkSection";
import ComparativoSection from "@/components/ComparativoSection";
import FAQSection from "@/components/FAQSection";
import MarqueeSection from "@/components/MarqueeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <EspecialidadesSection />
      <NetworkSection />
      <ComparativoSection />
      <FAQSection />
      <MarqueeSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
