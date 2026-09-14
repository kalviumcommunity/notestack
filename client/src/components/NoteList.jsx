import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../services/notes.service";

// Already done: reads the notes list with the ["notes"] query key.
// Task 1 invalidates THIS key so the list refetches after a create.
export default function NoteList() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  if (isPending) return <p className="muted">Loading notes…</p>;
  if (isError) return <p className="error">Could not load notes: {error.message}</p>;

  const { notes } = data;

  if (notes.length === 0) return <p className="muted">No notes yet.</p>;

  return (
    <ul className="notes">
      {notes.map((note) => (
        <li key={note.id} className="note">
          <h3>{note.title}</h3>
          <p className="meta">by {note.author?.name ?? "Unknown"}</p>
          <p>{note.body}</p>
        </li>
      ))}
    </ul>
  );
}
