import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import CreateNote from "./components/CreateNote";
import NoteItem from "./components/NoteItem";
// import Notes from "./components/Notes";
// import EmptyNotes from "./components/EmptyNotes";
import GlobalStyle from "./styles/GlobalStyles";
import { Container } from "./styles/StylesApp";
import Login from "./components/Authorization";
import Home from "./components/HomePage";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Switch>
            <Route exact path="/notes" component={NoteItem} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
