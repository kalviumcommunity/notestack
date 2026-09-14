import apiClient from "./apiClient";

// GET the list of notes — already done.
export async function getNotes() {
  const res = await apiClient.get("/api/notes");
  return res.data; // { notes }
}

// TASK 1: POST a new note.
// Send { title, body } to the API and return the created note.
// Example:
//   const res = await apiClient.post("/api/notes", { title, body });
//   return res.data;
export async function createNote({ title, body }) {
  // TODO Task 1: replace this with the real POST call above.
  throw new Error("createNote not implemented");
}
