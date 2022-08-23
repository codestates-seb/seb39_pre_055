import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: "Noto Sans KR", sans-serif;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
