# Credentials Manager

Work-in-progress credentials management app with a React/TanStack frontend and an Express + Drizzle + PostgreSQL backend.

## Structure

```text
.
├── client/   # Frontend
└── server/   # Backend
```

## Current Stack

- `client`
  - React 19
  - Vite 8
  - TanStack Router
  - TanStack Query
  - TanStack Form
  - Tailwind CSS 4

- `server`
  - Node.js + TypeScript
  - Express 5
  - Drizzle ORM
  - PostgreSQL

## Project Status

The project already has a working base for further development:

- the `client` builds successfully
- the `server` compiles successfully with TypeScript
- Drizzle is configured with an initial PostgreSQL schema
- the backend starts with Express, `helmet`, `cors`, and `express.json()`

## Requirements

- Node.js 22+
- pnpm 11+
- PostgreSQL

## Environment Variables

The backend currently expects at least:

- `DATABASE_URL`
- `JWT_SECRET`
- `PORT` optional

Create `server/.env` from `server/.env.example`.

```env
DATABASE_URL=postgres://postgres:your_password@localhost:5432/credentials_manager
JWT_SECRET=replace_with_a_long_random_secret
PORT=8080
```

If you are also using Docker Compose for PostgreSQL, the example file includes:

- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `POSTGRES_DB`

## Installation

Install dependencies separately in each app:

```bash
cd client
pnpm install
```

```bash
cd server
pnpm install
```

## Development

Frontend:

```bash
cd client
pnpm dev
```

Backend:

```bash
cd server
pnpm dev
```

Default URLs:

- frontend: `http://localhost:3000`
- backend: `http://localhost:8080`

## Build

Frontend:

```bash
cd client
pnpm build
```

Backend:

```bash
cd server
pnpm build
```
