# GitHub Info — Vibe Coding Colosseum Sponsor Deck

## Repository
- **Name:** vibecodingcolosseum-sponsor-deck
- **Owner:** Oruga420
- **URL:** https://github.com/Oruga420/vibecodingcolosseum-sponsor-deck
- **Stack:** Next.js 16 + React 19 + TypeScript + Three.js

## Change Log

### PR #1 — Fix Light Mode (2026-02-16)
- Fixed all hardcoded dark-mode-only backgrounds in `.card`, `.nav .btn`, `.tag`
- Introduced new CSS variable `--surface-solid` for glassmorphism card/button backgrounds
- Added proper light mode overlay gradient (white-based instead of black-based)
- Fixed `.dot` navigation indicators to use `--dot-border` variable
- Added `backdrop-filter: blur(12px)` to cards, buttons, and tag for frosted glass effect
- Improved text contrast: `--text` bumped to 95% opacity in both themes
- Added light mode logo shadow override
- Added smooth transitions to dots and buttons
