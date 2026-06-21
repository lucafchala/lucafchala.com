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
  index.html        # Redirect to status.lucafchala.com (the real dashboard)
```

## Key facts

- **No framework, no build tool** — pure HTML, CSS, vanilla JS. Just edit and push.
- **Bilingual** — Portuguese (BR) and English, switched client-side. Translations are inline in `index.html` as `data-pt` / `data-en` attributes.
- **Dark/light theme** — toggled via a button, persisted in `localStorage`.
- **`_redirects`** — Cloudflare Pages syntax (`/path  https://dest  301`). Covers social links, event galleries, video downloads, and tools.
- **`status/index.html`** — a script-free redirect (meta refresh) to `https://status.lucafchala.com`, the canonical dashboard. The real status site runs server-side Cloudflare Pages Functions that do functional checks of every service (real status codes, content markers, data-file integrity, and fotos `/api/healthz`). The old client-side version lived here but could only see total outages (cross-origin `no-cors` probes are opaque) and its inline scripts were blocked by this site's CSP — so it now points at the source of truth.
- **`404.html`** — minified; shows the invalid slug and links back home.

## Subdomains (all separate deployments, monitored in `status/`)

`fotos` • `radio` • `weblog` • `now` • `paste` • `url` • `keys` • `proof` • `status` — all under `lucafchala.com`.

## Content-Security-Policy

`_headers` pins the homepage's inline `<script>` blocks (head theme script, the
JSON-LD block, and the main app script) with `sha256-` hashes instead of
`'unsafe-inline'`. **If you edit any inline script in `index.html`, regenerate
the hashes** or the page's JS will be blocked:

```bash
python3 - <<'PY'
import re, hashlib, base64
html = open('index.html', encoding='utf-8').read()
for m in re.finditer(r'<script\b([^>]*)>(.*?)</script>', html, re.DOTALL):
    a, inner = m.group(1), m.group(2)
    if 'src=' in a or not inner.strip(): continue
    print("'sha256-" + base64.b64encode(hashlib.sha256(inner.encode()).digest()).decode() + "'")
PY
```

Inline event handlers (`onclick=`…) are intentionally avoided for the same
reason — wire events with `addEventListener` in the main script.

## Deployment

Push to `main` → Cloudflare Pages deploys automatically. No CI, no build command.
