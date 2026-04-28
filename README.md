# Books for Soldiers — Landing System

A scalable React + Vite landing-page system built to support hundreds of independent marketing pages.
This example implements the “Books for Soldiers” initiative — a campaign to send books to Ukrainian defenders.

## 🚀 Features

- Supports hundreds of independent landings, each with its own HTML entry.
- Built with React 19 + TypeScript + Vite.
- Styled using TailwindCSS.
- Scroll-triggered animations via IntersectionObserver.
- Integrated Facebook Pixel (Lead event) on CTA click.
- Fully responsive for mobile, tablet, and desktop.

## Project Structure

```
project-root/
├─ src/
│  ├─ core/                           # Shared, reusable logic
│  │  ├─ components/
│  │  │  ├─ AdvantageItem.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Hero.tsx
│  │  │  ├─ Navigation.tsx
│  │  │  ├─ ReviewItem.tsx
│  │  │  └─ ScrollToTopButton.tsx
│  │  └─ hooks/
│  │     └─ useScrollReveal.ts
│  ├─ landings/
│  │  └─ books_for_soldiers/
│  │     ├─ sections/                 # Landing sections
│  │     ├─ data/                     # JSON data (advantages, contacts, reviews)
│  │     ├─ images/                   # Landing images
│  │     ├─ index.html                # Landing entry point
│  │     ├─ main.tsx                  # React entry
│  │     └─ LandingBooks.tsx
│  ├─ index.css                        # Global styles (Tailwind + animations)
│  └─ main.tsx                         # Root entry (for development)
├─ vite.config.ts                      # Multi-landing Vite configuration
├─ package.json
├─ tsconfig.json
└─ README.md

```

## How to Run

1. git clone https://github.com/merscarlett/landing-system.git
2. cd landing-system
3. npm install
4. npm run dev

## Deploy to Vercel

The project keeps each landing as an independent entry under `src/landings/<landing-name>/index.html`.
Vercel uses `vercel.json` to build the project into the root `dist/` directory and route clean URLs:

- `/` opens the current default landing: `books_for_soldiers`
- `/landings/books_for_soldiers` opens the landing directly

For additional landings, add a new folder inside `src/landings/` with its own `index.html` and entry file.
Vite will include it in the production build automatically.

## Preview

### Hero Section

![Hero Section](https://github.com/user-attachments/assets/7a497a2d-2b72-4d17-a4c1-2eae6e5a7c4b)

### Advantages Section

![Advantages Section](https://github.com/user-attachments/assets/7c4a28ef-72b1-42bb-94f0-2bbf95d5b9be)

### Reviews & Footer Section

![Reviews and Footer](https://github.com/user-attachments/assets/a625e739-0bfb-428e-b304-2c4532455d79)
