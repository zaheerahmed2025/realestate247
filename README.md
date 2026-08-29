# Real Estate 24/7

A modern, high-converting, performance-focused real estate landing page and VIP Buyer's List platform. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 4**, **Framer Motion**, and **Prisma ORM with SQLite**.

---

## 🚀 Features

- 💎 **Premium Modern UI**: Sleek dark-mode aesthetic with custom brand tokens, subtle glow effects, cards, and smooth micro-interactions.
- ⚡ **Interactive Scroll & Nav System**:
  - Sticky header with frosted backdrop blur and real-time scroll progress indicator.
  - Active section wayfinding (desktop + mobile menu sync).
  - Responsive full-screen mobile menu with zero layout shifts.
- 📋 **VIP Lead Capture**:
  - Interactive multi-step form with buyer classification and target area tag toggles.
  - Serverless API route (`/api/vip`) with input validation and persistence to SQLite database.
- 🎯 **Conversion Focused**:
  - Deal alert preview card, stats band, audience target cards, visual process timeline, and testimonials.
  - One-click click-to-call and mailto action links.
- 🔍 **SEO & Accessibility**:
  - Full metadata setup, `Plus Jakarta Sans` typography, and `LocalBusiness` JSON-LD schema.
  - Keyboard accessible navigation with `Escape` menu dismiss and screen-reader tags.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4, shadcn/ui primitives, Lucide Icons
- **Animations**: Framer Motion
- **Database**: Prisma ORM with SQLite
- **Forms & Validation**: React Hook Form & Zod

---

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm (or yarn / pnpm)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zaheerahmed2025/realestate247.git
   cd realestate247
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

4. **Initialize Database**:
   Generate Prisma client and push database schema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 GitHub Pages Deployment

This repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) to deploy the Next.js website directly to GitHub Pages.

To enable live website hosting:
1. Open your repository on GitHub: **[zaheerahmed2025/realestate247](https://github.com/zaheerahmed2025/realestate247)**
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The site will automatically build and publish to `https://zaheerahmed2025.github.io/realestate247/`!

---

## 🛠 Available Scripts

- `npm run dev` — Starts local development server
- `npm run build` — Compiles static production build
- `npm run start` — Starts local production server
- `npm run lint` — Runs ESLint code check

---

## 📁 Project Structure

```
├── prisma/
│   └── schema.prisma        # Database schema (VipLead model)
├── public/
│   ├── favicon.svg          # Favicon asset
│   ├── images/              # Optimized property & avatar images
│   ├── robots.txt           # SEO robots directives
│   └── sitemap.xml          # Sitemap index
├── src/
│   ├── app/                 # Next.js App Router routes & layout
│   │   ├── api/vip/         # VIP lead capture endpoint
│   │   ├── globals.css      # Design tokens & custom CSS utilities
│   │   ├── layout.tsx       # Root layout & JSON-LD schema
│   │   └── page.tsx         # Main landing page composition
│   ├── components/
│   │   ├── site/            # Landing page section components
│   │   └── ui/              # Reusable UI primitives (shadcn)
│   └── lib/                 # Database client & helper utilities
├── .env.example             # Example environment setup
└── package.json             # Dependencies & scripts
```

---

## 📜 License

MIT License. Built for **Real Estate 24/7**.
