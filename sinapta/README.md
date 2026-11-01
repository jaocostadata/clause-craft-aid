# Sinapta — novo site institucional

Site estático (HTML + CSS + JS puro, sem build) baseado na nova identidade visual da Sinapta.

## Como rodar

Abra `index.html` no navegador ou sirva a pasta:

```bash
npx serve sinapta
```

Para publicar, envie o conteúdo da pasta para qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages, S3).

## Identidade visual

| Token | Valor | Uso |
|---|---|---|
| Ink | `#0A0F2C` | Wordmark, textos, fundos escuros |
| Azul | `#1F3FE0` | Início do gradiente do "Λ" |
| Violeta | `#5B2FC2` | Meio do gradiente |
| Laranja | `#F0563A` | Fim do gradiente / destaques |

- Tipografia: **Space Grotesk** (títulos) + **DM Sans** (texto).
- `assets/logo.svg`: logo vetorial recriado a partir da imagem enviada. Troque pelo arquivo oficial quando disponível.
- `assets/favicon.svg`: monograma "Λ" com o gradiente da marca.

## Boas práticas aplicadas

- HTML semântico, skip link, foco visível, `aria-*` no menu, FAQ e formulário.
- Contraste de texto WCAG AA (≥ 4,5:1), áreas de toque ≥ 44px.
- Respeita `prefers-reduced-motion`; animações só com `transform`/`opacity`.
- Responsivo testado em 390px, 768px, 1024px e 1440px, sem overflow horizontal.
- Zero dependências de JS, fontes com `display=swap`, SEO (meta, Open Graph, JSON-LD).

## Pontos para revisar

- Os textos são uma proposta: o site atual não pôde ser acessado durante a criação.
- O e-mail `contato@sinapta.dev.br` é provisório (em `index.html` e `main.js` → `CONTACT_EMAIL`).
- O formulário abre o app de e-mail (`mailto:`). Para envio direto, conecte um serviço como Formspree ou uma API.
