# WMedic Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar o site clonado da Wowmais no site institucional multi-página da **WMedic — Gestão Médica** (grupo WFSP), trocando tema (paleta verde), rotas, marca e conteúdo.

**Architecture:** Reaproveitar a arquitetura existente (React 18 + Vite + TS + Tailwind + shadcn/ui + framer-motion). O tema é dirigido por CSS variables em `src/index.css` consumidas por `tailwind.config.ts`; **remapeamos os valores das cores mantendo os nomes de classe** (`navy`, `orange`, `primary` etc.) para minimizar reescrita, e adicionamos um token novo `lime` para os destaques verde-limão. Conteúdo reescrito componente a componente preservando o markup/JSX existente, trocando apenas os arrays de dados, textos e links/ícones específicos da Wowmais.

**Tech Stack:** React, Vite, TypeScript, TailwindCSS, shadcn/ui, framer-motion, react-router-dom, lucide-react, @phosphor-icons/react, Vitest, Playwright, bun.

---

## Estratégia de conteúdo

Todo o copy PT-BR da WMedic está neste plano (é o deliverable). Para componentes/páginas de conteúdo, a regra é: **preservar a estrutura JSX/animações existentes e substituir apenas** (a) os arrays de dados no topo do arquivo, (b) headings/subtítulos de seção, (c) links `https://app.wowmais.com.br/*` → `#` ou `/contato`, e (d) ícones/textos claramente da Wowmais. Cores mudam sozinhas via tokens.

Dados de contato/CNPJ ficam como placeholder marcado com `{/* TODO cliente */}`.

## File Structure

**Modificados (tema/estrutura):**
- `src/index.css` — remapear CSS vars para verde + adicionar `--lime*`, utilitários `.text-lime`/`.bg-lime`/`.bg-gradient-lime`.
- `tailwind.config.ts` — adicionar `lime` ao objeto `colors`.
- `index.html` — title/meta/OG + favicon.
- `package.json` — `name`.
- `src/App.tsx` — novo mapa de rotas.
- `src/components/Header.tsx` — nav nova + logo + top bar + CTA.
- `src/components/Footer.tsx` — blocos de valores + slogan + placeholders.

**Criados:**
- `public/logo/wmedic-logo.svg` — logo placeholder (usado claro/escuro).
- `src/pages/Sobre.tsx`
- `src/pages/OQueFazemos.tsx`
- `src/pages/FrentesDeAtuacao.tsx`

**Reescritos (conteúdo):**
- `src/components/HeroSlider.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `FeaturesSection.tsx`, `EspecialidadesSection.tsx`, `MarqueeSection.tsx`, `CTASection.tsx`, `FAQSection.tsx`, `NetworkSection.tsx`, `ComparativoSection.tsx`.
- `src/pages/Index.tsx`, `Contato.tsx`, `Legal.tsx`, `Blog.tsx`, `BlogPost.tsx`.

**Removidos:**
- `src/pages/ParaVoce.tsx`, `ParaEmpresas.tsx`, `ParaEntidades.tsx`, `Consultor.tsx`, `NR1.tsx`, `Servicos.tsx`.
- `src/components/PricingSection.tsx` (planos/preço não se aplicam a B2B gestão médica).

---

## FASE 1 — Fundação (tema, marca, meta)

### Task 1: Remapear paleta para verde

**Files:**
- Modify: `src/index.css` (bloco `:root`, ~lines 9-67, e `@layer utilities`)

- [ ] **Step 1: Substituir os valores das CSS variables no `:root`**

Substituir o bloco `:root { ... }` (o comentário `/* WOW Mais Brand Colors */` até o fechamento antes de `--sidebar-*`) por estes valores. **Manter os nomes das variáveis**, trocar só os HSL:

```css
    /* WMedic Brand Colors — verde institucional */
    --background: 0 0% 100%;
    --foreground: 156 20% 12%;

    --card: 0 0% 100%;
    --card-foreground: 156 20% 12%;

    --popover: 0 0% 100%;
    --popover-foreground: 156 20% 12%;

    /* Verde-marca (era "orange") */
    --primary: 146 55% 26%;
    --primary-foreground: 0 0% 100%;

    /* Verde-escuro institucional (era "navy/purple") */
    --secondary: 152 58% 12%;
    --secondary-foreground: 0 0% 100%;

    --muted: 150 15% 95%;
    --muted-foreground: 156 8% 40%;

    --accent: 146 55% 26%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 150 15% 90%;
    --input: 150 15% 90%;
    --ring: 146 55% 26%;

    --radius: 0.5rem;

    /* Custom tokens — "navy" = verde-escuro, "orange" = verde-marca */
    --navy: 152 58% 12%;
    --navy-light: 150 40% 18%;
    --navy-dark: 156 60% 8%;
    --orange: 146 55% 26%;
    --orange-light: 140 45% 34%;
    --orange-dark: 148 58% 20%;
    --warm-gray: 150 20% 96%;
    --warm-gray-dark: 150 12% 88%;

    /* Verde-limão de destaque (novo) */
    --lime: 92 55% 52%;
    --lime-light: 92 60% 62%;
    --lime-dark: 95 50% 42%;

    --gradient-hero: linear-gradient(135deg, hsl(152 58% 12%) 0%, hsl(156 60% 8%) 100%);
    --gradient-orange: linear-gradient(135deg, hsl(146 55% 26%) 0%, hsl(92 55% 52%) 100%);
    --gradient-lime: linear-gradient(135deg, hsl(92 55% 52%) 0%, hsl(146 55% 26%) 100%);
    --shadow-card: 0 4px 24px -4px hsl(152 58% 12% / 0.08);
    --shadow-card-hover: 0 12px 40px -8px hsl(152 58% 12% / 0.15);
    --shadow-orange: 0 8px 24px -4px hsl(146 55% 26% / 0.35);
