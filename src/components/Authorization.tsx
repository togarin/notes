// import React from "react";
// import { Button, Form, Input } from "../styles/StyleAuthorization";

// const Login = () => {
//   return (
//     <>
//       <Form>
//         <Input placeholder={"Login"} />
//         <Input placeholder={"Password"} />
//         <Button type="submit">Log in</Button>
//       </Form>
//     </>
//   );
// };

// export default Login;
import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { withRouter, Redirect } from "react-router";

import AuthStore from "../store/auth";
import { Form, Input } from "../styles/StyleAuthorization";
import { Button } from "@material-ui/core";
import QueueIcon from "@material-ui/icons/Queue";

const Login =observer( ({ history }) => {
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        AuthStore.login(email.value, password.value)
        history.push("/notes");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  if (AuthStore.currentUser) {
    return <Redirect to="/notes" />;
  }
  return (
    <>
      <Form onSubmit={handleLogin}>
        <Input id="email" type="email" placeholder={"Login"} />
        <Input id="password" type="password" placeholder={"Password"} />
        <Button
        type="submit"
        variant="contained"
        color="default"
        endIcon={<QueueIcon />}
      >
        Login
      </Button>
      </Form>
    </>
  );
})

export default withRouter(Login);
