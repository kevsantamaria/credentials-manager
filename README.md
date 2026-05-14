# Credentials Manager

Web app to manage server credentials (WordPress, databases, FTP, etc.) built with PERN stack + TypeScript.

## Current Stack

- `client`
  - React 19
  - Vite 8
  - TanStack Router
  - TanStack Query
  - TanStack Form
  - Tailwind CSS 4

- `server`
  - Node.js
  - Express 5
  - Drizzle ORM
  - PostgreSQL

## Requirements

- Node.js 22+
- pnpm 11+
- PostgreSQL

## Environment Variables

The backend requires the following environment variables:

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