```

> Nota: `--gradient-orange` agora é verde→limão, então `.text-gradient` (que o usa) renderiza destaque verde→limão. Deixar o bloco `--sidebar-*` como está.

- [ ] **Step 2: Adicionar utilitários lime no `@layer utilities`**

No final do bloco `@layer utilities { ... }` de `src/index.css`, antes do `}` de fechamento, adicionar:

```css
  .text-lime {
    color: hsl(var(--lime));
  }

  .bg-lime {
    background-color: hsl(var(--lime));
  }

  .bg-gradient-lime {
    background: var(--gradient-lime);
  }

  .text-gradient-lime {
    @apply bg-clip-text text-transparent;
    background-image: var(--gradient-lime);
  }
```

- [ ] **Step 3: Registrar `lime` no Tailwind**

Em `tailwind.config.ts`, dentro de `theme.extend.colors`, após o bloco `orange: { ... }`, adicionar:

```ts
        lime: {
          DEFAULT: "hsl(var(--lime))",
          light: "hsl(var(--lime-light))",
          dark: "hsl(var(--lime-dark))",
        },
```

- [ ] **Step 4: Verificar build do CSS**

Run: `bun run build`
Expected: build conclui sem erro (sem falha de PostCSS/Tailwind).

- [ ] **Step 5: Commit**

```bash
git add src/index.css tailwind.config.ts
git commit -m "feat(theme): remap palette to WMedic green + add lime token"
```

---

### Task 2: Logo placeholder SVG

**Files:**
- Create: `public/logo/wmedic-logo.svg`

- [ ] **Step 1: Criar o SVG do logo**

Criar `public/logo/wmedic-logo.svg` com um "W" em gradiente verde→limão + wordmark. Placeholder para o cliente trocar depois:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 96" width="360" height="96" role="img" aria-label="WMedic — Gestão Médica">
  <defs>
    <linearGradient id="wm-w" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7cc63f"/>
      <stop offset="100%" stop-color="#1e6639"/>
    </linearGradient>
  </defs>
  <path d="M8 20 L24 76 L40 20 L52 76 L68 20" fill="none" stroke="url(#wm-w)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="92" y="52" font-family="Montserrat, sans-serif" font-size="40" font-weight="800" fill="#1e6639" letter-spacing="1">WMEDIC</text>
  <text x="94" y="76" font-family="Montserrat, sans-serif" font-size="14" font-weight="500" fill="#5a6b60" letter-spacing="6">GESTÃO MÉDICA</text>
</svg>
```

- [ ] **Step 2: Verificar que o SVG abre**

Run: `bun run dev` e abrir `http://localhost:5173/logo/wmedic-logo.svg` (ou verificar via preview). Expected: SVG renderiza logo verde.

- [ ] **Step 3: Commit**

```bash
git add public/logo/wmedic-logo.svg
git commit -m "feat(brand): add WMedic placeholder logo svg"
```

---

### Task 3: Meta tags, título e package name

**Files:**
- Modify: `index.html`
- Modify: `package.json:2`

- [ ] **Step 1: Reescrever o `<head>` do index.html**

Substituir as tags `<title>`, `<meta name="description">`, `author`, `og:*`, `twitter:*` e `<link rel="icon">` por:

```html
    <title>WMedic — Gestão Médica | Cuidado que transforma</title>
    <meta name="description" content="A WMedic é responsável pela gestão da operação assistencial do grupo WFSP, garantindo excelência, qualidade e acesso à saúde de forma humanizada, segura e eficiente." />
    <meta name="author" content="WMedic" />
    <meta property="og:title" content="WMedic — Gestão Médica" />
    <meta property="og:description" content="Gestão que cuida. Cuidado que transforma." />
    <link rel="icon" type="image/svg+xml" href="/logo/wmedic-logo.svg" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/logo/wmedic-logo.svg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/logo/wmedic-logo.svg" />
```

