import React from "react";
import { Button, Form, Input } from '../styles/StylesCreateNote';

const CreateNote = () => {
  return (
    <Form >
      <Input placeholder="Пиши тут" />
      <Button type="submit">add</Button>
    </Form>
  );
};

export default CreateNote;
