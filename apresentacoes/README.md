# Apresentações WMedic

Material institucional e comercial com a marca oficial (paleta de `/aplicacao-marca`, Poppins e IBM Plex Mono).
Esta pasta não faz parte do build do site.

| Arquivo | O que é |
|---|---|
| `institucional.html` | Apresentação institucional interativa (10 slides) |
| `comercial.html` | Apresentação comercial interativa: plataforma whitelabel de telemedicina e consultas online (11 slides) |
| `guia-comercial.html` | Guia do time comercial (A4, 9 páginas) |
| `pdf/` | PDFs gerados das três peças |
| `deck.css`, `deck.js` | Estilo e navegação compartilhados das apresentações |
| `gerar-pdfs.cjs` | Gera os PDFs de novo |

## Como apresentar

Abra o `.html` num navegador. Use ← → ou espaço para navegar, F para tela cheia e o botão de sol no rodapé para trocar entre tema escuro (projeção) e claro.
O endereço `#s3` abre direto no slide 3.

## Como regerar os PDFs

Depois de editar qualquer `.html`:

```bash
node apresentacoes/gerar-pdfs.cjs
```

Precisa do Playwright com Chromium. Os PDFs saem em `apresentacoes/pdf/`. A versão de impressão abre os slides com `?print`: todas as respostas reveladas e o tema claro.

## Antes de usar com cliente

Os valores do simulador e as telas do aplicativo são exemplos. O guia lista, na página 8, o que o time deve confirmar com produto e operação antes de prometer (funcionalidades, grade de especialidades, prazos, preços).
