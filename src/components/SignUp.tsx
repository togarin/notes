import { FC, useCallback } from "react";
import { RouteComponentProps } from "react-router";
import { Button, Form, Input } from "../styles/StyleAuthorization";
import { observer } from "mobx-react-lite";
import AuthStore from "../store/auth";

const SignUp: FC<RouteComponentProps> = observer(() => {
  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      AuthStore.signup(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  }, []);

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

export default SignUp;
