# TODO — ecosystem follow-ups

_Last updated: 2026-09-24. Each open item is a GitHub issue; this file is the index._

## Open

Everything open needs the owner: a dashboard action, the private key, or a decision. Each issue has a step-by-step checklist with how to verify it.

### Cloudflare dashboard
- [ ] status: D1 `STATUS_DB` (turns on the homepage dots and 90-day bars), scheduler Worker, SSL scope on the token, fotos Workers Builds → lucafchala/status.lucafchala.com#49
- [ ] Zone: JavaScript Detections off, Web Analytics only on the apex, Rocket Loader off, Cloudflare Fonts off → lucafchala/lucafchala.com#18
- [ ] Bind `DASH_KV` for the login rate limit → lucafchala/dash.lucafchala.com#27
- [ ] status: `STATUS_ADMIN_TOKEN` (Turnstile optional, needs a code change first) → lucafchala/status.lucafchala.com#50

### Private key
- [ ] PGP key: add an @lucafchala.com UID, revoke the tucas.me UIDs, publish WKD → lucafchala/lucafchala.com#19
- [ ] Re-sign the proof statement (link keys.lucafchala.com, move the phone number) → lucafchala/proof.lucafchala.com#6

### Decisions / content
- [ ] `/review` points at a deleted Google Form (found by the weekly link check) → lucafchala/dash.lucafchala.com#30
- [ ] Repoint the remaining Cloudspot / Drive event links → lucafchala/dash.lucafchala.com#26
- [ ] `e-mail-me` paste: keep, trim or replace the addresses → lucafchala/paste.lucafchala.com#10
- [ ] Click counts for short links: want them? → lucafchala/dash.lucafchala.com#28

## Done ✅
- 2026-09-24 (code issues):
  - weekly PURL destination check (dash#29, opens/closes "Links quebrados");
  - video-project pastes became generated `type: "links"` pages (paste#11);
  - pays encrypted backup + price history (pays#3);
  - smoke test that runs, live status dots, `security.txt` renewal check (lucafchala.com#25, proof#7).
- 2026-09-24:
  - homepage live status dots, active once status has D1 (#21);
  - `security.txt` renewed to 2027-09-01, with a monthly CI check (#20);
  - `smoke-test.yml` now runs on push/daily (#24).
- 2026-09-24: all eight PRs of the pass merged in order and verified in production (lucafchala/lucafchala.com#17): 39/39 route checks, 13/13 services up on status, plus the top-bar overflow at 390 px (lucafchala/lucafchala.com#22).
- status phase 2 (lucafchala/status.lucafchala.com#51): reliable alerts, double opt-in, PT/EN, shared prefs, 404 probes, self-check marker restored.
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
