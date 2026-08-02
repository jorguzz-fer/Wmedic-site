import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  UserCircle,
  Hospital,
  Stethoscope,
  TrendUp,
  Warning,
  Heart,
} from "@phosphor-icons/react";

const bgImages = ["/images/hero-1.jpg"];

type SlidePoint = {
  Icon: React.ElementType;
  prefix: string;
  bold: string;
  suffix: string;
};

type ProblemSlide = {
  badge?: string;
  sub?: string;
  headline?: string;
  headlineOrange?: string;
  headlineLarge?: string;
  headlineLargeWhite?: string;
  points: SlidePoint[];
  alert: string;
  AlertIcon?: React.ElementType;
  alertSub?: string;
  cta: { label: string; href: string };
};

const problemSlides: ProblemSlide[] = [
  {
    badge: "O que nos move",
    headline: "Excelência",
    headlineOrange: "em cada detalhe",
    points: [
      { Icon: Stethoscope, prefix: "Equipe médica ", bold: "qualificada", suffix: " e constantemente avaliada" },
      { Icon: Heart, prefix: "Cuidado ", bold: "humanizado", suffix: " em cada atendimento" },
      { Icon: TrendUp, prefix: "Foco em ", bold: "resultados", suffix: " que geram valor" },
    ],
    alert: "Cuidar de pessoas. Transformar vidas.",
    AlertIcon: Heart,
    cta: { label: "Conheça a WMedic →", href: "/sobre" },
  },
  {
    badge: "Segurança em cada processo",
    headlineLarge: "PROCESSOS",
    headlineLargeWhite: "PADRONIZADOS",
    points: [],
    alert: "Alinhados às melhores práticas.",
    AlertIcon: Warning,
    cta: { label: "O que fazemos →", href: "/o-que-fazemos" },
  },
  {
    headline: "Tecnologia",
    headlineOrange: "integrada",
    points: [
      { Icon: TrendUp, prefix: "Dados e ", bold: "indicadores", suffix: " para decisão" },
      { Icon: Hospital, prefix: "Governança ", bold: "assistencial", suffix: " de alta performance" },
      { Icon: Clock, prefix: "Gestão de ", bold: "escalas e atendimento", suffix: "" },
    ],
    alert: "Para uma saúde mais inteligente.",
    AlertIcon: TrendUp,
    cta: { label: "Frentes de atuação →", href: "/frentes-de-atuacao" },
  },
  {
    headline: "Humanização",
    headlineOrange: "em cada atendimento",
    points: [
      { Icon: UserCircle, prefix: "Experiência do ", bold: "paciente", suffix: " em toda a jornada" },
      { Icon: Stethoscope, prefix: "Suporte ", bold: "clínico", suffix: " contínuo" },
      { Icon: Heart, prefix: "Qualidade ", bold: "assistencial", suffix: " e melhoria contínua" },
    ],
    alert: "Gestão que cuida. Cuidado que transforma.",
    AlertIcon: Heart,
    cta: { label: "Fale conosco →", href: "/contato" },
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);
  const total = 1 + problemSlides.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
    setBgIdx((b) => (b + 1) % bgImages.length);
  }, [total]);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const isSolution = current === 0;
  const slide = !isSolution ? problemSlides[current - 1] : null;

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* ── Background ── */}
      <AnimatePresence mode="wait">
        {isSolution ? (
          <motion.div
            key={`img-${bgIdx}`}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-navy-dark/70 z-10" />
            <img src={bgImages[bgIdx]} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ) : (
          <motion.div
            key={`dark-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-[#080b13]"
          >
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/6 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "radial-gradient(circle, #7cc63f 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Slide Content ── */}
      <div className="relative z-20 container h-full flex items-center">
        <AnimatePresence mode="wait">
          {/* SOLUTION SLIDE */}
          {isSolution && (
            <motion.div
              key="solution"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-block font-sans text-xs font-medium uppercase tracking-[0.35em] text-orange mb-6 bg-orange/10 px-3 py-1 rounded-full">
                Gestão médica com excelência, segurança e humanização
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extralight text-secondary-foreground leading-[1.05] mb-6">
                Cuidado que transforma.{" "}
                <span className="font-bold">Gestão que gera resultados.</span>
              </h1>
              <p className="text-secondary-foreground/70 font-sans text-base md:text-lg max-w-xl mb-8 font-light leading-relaxed">
                A WMedic é responsável pela gestão da operação assistencial do grupo
                Wow+, garantindo excelência, qualidade e acesso à saúde de forma
                humanizada, segura e eficiente.
              </p>
              <ul className="mb-10 space-y-3 font-sans text-secondary-foreground/90 font-medium">
                {[
                  "Médicos clínicos 24h",
                  "Especialidades médicas, psicologia e nutrição",
                  "Rede credenciada qualificada em todo o Brasil",
                  "Gestão, inteligência e suporte clínico",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Heart size={16} weight="fill" className="text-orange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contato"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-semibold text-base hover:bg-orange-dark transition-colors shadow-orange"
              >
                Fale com a WMedic
              </a>
            </motion.div>
          )}

          {/* PROBLEM SLIDES */}
          {!isSolution && slide && (
            <motion.div
              key={`problem-${current}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl w-full"
            >
              {slide.badge && (
                <p className="font-sans text-base md:text-lg text-secondary-foreground/65 mb-6 leading-relaxed">
                  {slide.badge}
                </p>
              )}

              {slide.headlineLarge ? (
                <div className="mb-8">
                  <h1 className="font-display text-5xl md:text-7xl font-black text-primary leading-none mb-3">
                    {slide.headlineLarge}
                  </h1>
                  {slide.headlineLargeWhite && (
                    <h2 className="font-display text-4xl md:text-6xl font-black text-secondary-foreground leading-none">
                      {slide.headlineLargeWhite}
                    </h2>
                  )}
                </div>
              ) : (
                <h1 className="font-display text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight mb-8">
                  {slide.headline}{" "}
                  {slide.headlineOrange && (
                    <span className="text-primary">{slide.headlineOrange}</span>
                  )}
                </h1>
              )}

              {slide.sub && (
                <p className="text-secondary-foreground/70 font-sans text-lg mb-6 leading-relaxed">
                  {slide.sub}
                </p>
              )}

              {slide.points.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {slide.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3 font-sans text-base text-secondary-foreground/90"
                    >
                      <p.Icon
                        size={22}
                        weight="duotone"
                        className="text-primary flex-shrink-0"
                      />
                      <span>
                        {p.prefix}
                        {p.bold && <strong className="text-primary">{p.bold}</strong>}
                        {p.suffix}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="border border-primary/40 bg-primary/10 rounded-xl px-5 py-4 mb-8 flex items-start gap-3">
                {slide.AlertIcon && (
                  <slide.AlertIcon
                    size={22}
                    weight="fill"
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                )}
                <div>
                  <p className="font-display text-lg font-bold text-primary">
                    {slide.alert}
                  </p>
                  {slide.alertSub && (
                    <p className="font-sans text-sm text-secondary-foreground/60 mt-1">
                      {slide.alertSub}
                    </p>
                  )}
                </div>
              </div>

              <a
                href={slide.cta.href}
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-semibold text-base hover:bg-orange-dark transition-colors shadow-orange"
              >
                {slide.cta.label}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Dots ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              if (i === 0) setBgIdx(0);
            }}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
