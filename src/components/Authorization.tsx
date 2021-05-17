import { FC, useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { Redirect, RouteComponentProps } from "react-router";

import AuthStore from "../store/auth";
import { Form, Input } from "../styles/StyleAuthorization";
import { Button } from "@material-ui/core";
import QueueIcon from "@material-ui/icons/Queue";

const Login: FC<RouteComponentProps> = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await AuthStore.login(email, password);
      } catch (error) {
        alert(error);
      }
    },
    [email, password]
  );

  if (AuthStore.currentUser) {
    return <Redirect to="/notes" />;
  }
  return (
    <>
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Login"}
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"Password"}
        />
        <Button
          type="submit"
          onClick={handleLogin}
          variant="contained"
          color="default"
          endIcon={<QueueIcon />}
        >
          Login
        </Button>
      </Form>
    </>
  );
});

export default Login;
