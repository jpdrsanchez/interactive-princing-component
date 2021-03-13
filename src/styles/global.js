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
    --grey: #ecf0fb;
    --grey-switch: #cfd8ef;
    --green: #10d8c4;
    --green-hover: #7aeadf;
    --green-input: #a4f3eb;
    --green-focus: #24aea1;
    --orange: #ff8d68;
    --light-orange: #feede8;
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
    background-color: var(--very-light-blue);
    background-image: url('/images/bg-pattern.svg');
    background-repeat: no-repeat;
    background-position: top -3.0625rem left;

    @media (min-width: 37.5em) {
      background-position: top left;
    }

    @media (min-width: 90em) {
      background-position: top right;
      background-size: 100% auto;
    }
  }
`;

export default GlobalStyles;
