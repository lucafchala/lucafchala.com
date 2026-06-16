# Codebase Overview

Personal website for Luca F. Chala. Static site, no build step, deployed automatically via Cloudflare Pages on every push to `main`.

## Structure

```
index.html          # Main landing page
404.html            # Custom 404 page
transferring.html   # Migration notice (for pages moving off omg.lol)
_redirects          # Cloudflare Pages redirect rules (301s)
_headers            # Cloudflare Pages response headers (CSP, HSTS, Link)
robots.txt          # Crawl rules + AI Content-Signal preferences + sitemap ref
sitemap.xml         # Canonical URLs for this deployment
status/
  index.html        # Service status dashboard
```

## Key facts

- **No framework, no build tool** — pure HTML, CSS, vanilla JS. Just edit and push.
- **Bilingual** — Portuguese (BR) and English, switched client-side. Translations are inline in `index.html` as `data-pt` / `data-en` attributes.
- **Dark/light theme** — toggled via a button, persisted in `localStorage`.
- **`_redirects`** — Cloudflare Pages syntax (`/path  https://dest  301`). Covers social links, event galleries, video downloads, and tools.
- **`status/index.html`** — polls all subdomains with HEAD requests, shows latency + status badges, auto-refreshes every 60 s.
- **`404.html`** — minified; shows the invalid slug and links back home.

## Subdomains (all separate deployments, monitored in `status/`)

`fotos` • `radio` • `weblog` • `now` • `paste` • `url` • `keys` • `proof` • `status` — all under `lucafchala.com`.

## Deployment

Push to `main` → Cloudflare Pages deploys automatically. No CI, no build command.
