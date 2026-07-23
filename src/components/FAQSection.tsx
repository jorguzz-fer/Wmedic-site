import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é a WMedic?",
    answer:
      "A WMedic é a gestora da operação assistencial do grupo WFSP, responsável por corpo clínico, rede credenciada, qualidade assistencial e experiência do paciente.",
  },
  {
    question: "Quais frentes de atuação a WMedic cobre?",
    answer:
      "Médicos clínicos 24h, especialidades médicas, psicologia, nutrição, pediatria, programas de saúde, gestão de escalas e suporte e qualidade.",
  },
  {
    question: "Como a WMedic garante qualidade?",
    answer:
      "Com protocolos clínicos, segurança do paciente, processos padronizados e melhoria contínua alinhada às melhores práticas.",
  },
  {
    question: "A WMedic atende em todo o Brasil?",
    answer:
      "Sim — a rede credenciada é qualificada e distribuída em todo o território nacional.",
  },
  {
    question: "Como falar com a WMedic?",
    answer:
      "Pela página de Contato ou pelos canais informados no rodapé.",
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
