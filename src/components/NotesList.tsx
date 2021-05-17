import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import notesStore, { Note } from "../store/note";

import CreateNote from "./CreateNote";
import NoteItem from "./NoteItem";
import EmptyNotes from "./EmptyNotes";
import { IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AuthStore from "../store/auth";

const NotesList: FC = observer(() => {
  const [edititngNoteId, setEditingNoteId] = useState<string>();

  const editingNote: Note | undefined = edititngNoteId
    ? notesStore.notes.find((n) => n.id === edititngNoteId)
    : undefined;

  return (
    <>
      <>
        <IconButton onClick={AuthStore.signout}>
          <ExitToAppIcon />
        </IconButton>
      </>

      <CreateNote
        editingNote={editingNote}
        onSave={(title: string) => {
          if (editingNote) {
            notesStore.updateNoteTitle(editingNote.id, title);
          } else notesStore.addNote(title);

          setEditingNoteId(undefined);
        }}
      />
      {notesStore.notes.length > 0 ? (
        notesStore.notes.map((item) => (
          <NoteItem
            key={item.id}
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
