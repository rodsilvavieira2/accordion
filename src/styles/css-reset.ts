import { createGlobalStyle } from 'styled-components'

export const CssReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background-color: ${(props) => props.theme.colors.body};
    color: ${(props) => props.theme.colors.text};
  }

  html {
    font-size: 93.75%;

    @media screen and (min-width:968px) {
      font-size: 100%;
    }
  }
`
