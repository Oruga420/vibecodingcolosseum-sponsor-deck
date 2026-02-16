# GitHub Info — Vibe Coding Colosseum Sponsor Deck

## Repository
- **Name:** vibecodingcolosseum-sponsor-deck
- **Owner:** Oruga420
- **URL:** https://github.com/Oruga420/vibecodingcolosseum-sponsor-deck
- **Stack:** Next.js 16 + React 19 + TypeScript + Three.js
- **Default Branch:** master

## Change Log

### PR #1 — Fix Light Mode (2026-02-16) — CLOSED
- Closed after review: text wasn't dark enough in light mode

### PR #2 — Complete Light Mode v2 (2026-02-16) — CLOSED
- Closed after review: overlay z-index was covering text content

### PR #3 — Complete Light Mode v3 (2026-02-16) — OPEN
- All fixes from PR #1 and #2 plus overlay z-index fix
- Replace all hardcoded dark-mode-only backgrounds with CSS variables
- New `--surface-solid` and `--dot-border` CSS tokens
- Fix z-index stacking: bg(0) → overlay(1) → dots(2) → slide(3) → nav(4)
- Light mode overlay gradient (reduced opacity, no longer covers text)
- Strong text hierarchy in light mode:
  - h1: `#0a0a0a` (pure black)
  - KPI values: `#111111` (strong black)
  - h2: `#2a2a2a` (dark charcoal)
  - Bullets: `#333333` (dark gray)
  - KPI labels: `#666666` (medium gray)
  - Card h3: `#888888` (soft gray)
- `backdrop-filter: blur(12px)` on cards, buttons, and tags
- Light mode logo shadow override
- Smooth transitions on dots and buttons
