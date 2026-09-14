import { useState } from "react";
// TASK 1: you'll need these two hooks from TanStack Query.
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../services/notes.service";

export default function NoteForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // ---- TASK 1: set up the mutation ----
  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: createNote,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["notes"]); // refetch the list
  //     setTitle("");
  //     setBody("");
  //   },
  // });

  function handleSubmit(e) {
    e.preventDefault();
    // ---- TASK 1: trigger the mutation ----
    // mutation.mutate({ title, body });
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="input"
        placeholder="Note body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Add note</button>

      {/* ---- TASK 2: show the server's error message when the create fails ----
          e.g. {mutation.isError && (
            <p className="error">{mutation.error?.response?.data?.error || "Failed to add note"}</p>
          )} */}
    </form>
  );
}
