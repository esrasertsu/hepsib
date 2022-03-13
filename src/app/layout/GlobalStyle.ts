import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
    background-color: #fffff;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
