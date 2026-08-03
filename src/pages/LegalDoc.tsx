import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";
import NotFound from "@/pages/NotFound";
import { getLegalDoc, LEGAL_LAST_UPDATED } from "@/data/legal";

interface LegalDocProps {
  slug: string;
}

const LegalDoc = ({ slug }: LegalDocProps) => {
  const doc = getLegalDoc(slug);

  useEffect(() => {
    if (!doc) return;
    const prev = document.title;
    document.title = `${doc.title} — WMedic`;
    return () => {
      document.title = prev;
    };
  }, [doc]);

  if (!doc) return <NotFound />;

  const { Icon } = doc;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10">
          <Link
            to="/legal"
            className="inline-flex items-center gap-2 font-sans text-sm text-secondary-foreground/70 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} weight="bold" /> Legal & Segurança
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
              <Icon size={32} weight="duotone" className="text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-secondary-foreground leading-tight">
              {doc.title}
            </h1>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-4 max-w-2xl">
              {doc.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {doc.content.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-px bg-primary/30 mx-2 mt-1.5" />
                  <div>
                    <h2 className="font-display text-lg font-bold text-foreground mb-2">
                      {item.heading}
                    </h2>
                    <p className="font-sans text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-sans text-sm text-muted-foreground">
                Última atualização: {LEGAL_LAST_UPDATED}
              </p>
              <a
                href="/contato"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:text-orange-dark transition-colors"
              >
                Dúvidas? Fale conosco →
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LegalDoc;
