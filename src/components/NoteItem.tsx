import { FC } from "react";
import { observer } from "mobx-react-lite";

import { Ul, Li } from "../styles/StyleNoteItem";
import { Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { Note } from "../store/note";

interface INoteItemProps {
  item: Note;
  onComplete?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

const NoteItem: FC<INoteItemProps> = observer(
  ({ item, onComplete, onDelete, onEdit }) => {
    return (
      <>
        <Ul>
          <Li
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            <Checkbox
              checked={item.completed}
              onChange={onComplete}
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon />}
            />
            {item.title}
            <IconButton
              disabled={item.completed ? true : false}
              onClick={onEdit}
            >
              <Edit />
            </IconButton>
            <IconButton onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </Li>
        </Ul>
      </>
    );
  }
);

export default NoteItem;
