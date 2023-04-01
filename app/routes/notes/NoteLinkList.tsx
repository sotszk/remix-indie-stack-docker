import { NavLink } from "@remix-run/react";

import type { Note } from "@prisma/client";

export type NoteLinkListProps = {
  notes: Pick<Note, "id" | "title">[];
};

export const NoteLinkList = ({ notes }: NoteLinkListProps) => {
  return (
    <ol>
      {notes.map((note) => (
        <li key={note.id}>
          <NavLink
            className={({ isActive }) =>
              `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
            }
            to={note.id}
          >
            📝 {note.title}
          </NavLink>
        </li>
      ))}
    </ol>
  );
};
