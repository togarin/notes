import React, { FC } from "react";
import { observer } from "mobx-react-lite";

import { Ul, Li } from "../styles/StyleNoteItem";
import { Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const NoteItem: FC<TNoteItem> = observer(({ item, text, onComplete, onDelete, onEdit }) => {
  return (
    <>
      <Ul>
        <Li
          style={{
            textDecoration: item.completed ? "line-through" : null,
          }}
        >
          <Checkbox
            checked={item.completed}
            onChange={onComplete}
            icon={<StarBorderIcon />}
            checkedIcon={<StarIcon />}
          />
          {text}
          <IconButton disabled={item.completed ? true : false} onClick={onEdit}>
            <Edit />
          </IconButton>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Li>
      </Ul>
    </>
  );
});

export default NoteItem;
