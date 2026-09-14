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

The design system uses CSS custom properties (raw RGB triplets) defined in `src/lib/styles/theme.css` and mapped to Tailwind utility classes in `tailwind.config.js`. Always use semantic token names (e.g. `bg-muted`, `bg-card`, `text-foreground`, `border-border`) rather than raw hex or generic Tailwind color classes. Token names follow shadcn-ui conventions: `--muted` for subdued section/nav surfaces, `--card` for card surfaces, `--popover` for elevated/floating surfaces (tooltips, inputs).

Typography is set globally in `src/app.css` via `@layer base` — `h1`–`h6`, `p`, and `section` all have opinionated defaults. Avoid overriding font families inline; use the `font-heading`, `font-sans`, `font-mono` theme tokens.

Reusable CSS patterns (`hoverable-link`, `footnote`, `hoverable`, `magic-text`) are in `src/app.css` under `@layer components` / `@layer utilities`.

Scroll targets use `<span class="jumpable" id="...">` with negative margin to account for the fixed navbar height.

## Icons

Icons use `@iconify/svelte`. Pass Iconify icon strings (e.g. `"simple-icons:svelte"`) — the `simple-icons:` prefix is required for tech stack icons in `Article`.
