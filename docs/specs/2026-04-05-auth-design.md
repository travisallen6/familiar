# Familiar — Auth Design Spec

**Date:** 2026-04-05
**Milestone:** 2 — Auth
**Testable Outcome:** User can sign up, log in, and log out via better-auth

---

## 1. Architecture & File Structure

```
src/
  app/
    (auth)/
      layout.tsx          # Shell: ambient blobs, logotype, footer pulse
      sign-in/
        page.tsx          # Sign-in form
      sign-up/
        page.tsx          # Sign-up form
    dashboard/
      page.tsx            # Placeholder protected page
    page.tsx              # Redirects to /sign-in
    proxy.ts              # Route protection (Next.js 16)
  lib/
    auth/
      server.ts           # better-auth instance (Drizzle adapter + email/password)
      client.ts           # better-auth browser client
    db/
      schema.ts           # Replace placeholder users table with better-auth schema
  app/
    api/
      auth/
        [...all]/
          route.ts        # better-auth catch-all API handler
```

The placeholder `users` table in `schema.ts` is replaced by better-auth's managed tables: `user`, `session`, `account`, and `verification`. These are generated via the Drizzle adapter — no manual schema writing required.

---

## 2. better-auth Configuration

`lib/auth/server.ts` initialises the better-auth instance once with:
- **Drizzle adapter** pointed at the existing `src/lib/db/index.ts` connection
- **Email/password plugin** — email verification disabled (no email infra in MVP)
- `trustedOrigins` sourced from `BETTER_AUTH_URL` env var

`lib/auth/client.ts` exports a `createAuthClient()` instance used by Client Components to call `signIn.email()` and `signUp.email()`.

**Required environment variables:**
- `BETTER_AUTH_SECRET` — random secret for signing sessions
- `BETTER_AUTH_URL` — base URL (e.g. `http://localhost:3000`)

Both are added to `.env.local` (local) and Vercel environment variables (production).

---

## 3. UI

### `(auth)/layout.tsx` — Shared shell (Server Component)

Renders the full-screen dark background with:
- Radial gradient background (`#0d0d1a`)
- Ambient glow blobs (violet top-left, teal bottom-right, blurred)
- `Familiar` logotype in Spectral italic at large size with arcane text-shadow glow
- Teal pulse dot + *"The Familiar awaits your presence..."* footer (Spectral italic, subtle opacity)
- Decorative SVG corner brackets
- `{children}` slot for the form

Spectral font added to the existing `next/font/google` setup in `app/layout.tsx`.

### `sign-in/page.tsx` — Client Component

- Email + password inputs (pill-shaped `rounded-full`, teal border glow on focus)
- "Sign In" button (violet gradient, `rounded-full`, box-shadow glow)
- "Create Account" link → `/sign-up`
- On success: redirect to `/dashboard`
- Inline error display below the form on failure

### `sign-up/page.tsx` — Client Component

- Email + password inputs (same style)
- "Create Account" button
- "Sign in" link → `/sign-in`
- On success: redirect to `/dashboard`
- Inline error display on failure

### `dashboard/page.tsx` — Placeholder (Server Component)

Minimal authenticated page. Shows the user's email and a sign-out button. Clicking sign-out calls `signOut()` from the auth client and redirects to `/sign-in`. Redirected to from both auth pages on success. Protected by `proxy.ts`.

---

## 4. Route Protection

`proxy.ts` (Next.js 16's replacement for `middleware.ts`) handles two cases:
- Unauthenticated request to `/dashboard/*` → redirect to `/sign-in`
- Authenticated request to `/sign-in` or `/sign-up` → redirect to `/dashboard`

Session is checked via better-auth's session helper using the request cookies.

---

## 5. Database Migration

The placeholder `users` table is removed. better-auth's Drizzle adapter generates its own schema. A new Drizzle migration is generated and run before testing.

---

## 6. Decisions & Constraints

- **Email verification disabled** — no email sending infrastructure in MVP; revisit when Resend or similar is added
- **No OAuth** — email/password only for v1
- **No password reset flow** — out of scope for this milestone; the "Forgot password?" link is omitted from the UI entirely
- **No name field on sign-up** — better-auth's `user` table has a `name` column but we won't collect it at sign-up; it will be set during character creation (milestone 5)
