import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  input, textarea, button {
    appearance: none;
    -webkit-appearance: none;
    border: none;
    margin: 0;
    outline: none;
    background-color: initial;
  }

  button {
    cursor: pointer;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background: linear-gradient(45deg, #000044, #000077);
      height: 100vh;
      overflow: hidden;
    }
  `}
`;

export default GlobalStyles;
