import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, #__next {
        height: 100%;
      }
      html,
      body {
        overflow-x: hidden;
        width: 100%;
        height: 100%;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
      a {
        text-decoration: none;
        outline: none;
        color: #000;
      }
      & * {
        font-family: 'Noto Sans KR', sans-serif !important;
      }
`;

export default GlobalStyle;
