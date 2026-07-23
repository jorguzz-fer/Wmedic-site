import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
const logo = "/logo/wmedic-logo.svg";

type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "O que Fazemos", href: "/o-que-fazemos" },
  { label: "Frentes de Atuação", href: "/frentes-de-atuacao" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar - only visible when NOT scrolled */}
      <div
        className={`bg-navy text-secondary-foreground py-2 text-sm hidden lg:block transition-all duration-300 ${
          scrolled ? "opacity-0 h-0 overflow-hidden py-0" : "opacity-100"
        }`}
      >
        <div className="container flex justify-center items-center">
          <span className="flex items-center gap-2">
            <span className="text-orange">❤</span> Gestão que cuida. Cuidado que transforma.
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-0"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "container max-w-6xl mx-auto bg-navy/30 backdrop-blur-xl rounded-full shadow-lg border border-secondary-foreground/10"
              : "bg-background"
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              scrolled
                ? "px-4 lg:px-6 h-16 lg:h-20"
                : "container h-20 lg:h-24"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="WMedic — Gestão Médica"
                className={`transition-all duration-300 ${
                  scrolled ? "w-[150px] lg:w-[180px]" : "w-[180px] lg:w-[250px]"
                }`}
              />
              {scrolled && (
                <div className="hidden lg:block w-px h-8 bg-secondary-foreground/20 ml-6" />
              )}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  <Link
                    to={item.href}
                    className={`px-3 py-2 font-sans text-sm font-medium transition-colors flex items-center gap-1 ${
                      scrolled
                        ? "text-secondary-foreground/80 hover:text-primary-foreground"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {item.dropdown && (
                    <div className="absolute left-0 top-full pt-2 min-w-[220px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                      <div className="bg-navy border border-secondary-foreground/10 rounded-xl shadow-lg overflow-hidden py-1.5">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-4 py-2.5 font-sans text-sm font-medium text-secondary-foreground/80 hover:text-primary-foreground hover:bg-white/5 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/contato"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-sans text-sm font-semibold hover:bg-orange-dark transition-colors shadow-orange"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${
                scrolled ? "text-secondary-foreground" : "text-foreground"
              }`}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`lg:hidden overflow-hidden ${
                scrolled
                  ? "mx-4 mt-2 rounded-2xl bg-navy/95 backdrop-blur-xl border border-secondary-foreground/10"
                  : "bg-card border-t border-border"
              }`}
            >
              <nav className="px-6 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`py-3 font-sans text-base font-medium flex items-center justify-between border-b ${
                        scrolled
                          ? "text-secondary-foreground/80 hover:text-primary-foreground border-secondary-foreground/10"
                          : "text-foreground hover:text-primary border-border/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="flex flex-col">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className={`py-2.5 pl-4 font-sans text-sm font-medium flex items-center border-b ${
                              scrolled
                                ? "text-secondary-foreground/60 hover:text-primary-foreground border-secondary-foreground/10"
                                : "text-muted-foreground hover:text-primary border-border/50"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="/contato"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-sans text-sm font-semibold text-center mt-4"
                >
                  Fale Conosco
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