- [ ] **Step 2: Atualizar o name no package.json**

Em `package.json`, trocar `"name": "vite_react_shadcn_ts",` por `"name": "wmedic-site",`.

- [ ] **Step 3: Commit**

```bash
git add index.html package.json
git commit -m "chore: WMedic meta tags, title and package name"
```

---

## FASE 2 — Shell (Header, Footer, rotas)

### Task 4: Header — nav, logo e CTA

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Trocar as constantes de logo e o array `navItems`**

Substituir as duas linhas:
```ts
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";
```
por:
```ts
const logo = "/logo/wmedic-logo.svg";
```

Substituir o array `navItems` inteiro por:
```ts
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "O que Fazemos", href: "/o-que-fazemos" },
  { label: "Frentes de Atuação", href: "/frentes-de-atuacao" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];
```

- [ ] **Step 2: Ajustar o `<img>` do logo**

No `<Link to="/">`, trocar `src={scrolled ? logoLight : logoDark}` por `src={logo}` e `alt="WOW Mais"` por `alt="WMedic — Gestão Médica"`. Manter as classes de tamanho.

- [ ] **Step 3: Ajustar a top bar e o CTA**

Trocar o texto da top bar `O que mais Importa?` por `Gestão que cuida. Cuidado que transforma.` (manter o `<span className="text-orange">❤</span>`).

Trocar o CTA: `href="https://app.wowmais.com.br/"` → `href="/contato"`, e o texto `Entrar` → `Fale Conosco`. Fazer o mesmo no CTA do menu mobile.

- [ ] **Step 4: Verificar tipos/lint**

Run: `bun run build`
Expected: sem erro TS (nenhuma referência a `logoDark`/`logoLight`).

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat(header): WMedic nav, logo and CTA"
```

---

### Task 5: Footer — valores, slogan e contato

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Ler o arquivo e mapear os blocos**

Ler `src/components/Footer.tsx` inteiro. Identificar: colunas de links, dados de contato, redes sociais, e qualquer bloco de "valores".

- [ ] **Step 2: Substituir links de navegação do footer**

Trocar os links internos para o novo mapa: `/sobre`, `/o-que-fazemos`, `/frentes-de-atuacao`, `/blog`, `/contato`, `/legal`. Remover links para rotas removidas (`/para-voce`, `/para-empresas`, `/para-entidades`, `/consultor`, `/nr1`, `/serviços`).

- [ ] **Step 3: Substituir textos de marca e valores**

Trocar toda menção "WOW Mais"/"WOW+" por "WMedic". Bloco de valores/propósito usa:
- Propósito: **"Cuidar de pessoas. Transformar vidas. Gerar saúde e bem-estar."**
- Blocos: **Milhares** (de vidas cuidadas todos os dias) · **Rede** (qualificada em todo o Brasil) · **Qualidade** (que gera confiança e resultados) · **Parceria** (com empresas e clientes) · **Inovação** (para uma saúde mais inteligente).
- Slogan/base: **"WMedic. Gestão que cuida. Cuidado que transforma."**

- [ ] **Step 4: Placeholders de contato**

Substituir e-mail/telefone/endereço/CNPJ por placeholders com marcador:
```tsx
{/* TODO cliente */}
contato@wmedic.com.br
```
Trocar links de redes sociais por `#` com `{/* TODO cliente */}`.

- [ ] **Step 5: Trocar o logo do footer**

Se o footer usa `/logo/logo-light.png` (ou similar), trocar por `/logo/wmedic-logo.svg` e `alt="WMedic"`.

- [ ] **Step 6: Verificar build**

Run: `bun run build`
Expected: sem erro.

