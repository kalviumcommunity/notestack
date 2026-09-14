# Architecture Notes (Task 3)

Fill in the blanks below. Keep it short — one line per item.

## The layers of this app

For each layer, name **one file** in this repo that belongs to it and write its
**single responsibility** in a few words.

| # | Layer | A file in this repo | Its one responsibility |
|---|-------|---------------------|------------------------|
| 1 | Database (PostgreSQL) | `server/prisma/schema.prisma` | _TODO_ |
| 2 | Data access (Prisma) | `server/prisma/client.js` | _TODO_ |
| 3 | HTTP routes (Express) | `server/routes/notes.js` | _TODO_ |
| 4 | UI + server state (React) | `client/src/components/NoteForm.jsx` | _TODO_ |

## Where this assignment's additions live

Write the layer (from the table above) where each change belongs:

- The `useMutation` + `invalidateQueries` (create a note, refresh the list): _TODO_
- The Prisma error handling (`P2002` → 409, `P2025` → 404): _TODO_

## Debugging

- If a `POST /api/notes` returns a **500**, which layer would you inspect FIRST, and why? _TODO_

## One extension seam

Describe **one** feature you could add (e.g. "search notes by title") and name the
**layers you would touch** to add it, in order.

_TODO_
