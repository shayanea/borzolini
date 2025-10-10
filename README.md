# Borzolini

Pet healthcare platform with AI recommendations, vet scheduling, and clinic ratings. Named after Borzolini.

## What it does

- AI-powered health recommendations and care tips
- Appointment scheduling with veterinary specialists
- Video consultations
- Clinic ratings and reviews

Started this because finding a good vet for Borzolini was harder than it should be. Most platforms don't specialize in pet care or provide breed-specific guidance.

## Stack

- Next.js 15 (App Router)
- TypeScript (strict mode, because we're not savages)
- Tailwind CSS 4.0
- Framer Motion for animations
- Supabase for backend (database setup in separate repo)
- pnpm (required)

## Setup

```bash
git clone https://github.com/shayanea/borzolini.git
cd borzolini/web
pnpm install
pnpm dev
```

Open http://localhost:3000

### Scripts

```bash
pnpm dev         # dev server with Turbopack
pnpm build       # production build
pnpm start       # production server
pnpm type-check  # TypeScript validation
```

## Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/          # Reusable components
│   └── sections/    # Page sections
├── lib/             # Utilities
└── types/           # TypeScript types
```

## Design

Colors:

- Primary: `#14213d` (navy)
- Accent: `#fca311` (orange)
- Success: `#059669` (green)

Font: Inter (via next/font)

## Docker

See `DOCKER.md` for containerized deployment options.

## Deployment

Currently deploying to Vercel:

```bash
vercel --prod
```

For manual deployment:

```bash
pnpm build && pnpm start
```

## Commits

Using conventional commits via husky pre-commit hooks:

- `feat:` new features
- `fix:` bug fixes
- `refactor:` code improvements
- `docs:` documentation

## TODO

- [ ] Video consultation feature
- [ ] Clinic rating system
- [ ] Mobile app (React Native)
- [ ] i18n support (messages/ folder ready)

## Contact

hello@borzolini.com
