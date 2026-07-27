import { useEffect } from "react";
import {
  Download,
  Check,
  X,
  Ruler,
  Type,
  Palette,
  Sparkles,
  Mail,
  ShieldAlert,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Página interna de Aplicação de Marca (brand book resumido).
 * Uso restrito às equipes — não deve ser exposta no menu de navegação.
 * URL: /aplicacao-marca
 */

const logoVersions = [
  {
    src: "/brand/logo-full.png",
    nome: "Logo principal",
    desc: "Colorido — uso preferencial em fundos claros.",
    bg: "bg-white",
    file: "logo-full.png",
  },
  {
    src: "/brand/logo-white.png",
    nome: "Logo negativo",
    desc: "100% branco — fundos escuros ou coloridos.",
    bg: "bg-navy",
    file: "logo-white.png",
  },
  {
    src: "/brand/logo-mono.png",
    nome: "Logo monocromático",
    desc: "Grafite #1E1B2E — impressão em uma cor.",
    bg: "bg-warm-gray",
    file: "logo-mono.png",
  },
];

const symbolVersions = [
  {
    src: "/brand/symbol.png",
    nome: "Símbolo colorido",
    bg: "bg-white",
    file: "symbol.png",
  },
  {
    src: "/brand/symbol-white.png",
    nome: "Símbolo branco",
    bg: "bg-navy",
    file: "symbol-white.png",
  },
  {
    src: "/brand/symbol-mono.png",
    nome: "Símbolo grafite",
    bg: "bg-warm-gray",
    file: "symbol-mono.png",
  },
];

const cores = [
  { nome: "Roxo principal", hex: "#8C52FF", uso: "Cor de marca — destaques e CTAs", light: false },
  { nome: "Roxo escuro", hex: "#6C47C2", uso: "Hover, sombreados e apoio", light: false },
  { nome: "Roxo claro", hex: "#A98CF0", uso: "Realces, chips e ícones", light: false },
  { nome: "Grafite", hex: "#1E1B2E", uso: "Textos e versão monocromática", light: false },
  { nome: "Cinza neutro", hex: "#6E6A7C", uso: "Textos secundários", light: false },
  { nome: "Lilás claro", hex: "#F6F3FB", uso: "Fundos e áreas de respiro", light: true },
];

const usosCorretos = [
  "Manter a proporção original do logo e do símbolo.",
  "Respeitar a área de respiro (1x = diâmetro do círculo do W).",
  "Usar a versão negativa sobre fundos escuros ou coloridos.",
  "Garantir contraste suficiente entre marca e fundo.",
];

const usosIncorretos = [
  "Distorcer, esticar ou rotacionar a marca.",
  "Alterar as cores oficiais ou aplicar gradientes não previstos.",
  "Aplicar o logo colorido sobre fundos que reduzam a legibilidade.",
  "Adicionar sombras, contornos ou efeitos ao símbolo.",
];

const AplicacaoMarca = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Aplicação de Marca — WMedic (uso interno)";

    // Impede indexação: página de consulta interna das equipes.
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero text-secondary-foreground py-24">
        <div className="container max-w-4xl">
          <span className="inline-flex items-center gap-2 text-lime font-sans text-sm font-semibold uppercase tracking-widest">
            <ShieldAlert className="w-4 h-4" /> Uso interno · consulta das equipes
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Aplicação de Marca
          </h1>
          <p className="text-secondary-foreground/70 font-sans text-lg mt-6 leading-relaxed">
            Guia rápido de uso da identidade visual WMedic — logotipos, símbolo,
            cores e tipografia. Material de referência para as equipes; não é
            divulgado publicamente no site.
          </p>
        </div>
      </section>

      {/* Aviso interno */}
      <div className="bg-warm-gray border-b border-border">
        <div className="container max-w-5xl py-4 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="font-sans text-sm text-muted-foreground">
            Esta página é de <strong className="text-foreground">consulta interna</strong>. Para
            produção gráfica, solicite sempre as versões vetoriais (SVG/EPS) pelo e-mail de comunicação.
          </p>
        </div>
      </div>

      {/* Logotipos */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
              Logotipo
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Versões do logo
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mb-12">
            Escolha a versão de acordo com o fundo. Baixe o arquivo clicando em cada card.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {logoVersions.map((v) => (
              <div
                key={v.file}
                className="rounded-2xl overflow-hidden border border-border shadow-card bg-card flex flex-col"
              >
                <div className={`${v.bg} flex items-center justify-center p-10 min-h-[180px]`}>
                  <img src={v.src} alt={v.nome} className="max-h-24 w-auto object-contain" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground">{v.nome}</h3>
                  <p className="text-sm text-muted-foreground font-sans mt-1 flex-1">{v.desc}</p>
                  <a
                    href={v.src}
                    download={v.file}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-orange-dark transition-colors"
                  >
                    <Download className="w-4 h-4" /> Baixar PNG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Símbolo */}
      <section className="py-20 bg-warm-gray">
        <div className="container max-w-6xl">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
              Símbolo
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Símbolo isolado
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mb-12">
            Use o símbolo em espaços reduzidos, avatares e ícones — sempre com área de respiro.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {symbolVersions.map((v) => (
              <div
                key={v.file}
                className="rounded-2xl overflow-hidden border border-border shadow-card bg-card flex flex-col"
              >
                <div className={`${v.bg} flex items-center justify-center p-10 min-h-[180px]`}>
                  <img src={v.src} alt={v.nome} className="max-h-24 w-auto object-contain" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-display text-base font-bold text-foreground">{v.nome}</h3>
                  <a
                    href={v.src}
                    download={v.file}
                    aria-label={`Baixar ${v.nome}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-orange-dark transition-colors"
                  >
                    <Download className="w-4 h-4" /> PNG
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cores */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="flex items-center gap-3 mb-3">
            <Palette className="w-5 h-5 text-primary" />
            <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
              Paleta
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cores da marca
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mb-12">
            Paleta oficial WMedic. Clique no código para copiar.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cores.map((c) => (
              <div
                key={c.hex}
                className="rounded-2xl overflow-hidden border border-border shadow-card bg-card"
              >
                <div
                  className="h-28 flex items-end p-4"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className={`font-mono text-sm font-semibold ${
                      c.light ? "text-navy" : "text-white"
                    }`}
                  >
                    {c.hex}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-foreground">{c.nome}</h3>
                  <p className="text-sm text-muted-foreground font-sans mt-1">{c.uso}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipografia + Especificações */}
      <section className="py-20 bg-warm-gray">
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-6">
          {/* Tipografia */}
          <div className="rounded-2xl border border-border shadow-card bg-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Type className="w-5 h-5 text-primary" />
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
                Tipografia
              </span>
            </div>
            <p className="font-display text-5xl font-bold text-foreground mb-2">Aa</p>
            <h3 className="font-display text-xl font-bold text-foreground">
              Aristotélica Pro Semi Negrito
            </h3>
            <p className="text-sm text-muted-foreground font-sans mt-2 mb-6">
              Fonte institucional para peças gráficas. Substituta para web:{" "}
              <strong className="text-foreground">Poppins</strong>.
            </p>
            <div className="border-t border-border pt-6">
              <p className="font-sans text-2xl text-foreground">Poppins Regular</p>
              <p className="font-sans text-2xl font-semibold text-foreground">Poppins SemiBold</p>
              <p className="font-sans text-2xl font-bold text-foreground">Poppins Bold</p>
            </div>
          </div>

          {/* Especificações técnicas */}
          <div className="rounded-2xl border border-border shadow-card bg-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Ruler className="w-5 h-5 text-primary" />
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
                Especificações
              </span>
            </div>
            <ul className="space-y-5">
              <li>
                <p className="font-display text-base font-bold text-foreground">Tamanho mínimo</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">
                  Logo: <strong className="text-foreground">120px</strong> ou 30mm · Símbolo:{" "}
                  <strong className="text-foreground">24px</strong> ou 8mm.
                </p>
              </li>
              <li>
                <p className="font-display text-base font-bold text-foreground">Área de respiro</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">
                  Margem livre de <strong className="text-foreground">1x</strong> ao redor da marca,
                  onde 1x = diâmetro do círculo do "W".
                </p>
              </li>
              <li>
                <p className="font-display text-base font-bold text-foreground">Produção gráfica</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">
                  Solicite as versões vetoriais (SVG/EPS) para impressão e grandes formatos.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Usos corretos / incorretos */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Boas práticas de aplicação
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-success/30 bg-success/5 p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-9 h-9 rounded-full bg-success/15 flex items-center justify-center">
                  <Check className="w-5 h-5 text-success" />
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">Faça</h3>
              </div>
              <ul className="space-y-3">
                {usosCorretos.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                    <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-9 h-9 rounded-full bg-destructive/15 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">Não faça</h3>
              </div>
              <ul className="space-y-3">
                {usosIncorretos.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                    <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-gradient-hero text-secondary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Precisa dos arquivos vetoriais?
          </h2>
          <p className="text-secondary-foreground/70 font-sans mb-8">
            Para produção gráfica ou dúvidas sobre a aplicação da marca, fale com o time de comunicação.
          </p>
          <a
            href="mailto:comunicacao@wmedic.com.br"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-sans text-sm font-semibold hover:bg-orange-dark transition-colors shadow-orange"
          >
            <Mail className="w-4 h-4" /> comunicacao@wmedic.com.br
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AplicacaoMarca;
