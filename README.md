# ENSOH website prototype

Visual redesign prototype of [ensohcoltd.com](https://www.ensohcoltd.com/) (currently a Google Site), styled in a clean, airy manner inspired by modern fintech marketing sites (large typography, soft neutrals, vermillion accent from the Enso mark, generous imagery). **Not affiliated with Wealthsimple**; no login/account UI.

## Pages

| File | Content |
|------|---------|
| `index.html` | Hero, mission/vision, featured services, Taiwan CTA |
| `services.html` | Four service lines from the current site + Fullness product categories |
| `partners.html` | Partner cards (expandable list) |
| `about.html` | About copy from the current site |
| `contact.html` | Email + Taipei / Tainan addresses |

## Languages

Nav switcher: **EN / 日本語 / 繁中**. Choice is stored in `localStorage` (`ensoh-lang`).

- **English corporate copy**: taken verbatim from ensohcoltd.com where available.
- **Fullness product category lines (JA)**: taken verbatim from [fullness.ne.jp](https://www.fullness.ne.jp/) / the product grid image on the Ensoh services page.
- **Partner facts**: summarized only from each partner’s public site (see below).
- **Other JA / zh-Hant Ensoh corporate strings**: **machine-translated** for this prototype — please have a native speaker review before production use (marked in `assets/js/i18n.js` header).

## Content reused from ensohcoltd.com

- Company name ENSOH; tagline “We PROVIDE Keys for Success”
- Mission & Vision three statements
- About page paragraphs
- Services: Japanese Home Accessories, Delivery Robots (JSP), MIIDEL, Storage (Kongo)
- Contact: `info@ensohcoltd.com`, Taipei head office, Tainan branch
- Brand images: ensō logo, Fullness product collage, JSP robot, MIIDEL banner, storage photos

### Gaps / placeholders

- No phone numbers or business hours on the current site → omitted
- No testimonials / client logos / awards claimed for ENSOH → none invented
- JSP Solution & Kongo appear under Services (as on the current site) but are not yet added as full Partner cards (Louis’s partner list so far: Fullness, Somaniks, COQ, MIIDEL, NIN)

## Partners (facts from their sites)

1. **Fullness Co., Ltd.** — https://www.fullness.ne.jp/ — Curtain rails, blinds, partitions; Ageo, Saitama; est. 1985  
2. **SOMANIKS (Toyo Resin)** — https://somaniks.jp/ — Medical microcone patches for pain (Somacept, Somareson, etc.)  
3. **COQ Textile / COQ SAPPORO** — https://coq-textile.jp/ — Ethical lifestyle complex by Kanako Kajihara (hotel, restaurant, textile shop), Sapporo  
4. **MIIDEL (Triart Inc.)** — https://miidel.com/ — Drawing/document comparison software  
5. **NIN Co., Ltd. (D-CORE)** — https://nin-japan.co.jp/ (JP) / https://nin-japan.co.jp/en/ (EN) — Massage chairs; Tokyo; one partner, bilingual sites  

Partner image sources: `assets/images/partners/CREDITS.txt`

## Stock photos

Free Unsplash / Pexels images used for hero and section atmosphere only (not presented as ENSOH staff or clients). See `assets/images/stock/CREDITS.txt`.

## Design choices

- **Colors**: warm paper `#F5F3EF`, near-black `#1C1B1B`, muted purple-gray text `#5F5974`, accent vermillion `#C41E3A` (from ensō mark)
- **Fonts**: Fraunces (display, Latin) + Inter; Noto Sans/Serif JP & TC for CJK
- **Layout**: sticky minimal nav, large hero with photo, rounded cards, alternating visual bands, no sign-in

## Local preview

Open `index.html` in a browser, or:

```bash
cd /workspace/apps/ensoh-site && python3 -m http.server 8765
```

## Screenshots

- `preview-desktop.png` — full page ~1280px
- `preview-mobile.png` — ~390px
- `preview-hero.png` — above-the-fold desktop
- `preview-hero-en.png` / `preview-hero-ja.png` / `preview-hero-zh.png` — hero in each language
