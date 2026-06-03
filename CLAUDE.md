# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # type-check (astro check) then build to dist/
pnpm preview      # serve the built dist/
pnpm lint         # type-check only (astro check)
pnpm format       # format all files with Prettier
```

Package manager is **pnpm**. There are no tests.

## Architecture

Single-page portfolio site built with **Astro + Preact + Tailwind CSS**, output as fully static HTML.

**Page structure** (`src/pages/index.astro`): one page with four sections — Hero, Projects grid, Contact form, Footer. All data (project list, skills) is hardcoded in the page and component files, not fetched from any API or CMS.

**Components** live in `src/components/react/` but are **Preact** components (not React). The folder name is misleading. `tsconfig.json` sets `jsxImportSource: "preact"`, so JSX compiles to Preact calls. All interactive components are mounted with `client:idle` in the Astro page.

**Tech icons** (`src/utils/getTechIcon.ts`): maps a string key (e.g. `"laravel"`, `"typescript"`) to SVG data from `simple-icons`. To add a new tech icon, import the `si*` export from `simple-icons` and add it to the `techs` map. `ProjectBlock` and `Hero` both consume this utility.

**Dark mode**: Tailwind uses `darkMode: "selector"`. The `ToggleTheme` component adds/removes the `.dark` class on `<html>` and persists the preference to `localStorage` via the `useLocalStorage` hook.

**Scroll animation**: `useOnScreen` (Intersection Observer hook) makes `ProjectBlock` cards scale up when they enter the viewport on desktop.

**Contact form**: Formspree (`https://formspree.io/xknqodbr`) — no backend needed.

**Fonts**: Inter and Fira Mono are self-hosted in `public/fonts/` and declared with `@font-face` in `src/layouts/Layout.astro`.

**Prettier config**: 4-space indent, `prettier-plugin-astro` for `.astro` files. Run `pnpm format` before committing.
