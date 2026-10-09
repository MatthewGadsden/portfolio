# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio site: React 19 + TypeScript, built with Vite (aliased to `rolldown-vite` via `package.json` overrides). Bun is the package manager (`bun.lock`). There is no router, no state management, and no test suite.

## Commands

```sh
bun install          # install deps (CI uses --frozen-lockfile)
bun run dev          # Vite dev server
bun run build        # tsc -b (type-check) then vite build -> dist/
bun run lint         # eslint . (flat config: ts-eslint, react-hooks, react-refresh)
bun run preview      # serve the built dist/
```

CI runs `lint` then `build`, so both must pass before a deploy succeeds.

## Architecture

- `src/App.tsx` holds the entire page. Content lives as inline data arrays (`experience`, `projects`) at the top of the component and is mapped into the sidebar + content layout. Adding a job or project means editing those arrays, not adding components.
  - `experience[].description` is rendered with `dangerouslySetInnerHTML`, so it uses `<br/>` for line breaks; project descriptions are plain text.
  - Project thumbnails are imported from `src/assets/projects/` and carry a `fit` of `'cover'` or `'contain'`, which maps to the `.project-thumb-cover` / `.project-thumb-contain` CSS classes.
  - `contribution: true` on a project shows a "Contribution" badge (for repos owned by someone else).
- Styling is plain CSS in `src/styling/`:
  - `tokyo_snow.css` defines the theme: a raw palette (`--brick`, `--ember`, `--snow`, ...) plus semantic tokens (`--text-*`, `--bg-*`, `--border-*`, `--accent`) on `:root`. It is dark-only (`color-scheme: dark`) and also sets the background image.
  - `index.css` imports the theme and contains all layout/component styles. It should reference only the semantic tokens, never palette colors directly, so the theme can be swapped by replacing `tokyo_snow.css`.
  - Layout is a fixed sidebar + scrolling content column inside `.wrapper`; `.page-backdrop` and `.column-backdrop` are fixed decorative layers. Responsive breakpoints are at 960px and 820px.
- `index.html` is the Vite entry (fonts from Google Fonts, favicons from `public/`). `index_mine.html` is an unused static mockup left over from an earlier version; it is not part of the build.

## Deployment

`.github/workflows/deploy.yml` deploys `dist/` to Cloudflare Pages (project `portfolio-site`) as a production build. It triggers only on pushing a `v*` tag (or manual dispatch), not on pushes to `main`.
