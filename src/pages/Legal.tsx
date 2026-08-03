import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "@phosphor-icons/react";
import PageLayout from "@/components/layout/PageLayout";
import { legalDocs, LEGAL_LAST_UPDATED } from "@/data/legal";

const sections = legalDocs;

const Legal = () => {
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const activeSection = sections.find((s) => s.id === activeTab)!;

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-orange opacity-10 rounded-l-full blur-3xl transform translate-x-1/2" />
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} weight="duotone" className="text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight">
              Legal &{" "}
              <span className="text-gradient">Segurança</span>
            </h1>
            <p className="text-secondary-foreground/70 font-sans text-lg mt-6 max-w-2xl mx-auto">
              Transparência e segurança são pilares fundamentais da WMedic.
              Consulte nossos documentos legais e saiba como protegemos seus dados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Cards de Navegação ── */}
      <section className="py-12 bg-warm-gray border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {sections.map((section) => {
              const active = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-2xl border text-center transition-all duration-200 ${
                    active
                      ? "bg-primary border-primary text-primary-foreground shadow-orange"
                      : "bg-card border-border text-foreground hover:border-primary/40 hover:shadow-card"
                  }`}
                >
                  <section.Icon
                    size={28}
                    weight={active ? "fill" : "duotone"}
                    className={active ? "text-white" : "text-primary"}
                  />
                  <span className="font-sans text-xs font-semibold leading-tight">
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Conteúdo ── */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {/* Section header */}
                <div className="flex items-start gap-5 mb-10 pb-8 border-b border-border">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <activeSection.Icon size={28} weight="duotone" className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {activeSection.title}
                    </h2>
                    <p className="font-sans text-muted-foreground text-base mt-1">
                      {activeSection.summary}
                    </p>
                  </div>
                </div>

                {/* Content blocks */}
                <div className="space-y-8">
                  {activeSection.content.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-5"
                    >
                      <div className="flex-shrink-0 w-px bg-primary/30 mx-2 mt-1.5" />
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">
                          {item.heading}
                        </h3>
                        <p className="font-sans text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer info */}
            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-sans text-sm text-muted-foreground">
                Última atualização: {LEGAL_LAST_UPDATED}
              </p>
              {/* TODO cliente */}
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

export default Legal;
