import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Button, Form, Input } from "../styles/StyleAuthorization";
import { observer } from "mobx-react-lite";
import AuthStore from "../store/auth";

const SignUp = observer(({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        AuthStore.signup(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <>
      <Form onSubmit={handleSignUp}>
        <Input id="email" type="email" placeholder={"Login"} />
        <Input id="password" type="password" placeholder={"Password"} />
        <Button type="submit">Create Account</Button>
      </Form>
    </>
  );
});

export default withRouter(SignUp);
