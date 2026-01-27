# LLM Strategy

Purpose
- Keep all LLM contributions consistent with this repo.
- Force every change request to follow the same structure and rules.

Required behavior (always)
- Read this file first, then the relevant rules in this folder.
- If the change affects UI or Next.js pages/components, follow `prompts/frontend.md`.
- If the change affects APIs, data, or server logic, follow `prompts/backend.md`.
- If both apply, follow both and call out any conflicts.
- If a rule is missing for your task, propose a minimal addition to the prompts folder.

Required response structure (for any LLM output)
1) Intent: one sentence describing the goal.
2) Assumptions: short list (only if needed).
3) Plan: 3-6 steps.
4) Changes: list of files to edit/create and why.
5) Tests: commands to run or "not run" with reason.
6) Risks: any likely regressions or open questions.

Repository context
- App is a Next.js App Router project under `src/app`.
- UI is Tailwind CSS 4 + shadcn/ui components in `src/components/ui`.
- Keep changes small and scoped. Prefer reusing existing components.
