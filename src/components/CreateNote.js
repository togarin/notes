import React from "react";
import { Button, Form, Input } from '../styles/StylesCreateNote';

const CreateNote = (props) => {
  const { note, handleSubmit, handleChange } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Пиши тут" value={note} onChange={handleChange} />
      <Button type="submit">add</Button>
    </Form>
  );
};

export default CreateNote;
