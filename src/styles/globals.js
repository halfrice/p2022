import { createGlobalStyle } from "styled-components"
import theme from "./theme.yml"

const { colors } = theme

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.eigengrau};
    font-weight: 400;
    min-height: 100vh;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.lightRed};
    font-weight: 600;
  }

  a {
    color: inherit;
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      opacity: 0.75;
    }
  }

  .fade-enter {
    opacity: 0;
    transition: opacity 938ms ${theme.easing};
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 938ms ${theme.easing};
  }
`
export default GlobalStyles
