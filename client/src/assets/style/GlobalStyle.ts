import { createGlobalStyle } from 'styled-components';

import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: borderbox;
  }

  :root {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`;

export default GlobalStyle;
