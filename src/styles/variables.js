import { css } from "styled-components"

const variables = css`
  :root {
    --black: #000000;
    --dark: #03030a;
    --eigengrau: #16161d;
    --dark-gray: #202027;
    --gray: #404047;
    --light-gray: #606067;
    --lighter-gray: #f0f0f7;
    --light: #f6f6f9;
    --lighter: #fafafd;
    --white: #ffffff;
    --red: #ff0064;
    --light-red: #ff2768;
    --dark-pink: #ff1d96;
    --pink: #ff82ff;
    --peach: #ff6573;
    --orange: #ffbd84;
    --yellow: #eeff00;
    --green: #00ff00;
    --light-green: #9ffcbb;
    --aqua: #00ffe5;
    --light-blue: #00e0ff;
    --blue: #168eff;
    --dark-blue: #0969f9;
    --dark-purple: #9a2dff;
    --purple: #ef1fff;

    --font-sans: "Lato", "Roboto", "Open Sans", -apple-system, system-ui,
      sans-serif, "Arial";

    --font-size-xxs: 0.75rem;
    --font-size-xs: 0.8125rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-xxl: 1.375rem;
    --font-size-h3: 2rem;
    --font-size-h2: 2.5rem;
    --font-size-h1: 3rem;

    --nav-height: 2.75rem;
    --nav-height-mobile: 3rem;

    --footer-height: 5.5rem;
    --footer-height-mobile: 6rem;

    --easing: cubic-bezier(0.37, 0, 0.63, 1);
    --transition: all 234ms cubic-bezier(0.37, 0, 0.63, 1);

    --anchor-width: 1.25rem;
    --anchor-before: top 234ms ease-in 117ms, transform 234ms ease-in;
    --anchor-before-active: top 117ms ease-out, transform 293ms ease-in;
    --anchor-after: bottom 234ms ease-in 117ms, transform 234ms ease-in;
    --anchor-after-active: bottom 117ms ease-out, transform 293ms ease-in;
  }
`

export default variables
