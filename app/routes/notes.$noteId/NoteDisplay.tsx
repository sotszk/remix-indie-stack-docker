import type { Note } from "~/modules/note/infrastructure";

export type NoteDisplayProps = {
  note: Pick<Note, "id" | "body" | "title">;
};

export const NoteDisplay = ({ note }: NoteDisplayProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">{note.title}</h3>
      <p className="py-6">{note.body}</p>
    </div>
  );
};