- [ ] **Step 7: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(footer): WMedic values, links and slogan"
```

---

### Task 6: Rotas (App.tsx) + remoção de páginas

**Files:**
- Modify: `src/App.tsx`
- Delete: `src/pages/ParaVoce.tsx`, `ParaEmpresas.tsx`, `ParaEntidades.tsx`, `Consultor.tsx`, `NR1.tsx`, `Servicos.tsx`
- Delete: `src/components/PricingSection.tsx`

- [ ] **Step 1: Reescrever App.tsx**

Substituir todo o conteúdo de `src/App.tsx` por:

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Sobre from "./pages/Sobre.tsx";
import OQueFazemos from "./pages/OQueFazemos.tsx";
import FrentesDeAtuacao from "./pages/FrentesDeAtuacao.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Contato from "./pages/Contato.tsx";
import Legal from "./pages/Legal.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/o-que-fazemos" element={<OQueFazemos />} />
          <Route path="/frentes-de-atuacao" element={<FrentesDeAtuacao />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/legal" element={<Legal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

- [ ] **Step 2: Deletar páginas e componente não usados**

```bash
rm src/pages/ParaVoce.tsx src/pages/ParaEmpresas.tsx src/pages/ParaEntidades.tsx src/pages/Consultor.tsx src/pages/NR1.tsx src/pages/Servicos.tsx src/components/PricingSection.tsx
```

> As páginas novas (`Sobre`, `OQueFazemos`, `FrentesDeAtuacao`) serão criadas nas Tasks 13-15. O build vai falhar até lá — commit desta task só depois de criar os stubs no Step 3.

- [ ] **Step 3: Criar stubs mínimos das 3 páginas novas para o build compilar**

Criar `src/pages/Sobre.tsx`, `src/pages/OQueFazemos.tsx`, `src/pages/FrentesDeAtuacao.tsx` cada um com (trocando `NomeDaPagina`):

```tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NomeDaPagina = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-32">{/* conteúdo na task dedicada */}</main>
    <Footer />
  </div>
);

export default NomeDaPagina;
```

Nomes de componente: `Sobre`, `OQueFazemos`, `FrentesDeAtuacao`.

- [ ] **Step 4: Verificar build**

Run: `bun run build`
Expected: compila sem erro de import (nenhuma referência às páginas deletadas — se houver import residual em Index/Footer, corrigir).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat(routes): new WMedic route map, remove Wowmais-specific pages"
```

---

## FASE 3 — Home (seções de conteúdo)

> Regra geral desta fase: preservar JSX/animações, trocar arrays de dados + headings + links `app.wowmais.com.br` → `/contato`.

### Task 7: HeroSlider

**Files:**
- Modify: `src/components/HeroSlider.tsx`

- [ ] **Step 1: Trocar imagens de fundo**

Trocar `const bgImages = ["/images/slide1-novo.jpg", "/images/7.jpg", "/images/4.jpg"];` — manter os caminhos (imagens genéricas servem como placeholder). Adicionar comentário `// TODO cliente: trocar por imagens médicas`.

- [ ] **Step 2: Reescrever o slide "solução" (institucional WMedic)**

No bloco `isSolution`, substituir textos por:
- Badge: `Gestão médica com excelência, segurança e humanização`
- H1: `Cuidado que transforma. ` + `<span className="font-bold">Gestão que gera resultados.</span>`
- Parágrafo: `A WMedic é responsável pela gestão da operação assistencial do grupo WFSP, garantindo excelência, qualidade e acesso à saúde de forma humanizada, segura e eficiente.`
- Lista (4 itens): `Médicos clínicos 24h`, `Especialidades médicas, psicologia e nutrição`, `Rede credenciada qualificada em todo o Brasil`, `Gestão, inteligência e suporte clínico`
- Botão: `href="/contato"`, texto `Fale com a WMedic`

- [ ] **Step 3: Reescrever `problemSlides` (pilares WMedic)**

Substituir o array `problemSlides` por 4 slides baseados nos pilares. Cada objeto mantém o shape `ProblemSlide`. Conteúdo:

```ts
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
```

- [ ] **Step 4: Trocar cores hardcoded**

Trocar `#fd8311` (no `backgroundImage` radial) por `#7cc63f`. Manter `#080b13`/`bg-navy-dark` (viram verde via token). Remover imports de ícones não usados (`CurrencyDollar`, `CalendarX`) se ficarem sem uso — rodar build para confirmar.

- [ ] **Step 5: Build**

Run: `bun run build`
Expected: sem erro TS (sem imports/vars não usados que quebrem lint no build).

- [ ] **Step 6: Commit**

```bash
git add src/components/HeroSlider.tsx
git commit -m "feat(home): WMedic hero content and pillars"
```

---

### Task 8: AboutSection

**Files:**
- Modify: `src/components/AboutSection.tsx`

- [ ] **Step 1: Ler o arquivo** e localizar heading, parágrafos, bullets e imagem.

- [ ] **Step 2: Substituir conteúdo**
- Eyebrow/tag: `Sobre a WMedic`
- Heading (usar `text-gradient` na palavra-chave): `Gestão da operação assistencial do grupo ` + destaque `WFSP`
- Parágrafo: `A WMedic é responsável por garantir excelência, qualidade e acesso à saúde de forma humanizada, segura e eficiente — coordenando corpo clínico, rede credenciada, qualidade assistencial e a experiência de cada paciente.`
- Bullets (se houver lista): `Corpo clínico gerido e coordenado`, `Rede credenciada em todo o Brasil`, `Protocolos clínicos e segurança do paciente`, `Governança de alta performance`
- CTA (se houver): `href="/sobre"`, texto `Saiba mais`
- Imagem: manter `about-image.jpg` (placeholder), `alt="WMedic — Gestão Médica"`.

