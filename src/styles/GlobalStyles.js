import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  a {
    color: #000 !important;
    text-decoration: none;
  }
  body {
    font-family: "Roboto";
  }
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
  }
`;

export default GlobalStyle;
