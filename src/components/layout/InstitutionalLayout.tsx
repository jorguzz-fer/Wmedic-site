import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import CTASection from "@/components/CTASection";

interface InstitutionalLayoutProps {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  /** Título da aba do navegador. Se omitido, mantém o padrão. */
  docTitle?: string;
  children: React.ReactNode;
}

/**
 * Casca padrão das páginas institucionais (base Wow+ / WMedic):
 * hero em gradiente, conteúdo e chamada final para contato.
 */
const InstitutionalLayout = ({
  eyebrow,
  title,
  intro,
  docTitle,
  children,
}: InstitutionalLayoutProps) => {
  useEffect(() => {
    if (!docTitle) return;
    const prev = document.title;
    document.title = docTitle;
    return () => {
      document.title = prev;
    };
  }, [docTitle]);

  return (
    <PageLayout>
      <section className="bg-gradient-hero text-secondary-foreground py-28">
        <div className="container max-w-3xl">
          <span className="text-lime font-sans text-sm font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">
            {title}
          </h1>
          <p className="text-secondary-foreground/70 font-sans text-lg mt-6 leading-relaxed">
            {intro}
          </p>
        </div>
      </section>
      {children}
      <CTASection />
    </PageLayout>
  );
};

export default InstitutionalLayout;