- [ ] **Step 3: Build** — Run: `bun run build` → Expected: sem erro.
- [ ] **Step 4: Commit** — `git commit -am "feat(home): WMedic about section"`

---

### Task 9: ServicesSection → "O que fazemos" (6 frentes)

**Files:**
- Modify: `src/components/ServicesSection.tsx`

- [ ] **Step 1: Trocar imports de ícones**

Trocar `import { Heart, Activity, Pill } from "lucide-react";` por:
```ts
import { Stethoscope, ShieldCheck, HeartPulse, Users, LineChart, Headphones } from "lucide-react";
```

- [ ] **Step 2: Substituir o array `services` pelas 6 frentes**

```ts
const services = [
  { icon: Users, title: "Corpo Clínico", description: "Gestão e coordenação de médicos e especialistas.", features: ["Seleção e avaliação contínua", "Coordenação de equipes", "Escalas e cobertura"], link: "/o-que-fazemos" },
  { icon: ShieldCheck, title: "Credenciamento e Rede", description: "Seleção criteriosa de profissionais e prestadores em todo o Brasil.", features: ["Rede qualificada", "Cobertura nacional", "Gestão de prestadores"], link: "/o-que-fazemos" },
  { icon: HeartPulse, title: "Qualidade Assistencial", description: "Protocolos clínicos, segurança do paciente e melhoria contínua dos processos.", features: ["Protocolos clínicos", "Segurança do paciente", "Melhoria contínua"], link: "/o-que-fazemos" },
  { icon: Stethoscope, title: "Experiência do Paciente", description: "Atendimento humanizado, eficiente e resolutivo em todas as jornadas de cuidado.", features: ["Atendimento humanizado", "Jornada de cuidado", "Resolutividade"], link: "/o-que-fazemos" },
  { icon: LineChart, title: "Gestão e Inteligência", description: "Dados, indicadores e governança para uma operação de alta performance.", features: ["Indicadores e dados", "Governança assistencial", "Alta performance"], link: "/o-que-fazemos" },
  { icon: Headphones, title: "Suporte Clínico", description: "Apoio contínuo aos pacientes e à equipe médica.", features: ["Apoio à equipe médica", "Suporte ao paciente", "Disponibilidade contínua"], link: "/o-que-fazemos" },
];
```

- [ ] **Step 3: Ajustar headings e grid**
- Eyebrow: `O que fazemos`
- H2: `Gestão médica ` + `<span className="text-gradient">de ponta a ponta</span>`
- Parágrafo: `A WMedic cuida de toda a operação assistencial com excelência, segurança e humanização.`
- Trocar o `<span>` do CTA de card `Assinar Plano →` por `Saiba mais →`.
- Trocar `motion.a` `href`/`target="_blank"` para rota interna: como agora `link` é interno, trocar `<motion.a href={service.link} target="_blank" rel="noopener noreferrer">` por `<motion.a href={service.link}>` (ou manter `<a>` simples). Remover `target`/`rel`.

- [ ] **Step 4: Build** — Run: `bun run build` → Expected: sem erro.
- [ ] **Step 5: Commit** — `git commit -am "feat(home): O que fazemos (6 frentes)"`

---

### Task 10: FeaturesSection → Diferenciais

**Files:**
- Modify: `src/components/FeaturesSection.tsx`

- [ ] **Step 1: Substituir o array `reasons`**

```ts
const reasons = [
  "Equipe médica qualificada e avaliada",
  "Processos padronizados e melhores práticas",
  "Tecnologia integrada para segurança e eficiência",
  "Foco em resultado e satisfação",
  "Rede credenciada em todo o Brasil",
];
```

- [ ] **Step 2: Ajustar headings**
- Eyebrow: `Por que somos diferenciais`
- H2: `Diferenciais que geram resultado`
- Parágrafo: `Gestão médica com governança, qualidade e foco em quem mais importa: o paciente.`

- [ ] **Step 3: Build + Commit**
Run: `bun run build` → Expected: sem erro.
`git commit -am "feat(home): diferenciais section"`

---

### Task 11: EspecialidadesSection → Frentes de Atuação

**Files:**
- Modify: `src/components/EspecialidadesSection.tsx`

- [ ] **Step 1: Ler o arquivo** e localizar o array de especialidades e headings.

- [ ] **Step 2: Substituir a lista pelas frentes de atuação da WMedic**

Usar exatamente estes 8 itens (adaptar campos ao shape existente — provavelmente `{ nome/title, icon? }`):
`Médicos Clínicos 24h`, `Especialidades Médicas`, `Psicologia`, `Nutrição`, `Pediatria`, `Programas de Saúde`, `Gestão de Escalas e Atendimento`, `Suporte e Qualidade`.

