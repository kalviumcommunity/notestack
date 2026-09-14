import "dotenv/config";
import express from "express";
import cors from "cors";
import notesRouter from "./routes/notes.js";
import prisma from "./prisma/client.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRouter);

// Central error-handling middleware. Every route forwards its error here
// with next(error).
app.use((err, req, res, next) => {
  console.error(err);

  // ---- TASK 2: map Prisma's typed error codes to HTTP status codes ----
  // Prisma throws an error object with a `.code`. Handle these two:
  //   err.code === "P2002"  -> unique constraint failed (duplicate title)
  //                            -> res.status(409).json({ error: "..." })
  //   err.code === "P2025"  -> record not found
  //                            -> res.status(404).json({ error: "..." })
  //
  // (Add your `if` checks above this default 500 response.)

  res.status(500).json({ error: "Something went wrong" });
});

const PORT = 3001;

async function start() {
  await prisma.$connect();
  console.log("Prisma connected");
  app.listen(PORT, () => {
    console.log(`Notes API running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start");
  console.error(err);
  process.exit(1);
});
