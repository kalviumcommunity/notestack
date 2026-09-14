# FSWD CA2 — Notes app (starter)

A small full-stack **notes** app: **React (Vite) + TanStack Query** on the front end,
**Express + Prisma (PostgreSQL)** on the back end.

The app already runs and **lists** notes. You extend it across three tasks — see your
assessment brief. You edit only the files marked with `TODO` comments.

## Setup

```bash
# from the project root
npm run setup                 # installs root + server + client deps

# database (PostgreSQL)
createdb fswd_ca2             # create the database once
cd server
cp .env.example .env          # then edit .env with your PostgreSQL username/password
npm run db:setup              # prisma migrate dev --name init
npm run db:seed               # inserts a few authors + notes
cd ..

# run both servers together
npm run dev                   # Express :3001 + Vite :5173
```

Open **http://localhost:5173**.

## What's already done

- `client/` — React app with TanStack Query wired up (`NoteList` reads the list).
- `server/server.js` — Express with `cors`, `express.json`, and an error handler.
- `server/prisma/schema.prisma` — `Author` and `Note` models (`title` is **unique**).
- `server/prisma/seed.js` — seed data.

## What you edit (look for `TODO`)

- `client/src/components/NoteForm.jsx` — a `useMutation` that creates a note + invalidates the cache.
- `client/src/services/notes.service.js` — the `createNote` POST call.
- `server/routes/notes.js` — validate the title, let Prisma errors reach the middleware.
- `server/server.js` — map Prisma `P2002` → 409 and `P2025` → 404 in the error handler.
- `ARCHITECTURE.md` — a short written architecture map.

> This app uses **PostgreSQL**. Keep the Prisma schema and seed script as they are.
