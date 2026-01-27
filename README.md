# LabsMac

Landing page for the LabsMac materials science lab. Built as a Next.js App Router app with a focused, component-driven UI.

## Tech stack
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui + Radix UI + lucide-react
- react-hook-form + zod

## Getting started
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts
- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - run ESLint

## Project structure
- `src/app` - routes, layout, and global styles
- `src/components` - app components
- `src/components/ui` - shadcn/ui components
- `src/hooks` - shared React hooks
- `src/lib` - utilities and shared logic
- `public` - static assets
- `prompts` - LLM usage rules

## LLM workflow
All LLMs must follow the rules in `prompts/STRATEGY.md` and the relevant domain rules:
- Frontend: `prompts/frontend.md`
- Backend: `prompts/backend.md`

If a change does not fit the existing rules, add the minimal rule update to the prompts folder first.

## Notes
- UI is Tailwind-first and reuses shadcn/ui building blocks.
- Keep components small and accessible.
