# AI Agent Guidelines - LabsMac

Essential guidelines for AI agents working on the LabsMac codebase.

## Project Overview

**Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS v4  
**Design System:** shadcn/ui (Radix UI + Tailwind)  
**Project Structure:**
```
app/              # Next.js App Router pages
components/       # React components
  ├── Header.tsx
  ├── Logo.tsx
  └── ui/         # shadcn/ui components
hooks/            # Custom React hooks
lib/              # Utilities
public/           # Static assets
```

## Code Standards

### TypeScript
- Always use explicit types
- Define interfaces/types for all component props
- Use Next.js types when appropriate (`NextPage`, `Metadata`)

### React Components
- Prefer named functions: `export default function ComponentName()`
- Use functional components with hooks
- Add `"use client"` at top for client components
- Type all props with TypeScript interfaces


### Styling (Tailwind CSS)
- Use Tailwind CSS for all styling
- Use `cn()` from `@/lib/utils` for class merging
- Support dark mode with `dark:` classes when appropriate

### Naming Conventions
- **Components:** PascalCase (`Header.tsx`, `Logo.tsx`)
- **Hooks:** `use-` prefix (`use-mobile.ts`)
- **Utilities:** camelCase for functions

## Design System

This project uses **shadcn/ui**. Components are in `components/ui/`.

## Key Dependencies

- **Core:** Next.js 16, React 19, TypeScript 5
- **UI:** Tailwind CSS 4, Radix UI, lucide-react, class-variance-authority
- **Forms:** react-hook-form, zod, @hookform/resolvers

## Routes

Next.js App Router routes in `app/`:
- `/` - Home
- `/about` - About
- `/team` - Team
- `/services` - Services
- `/articles` - Articles
- `/contact` - Contact

Navigation is handled by `Header.tsx`.

## Code Conventions

### Imports
- Use path aliases (`@/`) for absolute imports
- Order: React/Next.js → External libraries → Internal components → Utilities


### Performance & Accessibility
- Use `priority` on Next.js `Image` for above-fold images
- Include `aria-label` on icon-only buttons
- Use semantic HTML elements
- Ensure proper contrast (dark mode support)

## Scripts

```bash
npm run dev     # Development
npm run build   # Production build
npm run start   # Production server
npm run lint    # Linting
```

## Critical Rules

1. **NEVER** create components without TypeScript types
2. **ALWAYS** use `cn()` for Tailwind class merging
3. **ALWAYS** add `"use client"` when using hooks or events
4. **MAINTAIN** consistency with existing code patterns
5. **USE** design system components before creating new ones
6. **FOLLOW** existing folder structure

## Reference Examples

- **Layout/Styling:** `components/Header.tsx`
- **Simple Components:** `components/Logo.tsx`
- **UI Components:** `components/ui/*.tsx`
- **Utilities:** `lib/utils.ts`
- **Custom Hooks:** `hooks/use-mobile.ts`

## Additional Notes

- ESLint for linting
- shadcn/ui config: `components.json`
- PostCSS configured for Tailwind
