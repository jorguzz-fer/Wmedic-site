import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Heart,
  ChevronDown,
  Mail,
  MapPin,
  ArrowUpRight,
  Headset,
  MessageCircle,
} from "lucide-react";

const logo = "/brand/logo-white.png";

const footerSections = [
  {
    title: "Como Funciona",
    links: [
      { label: "O que é a WMedic", href: "/sobre" },
      { label: "O que fazemos", href: "/o-que-fazemos" },
      { label: "Nossas frentes de atuação", href: "/frentes-de-atuacao" },
      { label: "Como cuidamos de você", href: "/o-que-fazemos" },
      { label: "Como usar os serviços", href: "/o-que-fazemos" },
    ],
  },
  {
    title: "Nossos Serviços",
    links: [
      { label: "Gestão médica", href: "/o-que-fazemos" },
      { label: "Rede qualificada", href: "/o-que-fazemos" },
      { label: "Saúde e bem-estar", href: "/o-que-fazemos" },
      { label: "Soluções para empresas", href: "/frentes-de-atuacao" },
      { label: "Cuidado personalizado", href: "/o-que-fazemos" },
      { label: "Como contratar", href: "/contato" },
    ],
  },
  {
    title: "Frentes de Atuação",
    links: [
      { label: "WMedic Med (Saúde)", href: "/frentes-de-atuacao" },
    ],
  },
  {
    title: "A WMedic",
    links: [
      { label: "Quem somos", href: "/quem-somos" },
      { label: "Nossa missão", href: "/nossa-missao" },
      { label: "Nossos valores", href: "/nossos-valores" },
      { label: "Inovação em saúde", href: "/inovacao-em-saude" },
      { label: "Fale conosco", href: "/contato" },
    ],
  },
  {
    title: "Atendimento e Suporte",
    links: [
      { label: "Fale com a WMedic", href: "/contato" },
      { label: "Central de atendimento", href: "/contato" },
      { label: "WhatsApp", href: "/contato" },
      { label: "Área do cliente", href: "/contato" },
      { label: "Abrir chamado", href: "/contato" },
    ],
  },
  {
    title: "Conteúdo & Educação",
    links: [
      { label: "Blog WMedic", href: "/blog" },
      { label: "Dicas de saúde", href: "/blog" },
      { label: "Qualidade de vida", href: "/blog" },
      { label: "Educação em saúde", href: "/blog" },
      { label: "Saúde mental", href: "/frentes-de-atuacao" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Sobre a WMedic", href: "/sobre" },
      { label: "Nossa missão", href: "/nossa-missao" },
      { label: "Tecnologia & inovação", href: "/inovacao-em-saude" },
      { label: "Onde estamos", href: "/onde-estamos" },
      { label: "Parceiros e rede", href: "/parceiros" },
    ],
  },
  {
    title: "Legal & Segurança",
    links: [
      { label: "Termos de uso", href: "/termos-de-uso" },
      { label: "Política de privacidade (LGPD)", href: "/politica-de-privacidade" },
      { label: "Contrato do cliente", href: "/contrato-do-cliente" },
      { label: "Código de conduta", href: "/codigo-de-conduta" },
      { label: "Segurança de dados", href: "/seguranca-de-dados" },
    ],
  },
  {
    title: "Empresas & Parcerias",
    links: [
      { label: "Soluções para empresas", href: "/para-empresas" },
      { label: "Benefício corporativo", href: "/para-empresas" },
      { label: "Parcerias", href: "/parceiros" },
      { label: "Seja parceiro WMedic", href: "/contato" },
      { label: "Indique empresas", href: "/contato" },
    ],
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "O que fazemos", href: "/o-que-fazemos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

// TODO cliente: social media URLs
const socialLinks = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* ── Quick Links Bar ── */}
      <div className="bg-navy-dark border-b border-white/5">
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            <span className="font-sans text-xs text-white/30 uppercase tracking-widest mr-2">
              Acesso rápido
            </span>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-white/60 hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-primary/40"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="bg-navy relative">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 pt-16 lg:pt-20 pb-12">
          {/* Top row: Logo + Contact + Social */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-4">
              <img
                src={logo}
                alt="WMedic"
                className="w-[200px] mb-6"
              />
              <p className="font-sans text-sm text-white/50 leading-relaxed max-w-sm mb-8">
                Cuidar de pessoas. Transformar vidas. Gerar saúde e bem-estar.
                A WMedic é gestão médica com uma rede qualificada em todo o
                Brasil, cuidado que gera confiança e resultados.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
              {/* TODO cliente */}
              {[
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  info: "+55 00 00000-0000",
                  sub: "Horário de atendimento",
                },
                {
                  icon: Mail,
                  title: "E-mail",
                  info: "contato@wmedic.com.br",
                  sub: "Atendimento",
                },
                {
                  icon: MapPin,
                  title: "Localização",
                  info: "Brasil",
                  sub: "Rede em todo o país",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-[22px] h-[22px] text-primary" />
                  </div>
                  <p className="font-sans text-xs text-white/40 uppercase tracking-wider mb-1">
                    {card.title}
                  </p>
                  <p className="font-display text-base font-semibold text-white mb-0.5">
                    {card.info}
                  </p>
                  <p className="font-sans text-xs text-white/40">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          {/* ── Links Grid: Desktop ── */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-x-8 gap-y-10 mb-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors duration-200 leading-relaxed inline-block"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors duration-200 leading-relaxed inline-block"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Links Accordion: Mobile ── */}
          <div className="lg:hidden mb-12 space-y-0">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="border-b border-white/[0.06]"
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {section.title}
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-white/40 transition-transform duration-300 ${
                      expandedSection === section.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === section.title ? "auto" : 0,
                    opacity: expandedSection === section.title ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="pb-4 pl-4 space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.href.startsWith("/") ? (
                          <Link
                            to={link.href}
                            className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="font-sans text-[13px] text-white/45 hover:text-primary transition-colors"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Disclaimer */}
            <p className="font-sans text-[11px] text-white/25 leading-relaxed max-w-3xl text-center lg:text-left">
              A WMedic é gestão médica que conecta pessoas e empresas a uma
              rede qualificada de saúde em todo o Brasil, gerando cuidado,
              confiança e resultados.{" "}
              <strong className="text-white/40">
                WMedic. Gestão que cuida. Cuidado que transforma.
              </strong>
            </p>

            {/* Copyright */}
            <div className="flex flex-col items-center lg:items-end gap-1 shrink-0">
              <p className="font-sans text-xs text-white/30 flex items-center gap-1.5">
                © {new Date().getFullYear()} WMedic. Todos os direitos
                reservados.
              </p>
              <p className="font-sans text-[11px] text-white/20 flex items-center gap-1">
                Feito com{" "}
                <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> no
                Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
