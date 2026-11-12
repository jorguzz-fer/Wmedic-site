# Apresentações WMedic

Material institucional e comercial com a marca oficial (paleta de `/aplicacao-marca`, Poppins e IBM Plex Mono).

## No site

| Endereço | Arquivo |
|---|---|
| wmedic.com.br/apresentacao-institucional | `public/apresentacao-institucional/index.html` (12 slides: operadora de saúde digital B2B, sem detalhar White Label) |
| wmedic.com.br/apresentacao-comercial | `public/apresentacao-comercial/index.html` (13 slides: base de proposta com as três opções, serviço gerenciado, White Label e API) |

As duas páginas são HTML estático copiado pelo Vite para `dist/`. Elas compartilham `public/apresentacao-assets/`:

| Arquivo | O que é |
|---|---|
| `deck.css`, `deck.js` | Estilo e navegação das apresentações |
| `objecoes.js` | Último slide: perguntas de objeção por perfil. Institucional (`data-obj="inst"`): empresa ou parceiro. Comercial: investidor ou empresa B2B |
| `img/` | Fotos, logos e parceiros |

Cada página tem `<base href="/apresentacao-assets/">`, por isso os caminhos funcionam com ou sem barra no final do endereço.
O nginx do `Dockerfile` serve `$uri/index.html` antes de cair no `index.html` do React.

## Nesta pasta (fora do site)

| Arquivo | O que é |
|---|---|
| `guia-comercial.html` | Guia do time comercial (A4, 9 páginas, uso interno) |
| `wowmais-instituicoes/` | Apresentação WOW+ para instituições (14 slides, marca WOW+, com `deck.css`/`deck.js` próprios e `wow.css`). Não faz parte do site WMedic |
| `pdf/` | PDFs das apresentações e do guia |
| `gerar-pdfs.cjs` | Gera os PDFs de novo |

## Como apresentar

Abra o endereço no navegador. Use ← → ou espaço para navegar, F para tela cheia e o botão de sol no rodapé para trocar entre tema escuro (projeção) e claro.
O endereço `#s3` abre direto no slide 3. Para testar localmente, rode `npm run dev` e abra `http://localhost:8080/apresentacao-comercial/index.html`.

## Como regerar os PDFs

Depois de editar qualquer página:

```bash
node apresentacoes/gerar-pdfs.cjs
```

Precisa do Playwright com Chromium. Os PDFs saem em `apresentacoes/pdf/`. A versão de impressão abre os slides com `?print`: respostas reveladas, tema claro e o slide de objeções duplicado (um por perfil).

## Antes de usar com cliente

Na comercial, o slide 3 (diagnóstico) e o slide 11 (faixas e investimento) são preenchidos para cada cliente; o que é digitado fica salvo só no navegador de quem apresenta. A tabela de faixas sai sem preços: os valores entram na proposta. Os valores do simulador e as telas do aplicativo são exemplos. O guia lista, na página 8, o que o time deve confirmar com produto e operação antes de prometer (funcionalidades, grade de especialidades, prazos, preços).
