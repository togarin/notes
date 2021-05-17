import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthStore from "../store/auth";
import PrivateRoute from "../utils/PrivateRouter";
import NotesList from "../components/NotesList";
import Authorization from "../components/Authorization";
import SignUp from "../components/SignUp";
import Home from "../components/HomePage";

const Routes: FC<{}> = observer(() => {
  if (AuthStore.loading) {
    return <>Loading...</>;
  }

  return AuthStore.currentUser ? (
    <Switch>
      <PrivateRoute exact path="/" component={NotesList} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/login" component={Authorization} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  );
});

export default Routes;
