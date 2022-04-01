import { css } from "styled-components"
import devices from "./devices"

const mixins = {
  flex: {
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    between: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    start: css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `,
  },
  padding: {
    top: css`
      padding-top: 2rem;
      ${devices.phone`padding-top: 1rem;`};
    `,
    bottom: css`
      padding-bottom: 2rem;
      ${devices.phone`padding-bottom: 1rem;`};
    `,
    sides: css`
      padding-left: 3rem;
      ${devices.tablet`padding-left: 1.5rem;`};
      ${devices.phone`padding-left: 1rem;`};
      padding-right: 3rem;
      ${devices.tablet`padding-right: 1.5rem;`};
      ${devices.phone`padding-right: 1rem;`};
    `,
  },
}

export default mixins
