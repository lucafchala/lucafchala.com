# TODO — ecosystem follow-ups

_Last updated: 2026-09-24. Each open item is a GitHub issue; this file is the index._

## Open

### Merge + verify the 2026-09 pass
- [ ] Merge order and post-deploy checklist → lucafchala/lucafchala.com#17
  (dash#25 first, then url#11 · paste#9 · lucafchala.com#16, then keys#3 · proof#5 · pays#1 · status#51)

### Needs the owner (dashboard / private key)
- [ ] Cloudflare zone: turn off Rocket Loader; decide on Email Obfuscation / Cloudflare Fonts → lucafchala/lucafchala.com#18
- [ ] PGP key: add an @lucafchala.com UID, revoke the tucas.me UIDs, publish WKD → lucafchala/lucafchala.com#19
- [ ] Re-sign the proof statement (link keys.lucafchala.com, move the phone number) → lucafchala/proof.lucafchala.com#6
- [ ] Bind `DASH_KV` for the login rate limit → lucafchala/dash.lucafchala.com#27
- [ ] Renew `security.txt` before 2027-01-20 → lucafchala/lucafchala.com#20

### Content
- [ ] Repoint the remaining Cloudspot / Drive event links (ibiúna_2025, ferriani_2024, …) → lucafchala/dash.lucafchala.com#26
- [ ] Paste follow-ups: hand-built pages, e-mail-me addresses → lucafchala/paste.lucafchala.com#10

### Features
- [ ] Homepage live status dots (status API sends CORS now) → lucafchala/lucafchala.com#21
- [ ] PURL destination health check, click counts → lucafchala/dash.lucafchala.com#28
- [ ] subs: backup beyond this browser, subscribable calendar → lucafchala/pays.lucafchala.com#2
- [ ] status.lucafchala.com phase 2 (alerts, double opt-in, PT/EN, 404 probes) → PR lucafchala/status.lucafchala.com#51, closes #50 after the owner sets the optional secrets

## Done ✅
- 2026-09 ecosystem pass:
  - self-hosted fonts everywhere (they were CSP-blocked by Cloudflare Fonts rewrites);
  - no `'unsafe-inline'` scripts anywhere;
  - shared theme/lang cookies;
  - dash hardened (proxy traversal, open redirect, SW poisoned cache, conflict-safe saves) with validation, 302 links, QR codes and import/export;
  - url list baked into HTML (`/fern` restored);
  - paste `/pgp` complete again;
  - keys with raw `pgp.asc`/`ssh.pub`;
  - proof shows real addresses and is verified by CI;
  - subs rebuilt (XSS, valid `.ics`, editing, calendar);
  - homepage split into HTML/CSS/JS;
  - READMEs and CLAUDE.md everywhere.
- Event PURLs → fotos galleries: piauifut2024, piauifut2025, piauifest2025, mostra2025, isa_16anos, paraty, natal-2024, viagem-familia_2024, ecp_carros, ecp_125_anos. Also `/pgp` → keys, `/portfolio` → fotos, and the `/teste` and `/schor` placeholders removed.
- The shared 404 no longer uses inline `onclick=` handlers or needs CSP hashes (external `404.js`).
- 2026-09 homepage redesign: sections, command palette, a11y contrast.
- keys/proof content and DNS; `/pgp` paste with the real key; now/weblog discontinued; favicon redrawn; READMEs across all repos.
