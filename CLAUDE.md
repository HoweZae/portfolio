# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Type-check with svelte-check
```

No test runner is configured.

## Architecture

Single-page SvelteKit portfolio. All visible content lives on one route (`src/routes/+page.svelte`), which mounts five section components in order: `Top`, `Me`, `Roles`, `Projects`, `Contact` (Contact is currently commented out). The layout (`+layout.svelte`) wraps everything with `Navbar` and a footer.

**Section components** (`src/routes/*.svelte`) are flat — no sub-routing, no stores. They use Svelte's `fly` transition and are conditionally rendered after `onMount` to trigger entrance animations.

**`src/lib/index.js`** exports a single `link` object with all external URLs and document paths (resume, CV, social links). Import as `import { link } from "$lib"` anywhere.

**`Article.svelte`** (`src/lib/components/Article.svelte`) is the shared card component used for both projects and roles. Props: `id`, `href`, `title`, `subtitle`, `other` (body text), `date`, `techInvolved` (array of Iconify icon strings in `simple-icons:Name` format).

**UI primitives** in `src/lib/components/ui/` are shadcn-svelte components (Button, Carousel, Tooltip) — prefer editing these only if the underlying bits-ui behavior needs changing.

## Styling

`src/app.css` is only the Tailwind entry point and stylesheet manifest. Styling responsibilities under `src/lib/styles/` are split by ownership:

- `theme.css` and `font.css` define design tokens, breakpoints, and fonts.
- `base.css` owns document-wide behavior and typography defaults.
- `sections.css` exposes the shared section contracts used by the page sections.
- `effects.css` contains reusable animated text and hover utilities.

Use semantic token utilities (for example, `bg-muted`, `bg-card`, `text-foreground`, and `border-border`) instead of raw colors. Breakpoint semantics come from `theme.css`; do not duplicate them with custom container media queries.

Page- and feature-specific styles belong in the consuming Svelte component. The hero parallax animation is owned by `+page.svelte`, while the navbar condensation animations and link typography are owned by `Navbar.svelte`.

Shared section markup uses the intentional contracts in `sections.css`, including `section-card`, `section-content`, `section-heading`, `section-list`, `section-anchor`, and `section-footnote`. Do not couple these styles to element names or DOM hierarchy.

## Icons

Icons use `@iconify/svelte`. Pass Iconify icon strings (e.g. `"simple-icons:svelte"`) — the `simple-icons:` prefix is required for tech stack icons in `Article`.
