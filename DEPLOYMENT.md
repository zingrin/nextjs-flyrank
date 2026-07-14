Deployment to Vercel

1. Create a Git repository and push the project (see README for commands).
2. Import the repository in Vercel (https://vercel.com/new).
3. Set environment variables in Vercel dashboard under Project Settings > Environment Variables. Example vars:
   - NODE_ENV (production)
   - NEXT_PUBLIC_API_URL
   - Any API keys or secrets (do NOT commit these to the repo)
4. Deploy — Vercel will run `npm run build` and serve the app.

Notes:

- For server-side secrets, add regular env vars (not prefixed with NEXT*PUBLIC*). For client-exposed vars, prefix with NEXT*PUBLIC*.
- If you need preview or staging environments, configure their env vars separately in Vercel.
