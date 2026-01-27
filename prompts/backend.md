# Backend Rules

Scope
- Applies to API routes, server logic, data access, and integrations.

Architecture
- Prefer Next.js Route Handlers under `src/app/api/**/route.ts`.
- Keep handlers small; move business logic into `src/lib` or `src/server` if created.
- Use `zod` for input validation and safe parsing.

Conventions
- Return JSON with explicit status codes.
- Centralize shared types in `src/lib`.
- Do not hardcode secrets; use environment variables and document them.

Quality
- Add basic error handling and predictable error shapes.
- Avoid heavy work on the request path; use caching when possible.
- Add tests when feasible and document manual test steps.
