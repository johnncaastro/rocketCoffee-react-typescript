import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  :root {
    --background: #000;
    --text-color: #FFF;
    --button: #8257E5;
    --border: #29292E;
    --border-menu-mobile: #A8A8B3;
    --text-color-menu-mobile: #E1E1E6;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 70%;
    }
    @media(max-width: 720px) {
      font-size: 65%;
    }

    @media(max-width: 660px) {
      font-size: 55%;
    }

    @media(max-width: 560px) {
      font-size: 35%;
    }
  }

  body {
    font-family: 'Manrope', sans-serif;
    background-color: var(--background);
    color: var(--text-color);
    text-align: center;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
    background: none;
  }

  h1, span {
    font-weight: 700;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }
`