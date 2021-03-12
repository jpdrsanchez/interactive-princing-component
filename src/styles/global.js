import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}

  :root {
    /* Typography */
    --main-font: 'Manrope', sans-serif;
    --text-weight: 600;
    --title-weight: 800;

    /* Colors */
    --blue-title: #293356;
    --blue-text: #848EAD;
    --light-blue: #f1f5fe;
    --very-light-blue: #f9faff;
    --white: #fff;
  }

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    color: var(--blue-text);
    font-family: var(--main-font);
    font-weight: var(--text-weight);
  }
`;

export default GlobalStyles;
