import NoteForm from "./components/NoteForm.jsx";
import NoteList from "./components/NoteList.jsx";

export default function App() {
  return (
    <div className="wrap">
      <h1>Notes</h1>
      <p className="muted">
        A tiny full-stack notes app. Wire up the <b>Add note</b> form with a
        TanStack <code>useMutation</code> and cache invalidation, then handle
        Prisma errors on the server.
      </p>
      <NoteForm />
      <NoteList />
    </div>
  );
}
