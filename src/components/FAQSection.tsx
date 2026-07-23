import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a telemedicina do WOW+Saúde?",
    answer:
      "Nosso serviço de telemedicina está disponível 24 horas por dia, 7 dias por semana. Você pode acessar consultas médicas online diretamente pelo app, com profissionais qualificados prontos para atender você e sua família.",
  },
  {
    question: "Posso incluir minha família nos planos?",
    answer:
      "Sim! Todos os nossos planos permitem a inclusão de dependentes. Você pode adicionar cônjuge, filhos e outros famíliares para que todos tenham acesso àos benefícios.",
  },
  {
    question: "Como faço para contratar um plano?",
    answer:
      "A contratação é 100% digital. Basta acessar nosso app ou site, escolher o plano ideal e fazer seu cadastro. Em poucos minutos você já estará protegido.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-widest">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="font-sans text-base font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
