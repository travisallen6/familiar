# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # ESLint
pnpm test         # Run tests (vitest)
pnpm test:watch   # Run tests in watch mode

# Database (requires .env.local with DATABASE_URL)
pnpm db:generate  # Generate migration from schema changes
pnpm db:migrate   # Apply migrations
pnpm db:push      # Push schema directly (dev only)
pnpm db:studio    # Open Drizzle Studio
```

## Local Development Setup

Requires Docker for the database:

```bash
docker compose up -d   # Start PostgreSQL on port 5432
```

Copy `.env.example` to `.env.local` and fill in:
- `DATABASE_URL` — defaults to `postgresql://familiar:familiar@localhost:5432/familiar`
- `BETTER_AUTH_SECRET` — any random secret string
- `BETTER_AUTH_URL` — `http://localhost:3000` for local dev

## Architecture

**Next.js 16 App Router** with the following structure:

- `src/app/(auth)/` — Route group for sign-in/sign-up pages (unauthenticated)
- `src/app/dashboard/` — Protected pages requiring a session
- `src/app/api/auth/[...all]/` — better-auth handler (all auth API routes)
- `src/lib/auth/server.ts` — Server-side `auth` instance (better-auth + drizzle adapter)
- `src/lib/auth/client.ts` — Client-side auth helpers
- `src/lib/db/` — Drizzle ORM setup; `schema.ts` defines all tables
- `src/proxy.ts` — Route protection logic (Next.js 16 uses `proxy.ts` instead of `middleware.ts`)
- `src/components/ui/` — shadcn/ui components

**Auth:** better-auth with email/password, backed by Drizzle/PostgreSQL. The schema in `src/lib/db/schema.ts` includes `user`, `session`, `account`, and `verification` tables.

**Database:** PostgreSQL with pgvector (via Docker). Drizzle Kit manages migrations stored in `src/lib/db/migrations/`.

**Routing guard:** `src/proxy.ts` intercepts `/dashboard/*`, `/sign-in`, and `/sign-up` — redirecting unauthenticated users away from protected routes and authenticated users away from auth pages.

**Testing:** Vitest with `vite-tsconfig-paths` so `@/` path aliases work in tests.

## Testing

**UI/E2E Testing:** Always use the playwright-cli skill to test any new UI features or changes