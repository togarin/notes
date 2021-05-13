import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyles";
import { Container } from "./styles/StylesApp";

import NotesList from "./components/NotesList";
import Authorization from "./components/Authorization";
import SignUp from "./components/SignUp";
import Home from "./components/HomePage";

import { AuthProvider } from "./utils/Auth";
import PrivateRoute from "./utils/PriviteRouter";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Container>
            <Switch>
              <PrivateRoute exact path="/notes" component={NotesList} />
              <Route exact path="/login" component={Authorization} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Container>
          <GlobalStyle />
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
