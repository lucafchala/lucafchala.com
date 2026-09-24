# TODO — migration finish line

_Last checked: 2026-09-24 (live URLs verified with curl)._

## Build (needs real content)
- [x] keys.lucafchala.com — SSH public key + armored PGP key (live: ed25519 + RSA 4096)
- [x] proof.lucafchala.com — ownership statement + PGP (live, signed Jun 8th 2026)
- [x] paste.lucafchala.com/pgp — real armored PGP key (matches keys.lucafchala.com)

## DNS
- [x] Point keys + proof at their new Pages projects (both return 200)
- [x] Drop/redirect: now, weblog, pictures, tildverse, log (now/weblog → /transferring)

## Polish
- [x] lucafchala.com favicon.svg (+ icon.svg for transferring.html) — redrawn; PNG icons + apple-touch-icon generated from it

## Open (outside this repo)
- [ ] **Cloudflare zone:** Rocket Loader and Cloudflare Fonts rewrite the HTML. The homepage now opts out
      (`data-cfasync="false"`, self-hosted fonts) and the CSP allows `/cf-fonts/`, but turning Rocket Loader
      off for the zone is cleaner (Speed → Optimization → Content Optimization).
- [ ] **dash:** several event PURLs still point at Google Drive / the Cloudspot deprecation paste although the
      galleries now live on fotos (e.g. `/piauifut2025` → `fotos.lucafchala.com/piauifut2025`,
      `/paraty` → `/paraty-24-25`, `/natal-2024` → `/natal2024`, `/ecp_125_anos` → `/ecp125`,
      `/isa_16anos` → `/isak-16`, `/viagem-familia_2024` → `/famiglia2024`, `/ecp_carros` → `/ecp-carros-2024`,
      `/mostra2025` → `/mostracultural2025`, `/piauifest2025` → `/piauifest2025`, `/piauifut2024` → `/piauifut2024`).
      Edit them in dash (it regenerates `_redirects`).
- [ ] **dash:** the shared `404.html` uses inline `onclick=` handlers. The CSP here allows exactly those two
      handlers via `'unsafe-hashes'`; if dash changes the 404 template, re-run the CSP hash script.
- [ ] **status:** `/api/status` has no CORS header, so the homepage can't show a live status dot yet
      (would need `Access-Control-Allow-Origin: https://lucafchala.com`).

## Done ✅
- READMEs across all 10 repos + hub; keys/proof wired into homepage, url, status
- now/weblog discontinued everywhere (transferring.html, homepage, url, status, dash); gear link → paste/camera-gear
- 2026-09 homepage redesign: self-hosted fonts (fixes CSP-blocked fonts in production), sections, command palette, a11y contrast
