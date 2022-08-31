import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import variables from './GlobalVariables';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    --toastify-toast-width: 400px;
    ${variables}
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: revert;
    /* font-weight: revert; */
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  ol, ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;

    &:link,
    &:visited {
      color: inherit;
    }
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
