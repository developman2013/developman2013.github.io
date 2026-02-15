# Mikhail Pirahouski Website

Personal portfolio website built with Angular.

## Stack

- Angular 21
- TypeScript
- GitHub Actions + GitHub Pages

## Features

- Responsive single-page portfolio layout
- RU/EN localization with language switch
- Language support via URL query (`?lang=ru` / `?lang=en`)
- Light/Dark theme switch with persisted preference
- Custom domain support (`pirahouski.com`)

## Local Development

Install dependencies:

```bash
npm ci
```

Run local dev server:

```bash
npm start
```

App is available at:

- `http://localhost:4200/`
- `http://localhost:4200/?lang=ru`

## Build

```bash
npm run build
```

Build output is generated in `dist/`.

## Deployment

Deployment is handled by GitHub Actions via:

- `.github/workflows/deploy-pages.yml`

On push to `master`, the workflow builds the app and publishes `dist/browser` to GitHub Pages.

## CI

CI checks run via:

- `.github/workflows/ci.yml`

Current required check:

- `npm run build`

## Branch and PR Workflow

- Work only in feature branches
- Open PRs into `master`
- Merge changes via PR only
- Do not push directly to `master`

## Useful Commands

```bash
npm start        # run local dev server
npm run build    # production build
npm test         # unit tests
```
