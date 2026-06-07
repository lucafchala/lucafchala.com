# lucafchala.com

Personal website and landing page for Luca F. Chala — student, photographer, and amateur radio operator based in São Paulo, Brazil. Hosted on Cloudflare Pages.

## Overview

This repository contains the source for [lucafchala.com](https://lucafchala.com) and its subpages. The site acts as a central hub linking to Luca's photography, amateur radio activity, and contact channels. It also includes a real-time service status dashboard and a set of short URL redirects managed via Cloudflare Pages.

## Features

- **Landing page** — Introduction, links to photography, radio, and contact info
- **Bilingual** — Full Portuguese (Brazil) and English support with client-side language switching
- **Dark / Light mode** — Theme toggle persisted in `localStorage`
- **Service status dashboard** — `status/index.html` polls all subdomains and displays latency + uptime at a glance, auto-refreshing every 60 seconds
- **Short URL redirects** — `_redirects` maps vanity paths to external destinations (social media, photo galleries, videos, tools)
- **Custom 404 page** — Shows the invalid slug and offers navigation options
- **No build step** — Pure HTML, CSS, and vanilla JavaScript; deploy by pushing to git

## Project Structure

```
.
├── index.html          # Main landing page
├── 404.html            # Custom 404 error page
├── transferring.html   # Migration notice for pages moving off omg.lol
├── _redirects          # Cloudflare Pages redirect rules
└── status/
    └── index.html      # Service status monitoring dashboard
```

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, keyframe animations) |
| Scripting | Vanilla JavaScript |
| Fonts | Google Fonts — Cormorant Garamond, JetBrains Mono |
| Hosting | Cloudflare Pages |
| Redirects | Cloudflare Pages `_redirects` file |

## Subdomains

| Subdomain | Purpose |
|---|---|
| [lucafchala.com](https://lucafchala.com) | This site — main landing page |
| [fotos.lucafchala.com](https://fotos.lucafchala.com) | Photography portfolio |
| [radio.lucafchala.com](https://radio.lucafchala.com) | Amateur radio portal |
| [weblog.lucafchala.com](https://weblog.lucafchala.com) | Blog |
| [now.lucafchala.com](https://now.lucafchala.com) | /now page |
| [paste.lucafchala.com](https://paste.lucafchala.com) | Pastebin |
| [url.lucafchala.com](https://url.lucafchala.com) | URL shortener |
| [keys.lucafchala.com](https://keys.lucafchala.com) | SSH / PGP public keys |
| [proof.lucafchala.com](https://proof.lucafchala.com) | Domain ownership proof |
| [status.lucafchala.com](https://status.lucafchala.com) | Service status dashboard |

## Deployment

Cloudflare Pages watches this repository and deploys automatically on every push to the main branch. There is no build command — the files are served as-is.

To make changes locally:

```bash
git clone https://github.com/lucafchala/lucafchala.com.git
cd lucafchala.com
# edit files
git add .
git commit -m "your message"
git push
```

Cloudflare Pages will pick up the push and deploy within seconds.

## Redirects

The `_redirects` file uses [Cloudflare Pages redirect syntax](https://developers.cloudflare.com/pages/configuration/redirects/). All rules use `301` permanent redirects. Categories include:

- Social media shortcuts (Instagram, Signal, Simplex, Buy Me a Coffee)
- Event photo galleries (Google Drive folders)
- Video downloads and YouTube links
- External tools and services

## License

All rights reserved. The content and design of this site belong to Luca F. Chala.
