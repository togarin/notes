import React from "react";
import CreateNote from "./CreateNote";
import { Ul, Li } from "../styles/StyleNoteItem";
import { Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const NoteItem = () => {
  return (
    <>
      <CreateNote />
      <Ul>
        <Li>
          <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarIcon />} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Li>
      </Ul>
    </>
  );
};

export default NoteItem;
