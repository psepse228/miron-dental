# Miron Dentistry — Website Design Spec
Date: 2026-06-22

## Overview
Sample website for Miron Dentistry — a premium dental clinic in Uzbekistan. Built for client approval before final content and integrations are added. Russian language throughout.

## Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v3
- Framer Motion (animations)
- React Router DOM v7
- Lucide React (icons)
- Google Fonts: Cormorant Garamond + Inter

## Pages
| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, stats, services teaser, about teaser, CTA |
| `/services` | Услуги | Service cards |
| `/about` | О нас | Clinic story, values, equipment |
| `/doctors` | Врачи | Doctor cards |
| `/booking` | Запись | Appointment form (UI only — Telegram bot added later) |

## Design System

### Colors
| Token | Hex | Usage |
|---|---|---|
| White | `#FFFFFF` | Backgrounds |
| Off-white | `#F8F6F2` | Alternating sections |
| Gold | `#C4A04A` | Accents, buttons, borders |
| Charcoal | `#1C1C1E` | Navbar, headings, footer |
| Mid-gray | `#6B7280` | Body text, subtitles |

### Typography
- Headings: Cormorant Garamond (serif, italic weight for elegance)
- Body/UI: Inter (clean, readable)

### Animations
- Hero: fade-in + subtle y-drift on load
- Sections: whileInView fade-in-up (once: true)
- Page transitions: opacity fade between routes

## Components
```
src/
  components/
    ui/          ← shadcn-style primitives + 21st dev drops
    Navbar.tsx   ← sticky, white bg + gold accent on scroll
    Footer.tsx   ← dark charcoal bg
  pages/
    Home.tsx
    Services.tsx
    About.tsx
    Doctors.tsx
    Booking.tsx
  lib/
    utils.ts
```

## Hero Section
- Full-screen video background (`/public/hero.mp4` — Kling-generated, placeholder until delivered)
- Poster image fallback while video loads
- Dark overlay (opacity 40%) so text is readable
- H1: clinic name in Cormorant Garamond
- Subheading: tagline in Inter
- Two buttons: Primary gold "Записаться на приём" + Secondary outline "Наши услуги"

## Booking Form (Placeholder)
Fields: Имя, Телефон, Услуга (select), Дата, Время, Комментарий
Submit button: UI only — no action. TODO: wire to Telegram bot.

## Out of Scope (this phase)
- Real backend / form submission
- CMS / content management
- SEO meta tags (add after content confirmed)
- Bilingual support
- Authentication
