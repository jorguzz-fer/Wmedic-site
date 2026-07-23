import { motion } from "framer-motion";
import { Heart } from "@phosphor-icons/react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Heart size={32} weight="duotone" className="text-primary" />
            </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
            Comece a cuidar do que mais importa hoje mesmo
          </h2>
          <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-xl mx-auto">
            Cadastre-se e tenha acesso imediato a todos os benefícios WOW Mais.
          </p>
          <a
            href="https://app.wowmais.com.br/consumer?ref=negócioswowbrasil"
            className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-orange-dark transition-colors shadow-orange"
          >
            Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