Se o componente usa ícones por item (lucide/phosphor), mapear: Clínicos 24h→`Clock`, Especialidades→`Stethoscope`, Psicologia→`Brain`, Nutrição→`Apple`/`Salad`, Pediatria→`Baby`, Programas de Saúde→`HeartPulse`, Gestão de Escalas→`CalendarCheck`, Suporte e Qualidade→`Headphones`. Importar de `lucide-react` os que forem usados.

- [ ] **Step 3: Ajustar headings**
- Eyebrow: `Nossas frentes de atuação`
- H2: `Frentes de ` + `<span className="text-gradient">atuação</span>`
- Parágrafo: `Cobertura clínica completa, do atendimento 24h aos programas de saúde e à gestão de escalas.`

- [ ] **Step 4: Remover links/CTAs para `app.wowmais.com.br`** (trocar por `/contato` ou remover).

- [ ] **Step 5: Build + Commit**
Run: `bun run build` → Expected: sem erro.
`git commit -am "feat(home): frentes de atuação section"`

---

### Task 12: MarqueeSection, CTASection, FAQSection, NetworkSection, ComparativoSection

**Files:**
- Modify: `src/components/MarqueeSection.tsx`, `CTASection.tsx`, `FAQSection.tsx`, `NetworkSection.tsx`, `ComparativoSection.tsx`

- [ ] **Step 1: MarqueeSection** — se exibe palavras/logos em loop, trocar por termos WMedic: `Excelência · Segurança · Humanização · Resultados · Gestão · Qualidade · Rede · Inovação`. Se usa logos de parceiros (`/partners`), manter como placeholder com comentário `{/* TODO cliente: logos */}`.

- [ ] **Step 2: CTASection** — Heading: `Vamos cuidar da sua operação assistencial?`; sub: `Fale com a WMedic e conheça nossa gestão médica.`; botão `href="/contato"` texto `Fale Conosco`. Remover links `app.wowmais.com.br`.

- [ ] **Step 3: FAQSection** — substituir o array de perguntas por 5 perguntas WMedic:
```
Q: O que é a WMedic? A: A WMedic é a gestora da operação assistencial do grupo WFSP, responsável por corpo clínico, rede credenciada, qualidade assistencial e experiência do paciente.
Q: Quais frentes de atuação a WMedic cobre? A: Médicos clínicos 24h, especialidades médicas, psicologia, nutrição, pediatria, programas de saúde, gestão de escalas e suporte e qualidade.
Q: Como a WMedic garante qualidade? A: Com protocolos clínicos, segurança do paciente, processos padronizados e melhoria contínua alinhada às melhores práticas.
Q: A WMedic atende em todo o Brasil? A: Sim — a rede credenciada é qualificada e distribuída em todo o território nacional.
Q: Como falar com a WMedic? A: Pela página de Contato ou pelos canais informados no rodapé.
```

- [ ] **Step 4: NetworkSection** — adaptar textos para "rede credenciada qualificada em todo o Brasil"; trocar métricas Wowmais por placeholders WMedic (ex: `Milhares de vidas cuidadas`, `Rede em todo o Brasil`) com `{/* TODO cliente: números reais */}`. Remover links externos Wowmais.

- [ ] **Step 5: ComparativoSection** — se for um comparativo de planos/preços (Wowmais), **removê-lo do Index** (Task 13) em vez de reescrever, OU reescrever como comparativo "gestão tradicional × gestão WMedic". Decisão: reescrever headings para `Gestão tradicional × Gestão WMedic` e as linhas para pares (ex: `Processos manuais` × `Processos padronizados`; `Sem indicadores` × `Dados e governança`; `Atendimento fragmentado` × `Jornada humanizada`; `Rede sem curadoria` × `Rede credenciada qualificada`). Se o esforço for alto, remover do Index.

- [ ] **Step 6: Build + Commit**
Run: `bun run build` → Expected: sem erro.
`git commit -am "feat(home): marquee, CTA, FAQ, network, comparativo content"`

---

### Task 13: Index — composição da Home

**Files:**
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Remover `PricingSection` e ajustar ordem**

Substituir o conteúdo de `src/pages/Index.tsx` por (sem `PricingSection`; ordem institucional):

```tsx
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import NetworkSection from "@/components/NetworkSection";
import FAQSection from "@/components/FAQSection";
import MarqueeSection from "@/components/MarqueeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <EspecialidadesSection />
      <NetworkSection />
      <FAQSection />
      <MarqueeSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
```

> Se `ComparativoSection` foi reescrito (Task 12 Step 5), adicioná-lo antes de `<FAQSection />`; se removido, deixar de fora (como acima).

- [ ] **Step 2: Build** — Run: `bun run build` → Expected: sem erro.
- [ ] **Step 3: Commit** — `git commit -am "feat(home): compose WMedic Index"`

