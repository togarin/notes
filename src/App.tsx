import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import { Container } from "./styles/StylesApp";

import NotesList from "./components/NotesList";

const App = () => {
  return (
    <>
      <Container>
        <NotesList />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;

    // <>
    //   <Router>
    //     <Container>
    //       <Switch>
    //         <Route exact path="/notes" component={NotesList} />
    //         <Route exact path="/login" component={Login} />
    //         <Route exact path="/" component={Home} />
    //       </Switch>
    //     </Container>
    //     <GlobalStyle />
    //   </Router>
    // </>
