import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyles";
import { Container } from "./styles/StylesApp";

import AuthStore from "./store/auth";
import Routes from "./routes/Routes";

const App = () => {
  useEffect(() => {
    AuthStore.auth();
  }, []);

  return (
    <>
      <Container>
        <Router>
          <Routes />
        </Router>
        <GlobalStyle />
      </Container>
    </>
  );
};

export default App;
