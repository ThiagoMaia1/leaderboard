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

  h1, h2, h3 {
    color: white;
  }

  *::-webkit-scrollbar {
    width: 0.5vw;
    left: -0.5vw;
    height: 95%;
  }
  
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #ffcc52;
    border-radius: 100px;
  }

  *::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
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
