# Next.js Foundation App (App Router + TypeScript + Tailwind)

This repository contains the Foundation phase for a production-ready Next.js application using the App Router, TypeScript, and Tailwind CSS.

## What is included

- Next.js App Router structure (app/)
- TypeScript configuration
- Tailwind CSS configured with reusable design tokens
- ESLint configuration
- Root layout with Navbar and Footer
- Pages: Home, About, Services, Contact, Dashboard, Health, 404
- Responsive navigation (mobile-first)

## Local development

1. Install dependencies

   npm install

2. Run development server

   npm run dev

3. Build

   npm run build

4. Start production server

   npm run start

## Environment Variables

Create a `.env.local` file at the project root for environment variables. Example values live in `.env.example` (do not commit secrets).

Example:

NODE_ENV=development
NEXT_PUBLIC_API_URL=https://api.example.com

Note: Do not store secrets in the repository. Use Vercel's Environment Variables settings for production secrets.

## Deployment (Vercel)

1. Push the project to a Git provider (GitHub, GitLab, Bitbucket).
2. Import the repo in Vercel and select the project.
3. Ensure Environment Variables are set in Vercel dashboard (e.g. NODE_ENV, API keys).
4. Vercel will detect Next.js and build automatically.

## Git commands to push the project

Initialize repository and push to remote (example for GitHub):

git init
git add .
git commit -m "chore: foundation - nextjs app router + typescript + tailwind\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
git branch -M main
git remote add origin <REPO_URL>
git push -u origin main

Replace `<REPO_URL>` with your repository URL.

## Checklist (Foundations Phase)

- [x] Next.js App Router structure with `app/` directory
- [x] TypeScript configured
- [x] Tailwind CSS configured and design tokens provided
- [x] ESLint configured
- [x] Root layout with Navbar and Footer
- [x] Pages: Home, About, Services, Contact, Dashboard, Health, 404
- [x] Responsive navigation (mobile/tablet/desktop)
- [x] Health page implemented as a Server Component fetching mock async data
- [x] No secrets in repository; `.env.local` used for env vars
- [x] Deployment instructions for Vercel included

If you'd like, next steps can include:

- Adding authentication (NextAuth.js)
- Adding example API routes and tests
- Connecting to a database and creating real health checks
- Setting up CI for lint/build
