import { createGlobalStyle } from "styled-components"
import { devices } from "@styles"
import variables from "./variables"

const GlobalStyles = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    background-color: var(--white);
    color: var(--dark);
    font-family: var(--font-sans);
    font-size: var(--font-size-md);
    ${devices.tablet`font-size: var(--font-size-sm);`};
    font-weight: 400;
    min-height: 100vh;

    &.blur {
      overflow: hidden;

      main > * {
        filter: blur(2px) brightness(0.8);
        transition: var(--transition);
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
    color: var(--dark);
    font-weight: 600;
  }

  a {
    color: var(--dark-blue);
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
    transition: opacity 469ms var(--easing);
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 469ms var(--easing);
  }
`
export default GlobalStyles