---

## FASE 4 — Páginas internas

### Task 14: Página Sobre

**Files:**
- Modify: `src/pages/Sobre.tsx` (substitui o stub da Task 6)

- [ ] **Step 1: Implementar a página** reaproveitando `Header`, `AboutSection`, `FeaturesSection`, `CTASection`, `Footer` + um bloco de missão/visão/valores.

```tsx
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const valores = [
  { titulo: "Excelência", texto: "Em cada detalhe da operação assistencial." },
  { titulo: "Segurança", texto: "Em cada processo, alinhada às melhores práticas." },
  { titulo: "Humanização", texto: "Em cada atendimento e jornada de cuidado." },
  { titulo: "Resultados", texto: "Que geram valor para pacientes, clientes e rede." },
];

const Sobre = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="bg-gradient-hero text-secondary-foreground py-28">
      <div className="container max-w-3xl">
        <span className="text-lime font-sans text-sm font-semibold uppercase tracking-widest">Sobre a WMedic</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">Gestão que cuida. Cuidado que transforma.</h1>
        <p className="text-secondary-foreground/70 font-sans text-lg mt-6 leading-relaxed">
          A WMedic é responsável pela gestão da operação assistencial do grupo WFSP, garantindo excelência, qualidade e acesso à saúde de forma humanizada, segura e eficiente.
        </p>
      </div>
    </section>
    <AboutSection />
    <section className="py-24 bg-warm-gray">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Nossos valores</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((v) => (
            <div key={v.titulo} className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-3">{v.titulo}</h3>
              <p className="text-muted-foreground font-sans">{v.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FeaturesSection />
    <CTASection />
    <Footer />
  </div>
);

export default Sobre;
```

- [ ] **Step 2: Build + Commit** — `bun run build` → sem erro; `git commit -am "feat(page): Sobre"`

---

### Task 15: Páginas "O que Fazemos" e "Frentes de Atuação"

**Files:**
- Modify: `src/pages/OQueFazemos.tsx`, `src/pages/FrentesDeAtuacao.tsx` (substituem stubs)

- [ ] **Step 1: OQueFazemos** — reaproveitar `ServicesSection` (já são as 6 frentes) + hero + `CTASection`:

```tsx
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const OQueFazemos = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="bg-gradient-hero text-secondary-foreground py-28">
      <div className="container max-w-3xl">
        <span className="text-lime font-sans text-sm font-semibold uppercase tracking-widest">O que fazemos</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">Gestão médica de ponta a ponta</h1>
        <p className="text-secondary-foreground/70 font-sans text-lg mt-6 leading-relaxed">
          Coordenamos corpo clínico, rede credenciada, qualidade assistencial, experiência do paciente, inteligência de dados e suporte clínico.
        </p>
      </div>
    </section>
    <ServicesSection />
    <CTASection />
    <Footer />
  </div>
);

export default OQueFazemos;
```

- [ ] **Step 2: FrentesDeAtuacao** — reaproveitar `EspecialidadesSection` + hero + `CTASection`:

```tsx
import Header from "@/components/Header";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const FrentesDeAtuacao = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="bg-gradient-hero text-secondary-foreground py-28">
      <div className="container max-w-3xl">
        <span className="text-lime font-sans text-sm font-semibold uppercase tracking-widest">Nossas frentes de atuação</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 leading-tight">Cobertura clínica completa</h1>
        <p className="text-secondary-foreground/70 font-sans text-lg mt-6 leading-relaxed">
          Do atendimento clínico 24h às especialidades, psicologia, nutrição, pediatria, programas de saúde e gestão de escalas.
        </p>
      </div>
    </section>
    <EspecialidadesSection />
    <CTASection />
    <Footer />
  </div>
);

export default FrentesDeAtuacao;
```

- [ ] **Step 3: Build + Commit** — `bun run build` → sem erro; `git commit -am "feat(page): O que Fazemos + Frentes de Atuação"`

---

### Task 16: Contato

**Files:**
- Modify: `src/pages/Contato.tsx`

- [ ] **Step 1: Ler o arquivo** e localizar textos de marca, campos do formulário, dados de contato e submit.

- [ ] **Step 2: Substituir marca e textos** — trocar "WOW Mais/WOW+" por "WMedic". Heading: `Fale com a WMedic`. Sub: `Gestão médica com excelência, segurança e humanização. Conte pra gente como podemos ajudar.`

- [ ] **Step 3: Placeholders de contato** — e-mail/telefone/endereço/CNPJ como `{/* TODO cliente */}` (`contato@wmedic.com.br`, etc.).

- [ ] **Step 4: Submit stub** — se o form envia para endpoint Wowmais, trocar por handler local que só mostra toast de sucesso (`useToast`) e faz `preventDefault` — sem backend real. Comentar `{/* TODO cliente: integrar backend */}`.

