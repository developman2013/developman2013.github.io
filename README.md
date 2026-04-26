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

## VS Code Dev Container

This repository includes a ready-to-use VS Code Dev Container setup.

### What it does

- Builds a dedicated development container from `.devcontainer/Dockerfile`
- Installs the project dependencies with `npm ci` after container creation
- Forwards port `4200` for Angular local development
- Installs a small set of recommended VS Code extensions inside the container
- Lets you run and debug the Angular app from VS Code while the toolchain lives in Docker

### How to start

Requirements:

- Docker Desktop or compatible Docker runtime
- VS Code
- VS Code extension: `Dev Containers`

Open the repository in VS Code and run:

1. `Dev Containers: Reopen in Container`
2. Wait until the container is built and `npm ci` finishes
3. Start the app with `npm start`
4. Open `http://localhost:4200`

You can also use the debug configuration:

1. Start `Angular: debug in Chrome`
2. VS Code will run `npm start`
3. Chrome will open the app with the debugger attached

### Files

- `.devcontainer/devcontainer.json` defines container behavior and forwarded ports
- `.devcontainer/Dockerfile` defines the Node.js-based development image
- `.vscode/tasks.json` defines reusable npm tasks
- `.vscode/launch.json` defines the browser debugging profile

### How it works

VS Code itself stays on your host machine, but it attaches to the container as the development environment.
That means:

- terminal commands run inside Docker
- Node.js and Angular CLI come from the container
- extensions declared for the workspace are installed in the container context
- your source code stays in the repository, mounted into the container

This is usually the most practical form of "VS Code in Docker" for local development.

## Build

```bash
npm run build
```

Build output is generated in `dist/`.

## Deployment

Deployment is handled by GitHub Actions via:

- `.github/workflows/deploy-pages.yml`

On push to `master`, the workflow builds the app and publishes `dist/browser` to GitHub Pages.
Before deploy, the workflow generates `dist/browser/assets/runtime-config.js` from GitHub Actions secrets, so Firebase values are not stored in the repository.

Required repository secrets:

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

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
