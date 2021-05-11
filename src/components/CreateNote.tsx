import React, { FC, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import { Form, Input } from "../styles/StylesCreateNote";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";


const CreateNote : FC<{ editingNote?:Note, onSave:(arg:string)=>any }> = observer(({ editingNote, onSave }) => {
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
    <Form>
      <Input
        placeholder="Создать"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          onSave(inputText);
          setInputText("");
        }}
      >
        <AddIcon />
      </IconButton>
    </Form>
  );
});

export default CreateNote;
