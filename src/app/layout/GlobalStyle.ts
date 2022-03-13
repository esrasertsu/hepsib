import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #fffff;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
