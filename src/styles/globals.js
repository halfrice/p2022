import { createGlobalStyle } from "styled-components"
import theme from "./theme.yml"

const { colors } = theme

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors.eigengrau};
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.lightRed};
    font-weight: 600;
  }
`
export default GlobalStyles
