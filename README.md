# Deadalus

Deadalus is a frontend architecture playground built with **Nuxt 4** (compatibility mode). It implements a multi-user task list application showcasing a feature-based architecture with clean separation of concerns.

## Tech Stack

- **Nuxt 3** with `compatibilityVersion: 4` (Nuxt 4 compat)
- **Vue 3** + **Vite**
- **Pinia** — state management
- **@nuxtjs/i18n** — internationalization (en, fr, es, pt, da, it, de)
- **mande** — HTTP client
- **TypeScript**

## Architecture

```
app/
  features/
    task/          # Task feature (domain, application, infrastructure, presentation)
    user/          # User feature (domain, infrastructure, presentation)
shared/
  ui/              # Shared UI components (BaseButton, BaseInput)
  stores/          # Pinia stores (useUserStore, useTaskStore)
i18n/
  locales/         # Translation files
```

### Feature structure

Each feature follows a layered architecture:
- **domain/** — types and entities
- **application/** — use-cases / composables
- **infrastructure/** — repository implementations (fake + API)
- **presentation/** — Vue components and pages

## Getting Started

```bash
npm install
npm run dev
```

## Docker

```bash
docker-compose up --build
```

The app will be available at http://localhost:3000.
