# Daily Arc · 毎日の弧

<p align="center">
  <img src="logo.png" alt="Daily Arc" width="120"/>
</p>

> *A gamified daily quest board. Assign your missions. Complete them by EOD. Rank up.*

**Live App →** https://farman024.github.io/Daily-Arc/

---

## What It Is

Daily Arc is a Naruto-themed personal quest system built for people who take their daily output seriously. Assign quests across Trading, Building, Personal, and Health — close them before end of day. Every completed quest earns XP. XP builds your rank. Rank reflects discipline.

Built with a Naruto / cyber-ninja aesthetic — dark/light themes, animated arc rings, and a Supabase backend for persistent progress across devices.

---

## Features

### Core Loop
- **Quest Board** — Log daily quests across 4 categories: Trading (15 XP), Building (12 XP), Personal (10 XP), Health (10 XP)
- **Arc Cards** — Circular SVG progress rings showing completion percentage per category and overall TODAY
- **Inline Edit** — Edit quest text without leaving the list; Enter saves, Escape cancels
- **Complete & Delete** — Check off quests for XP or delete them (XP adjusted)

### Progression
- **9 Ranks** — Genin → Chunin → Jonin → ANBU → Kage → Six Paths → Otsutsuki → Infinite Tsukuyomi → True Shinobi
- **XP Bar** — Animated progress bar with tier-colored gradient toward next rank
- **Rank Roadmap** — Collapsible accordion showing all ranks with achieved/current/future states; click any rank to open a certificate
- **Level-Up Overlay** — Full-screen "RANK UP!" animation with audio when you rank up
- **Rank Certificates** — Downloadable PDF certificate for each achieved rank

### Streak & Stats
- **Streak Tracker** — Real streak calculated from all completed quests across dates; displayed with gold glow in player card
- **Stats Row** — Current streak, total XP, quests done today
- **Player Card** — Profile badge (with custom photo upload), rank label, XP bar, stats — all in one header card

### Monthly Report
- **Stats Grid** — XP earned, quests done, streak, current rank for the selected month
- **Category Breakdown** — Per-category XP and completion count
- **Best Day** — Highest quest count in a single day that month
- **Victory Log** — All completed tasks grouped by category with checkmarks
- **Share** — WhatsApp, Telegram, Stats Image (PNG), Copy Text, Victory PDF

### Themes
- **Dark Mode** (default) — Near-black background with cyan accents
- **Light Mode** — Light grey-blue background
- Persisted to localStorage; toggle from top bar

### Data & Sync
- **Supabase Backend** — Progress syncs across devices via cloud database
- **Real Streak Calculation** — Fetches all completed tasks across dates, counts consecutive days
- **Missed Task Rollover** — Incomplete quests auto-roll to today
- **Profile** — Custom display name and profile photo (upload or URL), stored in cloud

### Authentication
- Single-user login gate (username + password, SHA-256 hashed)
- Session persisted to localStorage

### Export
- **Stats Image** — Download report card as PNG (html2canvas)
- **Victory PDF** — Full victory log with dates and categories (jsPDF)
- **Certificate PDF** — Landscape A4 certificate for each rank
- **Clipboard** — Copy formatted report text
- **WhatsApp / Telegram** — Share report via app deep links

### Audio
- Web Audio API tones (no external files)
- Add quest (two-tone), complete quest (three-tone ascending), level-up (4-note arpeggio)

### PWA
- Installable on mobile — `display: standalone`, offline caching via Service Worker
- `apple-touch-icon` and theme-color meta for iOS home screen

### UI Details
- **Toast Notifications** — Bottom-center status messages
- **Photo Viewer** — Full-screen profile photo overlay
- **Scrollbar Customization** — Thin scrollbar matching theme
- **Grid Background** — Fixed 40px grid overlay
- **Orb Effects** — 3 blurred gradient orbs (purple, cyan, gold)
- **Responsive** — Adapts at 520px breakpoint for mobile

---

## Rank Roadmap

| Rank | XP Range |
|------|----------|
| Genin | 0 – 100 XP |
| Chunin | 100 – 300 XP |
| Jonin | 300 – 600 XP |
| ANBU | 600 – 1,000 XP |
| Kage | 1,000 – 1,500 XP |
| Six Paths | 1,500 – 2,500 XP |
| Otsutsuki | 2,500 – 5,000 XP |
| Infinite Tsukuyomi | 5,000 – 10,000 XP |
| True Shinobi | 10,000+ XP |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML + CSS + JavaScript |
| Backend | Supabase (PostgreSQL) |
| PDF | jsPDF |
| Image Export | html2canvas |
| Fonts | Rajdhani, Orbitron, Noto Sans JP |
| Icons | Inline SVG |
| Auth | SHA-256 (single-user) |
| Deployment | GitHub Pages |
| PWA | Service Worker + Web Manifest |

---

## File Structure

```
daily-arc/
├── index.html      ← Full app (single HTML + CSS + JS)
├── sw.js           ← Service Worker (offline cache, network-first navigations)
├── manifest.json   ← PWA manifest
├── logo.png        ← Brand logo (1254x1254)
├── icon-192.png    ← App icon 192x192
├── icon-512.png    ← App icon 512x512
└── README.md       ← This file
```

---

## Built By

**Farman J · AI Generalist** — Bangalore, India  
Solo build. Phone-first. Shipped.
