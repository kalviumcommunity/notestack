import { Router } from "express";
import prisma from "../prisma/client.js";

const router = Router();

// GET /api/notes  — already done. Returns every note (newest first) with its author.
router.get("/", async (req, res, next) => {
  try {
    const notes = await prisma.note.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: true },
    });
    res.json({ notes });
  } catch (error) {
    next(error);
  }
});

// POST /api/notes  — create a new note from { title, body }.
router.post("/", async (req, res, next) => {
  try {
    const { title, body } = req.body;

    // ---- TASK 2: validate the title ----
    // If title is missing or empty, respond with 400 and a short message,
    // e.g.  return res.status(400).json({ error: "Title is required" });

    const note = await prisma.note.create({
      data: { title, body },
    });

    res.status(201).json(note);
  } catch (error) {
    // ---- TASK 2: forward the error so the error middleware can map it ----
    // Prisma will throw here on a duplicate title (P2002). Just pass it on:
    next(error);
  }
});

export default router;
