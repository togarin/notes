import { FC, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import { Form, Input } from "../styles/StylesCreateNote";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";
import { Note } from "../store/note";

interface CreateNoteProps {
  editingNote?: Note;
  onSave: (arg: string) => any;
}

const CreateNote: FC<CreateNoteProps> = observer(({ editingNote, onSave }) => {
  const editingNoteTitle = useRef<string>();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (editingNote && editingNoteTitle.current !== editingNote.title) {
      editingNoteTitle.current = editingNote.title;
      setInputText(editingNote.title);
    } else {
      setInputText("");
    }
  }, [editingNote, editingNoteTitle]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(inputText);
        setInputText("");
      }}
    >
      <Input
        placeholder="Создать"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <IconButton
        disabled={inputText.length === 0 ? true : false}
        type="submit"
      >
        <AddIcon />
      </IconButton>
    </Form>
  );
});

export default CreateNote;
