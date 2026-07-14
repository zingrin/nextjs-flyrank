# 🚀 Quick Start Guide

## Installation & Setup (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

---

## Project Layout

```
app/
├── page.tsx              ← Home page (/)
├── layout.tsx            ← Root layout with Navbar & Footer
├── not-found.tsx         ← 404 page
├── about/page.tsx        ← /about
├── services/page.tsx     ← /services
├── contact/page.tsx      ← /contact
├── dashboard/page.tsx    ← /dashboard
└── health/page.tsx       ← /health (Server Component)

components/
├── Navbar.tsx            ← Responsive nav (Client Component)
└── Footer.tsx            ← Footer (Server Component)

styles/
└── globals.css           ← Global styles + design tokens
```

---

## Available Routes

| Route | File | Type |
|-------|------|------|
| `/` | `app/page.tsx` | Home |
| `/about` | `app/about/page.tsx` | About |
| `/services` | `app/services/page.tsx` | Services |
| `/contact` | `app/contact/page.tsx` | Contact |
| `/dashboard` | `app/dashboard/page.tsx` | Dashboard |
| `/health` | `app/health/page.tsx` | Health Check |
| `/not-found` | `app/not-found.tsx` | 404 |

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Building
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint

# Clean up
rm -rf .next         # Remove build cache
rm -rf node_modules  # Remove dependencies (then npm install)
```

---

## Environment Setup

Create `.env.local` file at project root:

```
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Do not commit `.env.local`** (already in `.gitignore`)

---

## Deploy to Vercel

### 1. Initialize Git
```bash
git init
git add .
git commit -m "chore: phase-foundations - nextjs app router + typescript + tailwind"
git branch -M main
git remote add origin <your-github-url>
git push -u origin main
```

### 2. Deploy
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework: **Next.js** (auto-selected)
4. Click **Deploy**

### 3. Add Environment Variables
In Vercel Dashboard:
- Settings → Environment Variables
- Add `NODE_ENV=production`
- Redeploy

---

## Design System

### Colors
- **Primary Blue:** `#00aaff` (use `text-primary-500`)
- **Neutral Gray:** `#1f2937` (use `text-neutral-900`)
- **Background:** `#f9fafb` (use `bg-neutral-50`)

### Components
- `.container` — Centered max-width container
- `.placeholder-card` — Card with shadow and border

### Typography
- **Heading 1:** `text-3xl font-bold`
- **Heading 2:** `text-xl font-semibold`
- **Body:** `text-neutral-700`

---

## Project Structure Summary

| Folder | Purpose |
|--------|---------|
| `app/` | Next.js App Router pages |
| `components/` | Reusable React components |
| `styles/` | Global CSS and Tailwind |
| `public/` | Static assets (favicon, etc.) |

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.cjs` | Tailwind CSS design tokens |
| `postcss.config.cjs` | PostCSS configuration |
| `.eslintrc.json` | ESLint rules |
| `next.config.js` | Next.js configuration |
| `.env.example` | Environment template |

---

## Responsive Breakpoints

| Device | Width | Prefix |
|--------|-------|--------|
| Mobile | 375px | (none) |
| Tablet | 768px | `md:` |
| Desktop | 1024px | `lg:` |
| Large | 1280px | `xl:` |

Example:
```tsx
// Mobile: 1 column, Tablet+: 2 columns, Desktop+: 3 columns
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
```

---

## Component Patterns

### Server Component (Default)
```tsx
// app/about/page.tsx
export default function About() {
  return <div>Server component</div>;
}
```

### Client Component (Interactive)
```tsx
'use client';  // ← Add this for interactivity
import { useState } from 'react';

export default function Component() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Server Component with Async Data
```tsx
// app/health/page.tsx
export default async function Health() {
  const data = await fetchData();
  return <div>{data.status}</div>;
}
```

---

## Styling Examples

### Using Tailwind Classes
```tsx
<div className="bg-white rounded-md shadow-md p-6 text-center">
  <h1 className="text-2xl font-bold text-primary-500">Hello</h1>
  <p className="text-neutral-600 mt-2">Subtitle</p>
</div>
```

### Using Global CSS Classes
```tsx
<div className="container placeholder-card">
  <h2>Card Title</h2>
</div>
```

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### CSS Not Loading
```bash
# Verify import in app/layout.tsx
import '../styles/globals.css';

# Ensure tailwind.config.cjs has correct content paths
content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
```

---

## File Changes Checklist

When adding new pages/routes:

- [ ] Create file in `app/path/page.tsx`
- [ ] Add responsive layout
- [ ] Add link in `components/Navbar.tsx`
- [ ] Test at breakpoints: 375px, 768px, 1024px
- [ ] Run `npm run build`
- [ ] Run `npm run lint`
- [ ] Commit to git

---

## Performance Tips

1. **Use Server Components by default** — only use `'use client'` when needed
2. **Optimize images** — use Next.js `Image` component
3. **Code splitting** — dynamic imports for heavy components
4. **Environment variables** — use `NEXT_PUBLIC_` only for client-safe values
5. **Caching** — leverage Next.js ISR and static generation

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

**Last Updated:** 2026-07-12  
**Next.js Version:** 16.2.10
