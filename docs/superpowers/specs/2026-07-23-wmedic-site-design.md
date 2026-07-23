# Design — Site WMedic (Gestão Médica)

**Data:** 2026-07-23
**Status:** Aprovado (aguardando revisão do spec)

## Contexto

Reaproveitar integralmente a arquitetura do site da **Wowmais** (React + Vite +
TypeScript + Tailwind + shadcn/ui) para criar o novo site institucional da
**WMedic — Gestão Médica**, gestora da operação assistencial do grupo WFSP.

O tema muda de saúde/seguros (navy + laranja) para gestão médica (paleta verde).
A troca é centralizada porque o tema é dirigido por variáveis CSS em
`src/index.css` + `tailwind.config.ts`.

Fonte de conteúdo: infográfico institucional da WMedic (tagline, 6 frentes,
especialidades, diferenciais, propósito) + copy profissional PT-BR escrito por
mim como placeholder realista. Dados de contato/CNPJ ficam como placeholder.

## Decisões

- **Escopo:** site multi-página completo (não one-page).
- **Mapa de páginas:** redesenhado para o contexto médico (não reaproveita as
  rotas segmentadas da Wowmais).
- **Copy:** escrito por mim com base no infográfico; usuário revisa depois.
- **Logo:** SVG placeholder criado por mim; usuário troca pelo oficial depois.
- **Cores:** paleta extraída do infográfico.
- **Fontes:** mantidas — Montserrat (títulos) + Poppins (texto).

## Paleta (substitui navy/laranja)

Definida via CSS variables em `src/index.css`, consumida por `tailwind.config.ts`.

| Token             | Uso                                        | HSL aprox.       | Hex approx |
|-------------------|--------------------------------------------|------------------|------------|
| `--primary`       | verde-marca: títulos, botões, links        | `146 55% 26%`    | #1e6639    |
| `--accent`        | verde-limão: destaques, ícones, checks     | `92 55% 52%`     | #7cc63f    |
| `--forest`        | verde-escuro: seções escuras, hero, footer | `152 58% 12%`    | #0d3323    |
| `--forest-light`  | variação clara do verde-escuro             | `150 45% 20%`    | —          |
| tints claros      | fundos de cards/ícones                     | verde bem claro  | —          |

- Gradiente de destaque (logo "W", texto realçado): limão → verde-marca.
- `--forest` assume o papel que o `--navy` tinha (utilitários `.bg-navy*`,
  `.text-navy`, `--gradient-hero`). Mantemos os nomes dos tokens/classes
  existentes onde possível para minimizar reescrita, apenas remapeando os
  valores HSL — OU renomeamos para `forest`/`brand`. Decisão de implementação:
  **remapear valores mantendo nomes de classe** para reduzir superfície de
  mudança, exceto onde a semântica "navy"/"orange" ficar confusa no código novo.

## Mapa de rotas

| Rota                  | Página            | Conteúdo                                                                 |
|-----------------------|-------------------|--------------------------------------------------------------------------|
| `/`                   | Home              | Hero, pilares (Excelência/Segurança/Humanização/Resultados), O que fazemos, Frentes de atuação, Diferenciais, Propósito, CTA |
| `/sobre`              | Institucional     | Quem é a WMedic, missão/visão/valores, relação com o grupo WFSP          |
| `/o-que-fazemos`      | O que Fazemos     | 6 frentes detalhadas                                                     |
| `/frentes-de-atuacao` | Frentes de Atuação| Clínicos 24h, Especialidades, Psicologia, Nutrição, Pediatria, Programas de Saúde, Gestão de Escalas, Suporte e Qualidade |
| `/blog`               | Blog              | Listagem (conteúdo de exemplo)                                           |
| `/blog/:slug`         | BlogPost          | Post individual (exemplo)                                                |
| `/contato`            | Contato           | Formulário + dados (placeholder)                                         |
| `/legal`              | Legal             | Privacidade/termos                                                       |
| `*`                   | NotFound          | 404                                                                      |

**Rotas removidas da Wowmais:** `/para-você`, `/para-empresas`,
`/para-entidades`, `/consultor`, `/nr1`.

### As 6 frentes (O que fazemos)
Corpo Clínico · Credenciamento e Rede · Qualidade Assistencial ·
Experiência do Paciente · Gestão e Inteligência · Suporte Clínico

### Pilares (Home)
Excelência (em cada detalhe) · Segurança (em cada processo) ·
Humanização (em cada atendimento) · Resultados (que geram valor)

### Diferenciais
Equipe médica qualificada · Processos padronizados · Tecnologia integrada ·
Foco em resultado e satisfação

### Propósito / slogan
"Cuidar de pessoas. Transformar vidas. Gerar saúde e bem-estar."
Slogan: "WMedic. Gestão que cuida. Cuidado que transforma."
Tagline hero: "Cuidado que transforma. Gestão que gera resultados."

## Componentes

Reaproveitar (reescrevendo texto + remapeando cores via tokens):
Header, Footer, HeroSlider, ServicesSection, FeaturesSection, AboutSection,
CTASection, FAQSection, MarqueeSection, EspecialidadesSection, NetworkSection,
ComparativoSection, PricingSection (avaliar remoção se não fizer sentido),
NavLink, e a base `components/ui/*` (shadcn — inalterada).

- **Header:** nav nova (mapa acima) + logo WMedic.
- **Footer:** blocos de valores (Milhares de vidas cuidadas, Rede qualificada,
  Qualidade, Parceria, Inovação) + slogan + dados placeholder.
- Componentes sem uso no novo mapa (ex: seções específicas da Wowmais) são
  removidos das páginas ou deletados se não referenciados.

## Logo

SVG placeholder: marca "W" com gradiente limão→verde-marca + wordmark
"WMEDIC" e subtítulo "GESTÃO MÉDICA". Colocado em `src/assets/` e/ou `public/`.
Estrutura isolada para troca fácil pelo arquivo oficial depois.

## Assets de imagem

Hero slides e about-image atuais são da Wowmais. Substituir por imagens
neutras/médicas (placeholder) ou manter genéricas temporariamente. Decisão de
implementação: usar placeholders neutros e sinalizar para o usuário trocar.

## Testes

Manter setup Vitest + Playwright. Ajustar `src/test/example.test.ts` e qualquer
teste que referencie texto/marca antiga da Wowmais para não quebrar o build.

## Fora de escopo

- Backend / envio real do formulário de contato (fica como stub/placeholder).
- Conteúdo real de blog (apenas exemplos).
- Dados legais/CNPJ reais (placeholder).
- Logo e imagens oficiais (usuário fornece depois).

## Metadados do projeto

- Sem repositório git inicializado (`git init` opcional).
- `package.json` name atual: `vite_react_shadcn_ts` (pode ser atualizado para wmedic).
