import { createGlobalStyle } from 'styled-components';

import variables from './GlobalVariables';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: borderbox;
  }

  :root {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    ${variables}
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  a {
    text-decoration: none;

    &:link,
    &:visited {
      color: black;
    }
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
