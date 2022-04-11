import { createGlobalStyle } from "styled-components"
import theme from "./theme.yml"
import { devices } from "@styles"

const { colors, fonts, fontSizes } = theme

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.dark};
    font-family: ${fonts.lato};
    font-size: ${fontSizes.default};
    ${devices.tablet`font-size: ${fontSizes.sm};`};
    font-weight: 400;
    min-height: 100vh;

    &.blur {
      overflow: hidden;

      main > * {
        filter: blur(3px) brightness(0.8);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
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
    color: ${colors.dark};
    font-weight: 600;
  }

  a {
    color: ${colors.darkBlue};
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

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    pointer-events: none;
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
