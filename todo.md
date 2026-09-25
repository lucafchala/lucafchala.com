# TODO — ecosystem follow-ups

_Last updated: 2026-09-25. Each open item is a GitHub issue; this file is the index._

## Open

Everything open needs the owner: a secret, the private key, or a single edit. Each issue has the exact steps and how to verify them.

- [ ] **Web Analytics token:** paste the site token into draft PR lucafchala/lucafchala.com#29, then merge. CI stays red until it's a real 32-hex token. → lucafchala/lucafchala.com#18
- [ ] **Click counts:** a token with Zone › Analytics › Read + the Zone ID as the dash secrets `CF_ANALYTICS_TOKEN` / `CF_ZONE_ID`. The code is merged (dash#32). → lucafchala/dash.lucafchala.com#28
- [ ] **status:** `STATUS_ADMIN_TOKEN` (optional; Turnstile would need a CSP change first) → lucafchala/status.lucafchala.com#50
- [ ] **status-agendador preview builds** fail on every status PR. Turn off "Builds for non-production branches" on that Worker (see status#52).
- [ ] **JavaScript Detections** (optional): the `bot_management` API command is in #18. The Free dashboard can't turn it off.
- [ ] **fotos deploy check** on the next merge to fotos `main` → lucafchala/fotos#189
- [ ] **PGP:** add an @lucafchala.com UID, revoke the tucas.me UIDs, publish WKD → lucafchala/lucafchala.com#19; re-sign the proof statement → lucafchala/proof.lucafchala.com#6

## Done ✅
- 2026-09-25:
  - **homepage status dots work:** they read status's new `/api/resumo` (~1 KB, CORS-open, D1 read only). `/api/painel` had no CORS (status#52, status#53, lucafchala.com#27);
  - **data:** `ibiúna_2025` → fotos gallery and `/review` removed (dash#26, dash#30); `e-mail-me` has a single address (paste#10);
  - **click-count code** in the dash (dash#32; needs the secrets above).
- 2026-09-24 (panel, by the owner + Cowork): status D1 + scheduler + SSL scope (status#49), `DASH_KV`, zone settings, fotos deploy command, 122 merged branches deleted.
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
