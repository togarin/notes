import React from "react";
import { Button, Form, Input } from "../styles/StyleAuthorization";

const Login = () => {
  return (
    <>
      <Form>
        <Input placeholder={"Login"} />
        <Input placeholder={"Password"} />
        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};

export default Login;