- [ ] **Step 5: Build + Commit** — `bun run build` → sem erro; `git commit -am "feat(page): Contato"`

---

### Task 17: Blog, BlogPost e Legal

**Files:**
- Modify: `src/pages/Blog.tsx`, `src/pages/BlogPost.tsx`, `src/pages/Legal.tsx`

- [ ] **Step 1: Blog** — trocar marca e o array de posts por 3 exemplos WMedic:
```
1) "Gestão assistencial: o que é e por que importa" — slug: gestao-assistencial
2) "Qualidade e segurança do paciente na prática" — slug: qualidade-seguranca-paciente
3) "Tecnologia e dados na gestão médica" — slug: tecnologia-dados-gestao
```
Manter imagens `/images/blog/*` como placeholder. Remover categorias/autores Wowmais (usar `Equipe WMedic`).

- [ ] **Step 2: BlogPost** — trocar marca/texto exemplo; garantir que renderiza qualquer slug com conteúdo genérico WMedic (não quebrar se slug não existir — manter fallback existente ou `NotFound`).

- [ ] **Step 3: Legal** — trocar "WOW Mais" por "WMedic" em todo o texto; CNPJ/razão social/endereço como `{/* TODO cliente */}`. Manter estrutura de Política de Privacidade/Termos.

- [ ] **Step 4: Build + Commit** — `bun run build` → sem erro; `git commit -am "feat(page): Blog, BlogPost, Legal"`

---

## FASE 5 — Limpeza, teste e verificação

### Task 18: Varredura de marca residual

**Files:** todo `src/`, `public/robots.txt`

- [ ] **Step 1: Buscar menções residuais**

Run:
```bash
grep -rniE "wow ?mais|wow\+|wowmais|/para-|/consultor|/nr1|/serviços" src public/robots.txt || echo "limpo"
```
Expected: idealmente `limpo`. Para cada ocorrência, corrigir (texto→WMedic; link→rota nova ou `/contato`).

- [ ] **Step 2: robots.txt / arquivo de verificação** — atualizar `public/robots.txt` (trocar host se citar wowmais) e avaliar remover `public/215jlti69211frj5c597jw38r3vxps.html` (arquivo de verificação Wowmais) — remover com comentário no commit.

- [ ] **Step 3: Commit** — `git commit -am "chore: remove residual Wowmais references"`

---

### Task 19: Ajustar teste e validar build final

**Files:**
- Modify: `src/test/example.test.ts`

- [ ] **Step 1: Escrever um teste real mínimo de fumaça**

Substituir `src/test/example.test.ts` por um teste que garante que o mapa de rotas não referencia páginas removidas:

```ts
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";

describe("WMedic routes", () => {
  const app = readFileSync("src/App.tsx", "utf-8");

  it("registers the new WMedic routes", () => {
    for (const path of ["/sobre", "/o-que-fazemos", "/frentes-de-atuacao", "/blog", "/contato", "/legal"]) {
      expect(app).toContain(`path="${path}"`);
    }
  });

  it("does not reference removed Wowmais pages", () => {
    for (const gone of ["ParaVoce", "ParaEmpresas", "ParaEntidades", "Consultor", "NR1", "Servicos"]) {
      expect(app).not.toContain(gone);
    }
  });
});
```

- [ ] **Step 2: Rodar os testes**

Run: `bun run test` (ou `bunx vitest run`)
Expected: PASS (2 testes).

- [ ] **Step 3: Build de produção**

Run: `bun run build`
Expected: build conclui sem erro.

- [ ] **Step 4: Verificação visual no preview**

Subir o dev server (`bun run dev`) e, via preview do navegador, checar: Home carrega, cores verdes aplicadas, logo WMedic no header, navegação para `/sobre`, `/o-que-fazemos`, `/frentes-de-atuacao`, `/blog`, `/contato`, `/legal` sem erro de console. Corrigir o que aparecer.

- [ ] **Step 5: Commit**

```bash
git add src/test/example.test.ts
git commit -m "test: WMedic route smoke test; final build green"
```

---

## Self-Review (coberto)

- **Paleta verde** → Task 1. **Logo** → Task 2. **Meta/marca** → Task 3.
- **Header/Footer** → Tasks 4-5. **Rotas + remoção** → Task 6.
- **Home (hero, pilares, o que fazemos, diferenciais, frentes, propósito, CTA)** → Tasks 7-13.
- **Páginas Sobre / O que Fazemos / Frentes / Contato / Blog / Legal** → Tasks 14-17.
- **Limpeza + testes + build** → Tasks 18-19.
- Fora de escopo (backend, conteúdo real, dados legais, imagens/logo oficiais) marcado com `{/* TODO cliente */}`.
