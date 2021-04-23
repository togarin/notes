import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import notesStore from "../store/note";

import CreateNote from "./CreateNote";
import NoteItem from "./NoteItem";
import EmptyNotes from "./EmptyNotes";

const NotesList: FC<TonSave> = observer(() => {
  const [edititngNoteId, setEditingNoteId] = useState(null);

  const editingNote: Note | null =
    edititngNoteId && notesStore.notes.find((n) => n.id === edititngNoteId);
  
  return (
    <>
      <CreateNote
        editingNote={editingNote}
        onSave={(title: string) => {
          if (editingNote) {
            notesStore.updateNoteTitle(editingNote.id, title);
          } else notesStore.addNote(title);

          setEditingNoteId(null);
        }}
      />
      {notesStore.notes.length > 0 ? (
        notesStore.notes.map((item) => (
          <NoteItem
            key={item.id}
            text={item.title}
            item={item}
            onEdit={() => setEditingNoteId(item.id)}
            onComplete={() => notesStore.completeNote(item.id)}
            onDelete={() => notesStore.removeNote(item.id)}
          />
        ))
      ) : (
        <EmptyNotes />
      )}
    </>
  );
});

export default NotesList;
