# diego-spagnolo

Rebuild moderno (originale, non copiato) del sito in Next.js (App Router) con:
- UI moderna + dark mode
- SEO (metadata, OpenGraph, canonical, sitemap/robots)
- AI agent integrato (API route + widget chat)

## Requisiti

- Node.js 20+ consigliato

## Setup

```bash
npm i
cp .env.example .env.local
npm run dev
```

Apri http://localhost:3000

## Variabili d’ambiente

Vedi `.env.example`.

- `NEXT_PUBLIC_SITE_URL`: usato per canonical + sitemap
- `OPENAI_API_KEY`: abilita l’endpoint `/api/agent`
- `AI_MODEL`: modello OpenAI (default `gpt-4o-mini`)

## SEO

- Metadata globale in `src/app/layout.tsx`
- OG/Twitter image dinamica in `src/app/opengraph-image.tsx`
- Sitemap + robots generati in build con `next-sitemap` (`npm run build`)
- File per LLM in `public/llms.txt`

## AI agent

- Endpoint: `POST /api/agent` (streaming)
- UI: widget in basso a destra (`src/components/assistant/ChatWidget.tsx`)

Nota: il rate limit è in-memory (ok per demo). In produzione conviene usare Upstash/Redis o un provider edge.

## Deploy

Consigliato Vercel. Imposta le env vars (almeno `NEXT_PUBLIC_SITE_URL` e `OPENAI_API_KEY`) e deploy.
