import { css } from "styled-components"
import devices from "./devices"

const mixins = {
  flex: {
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  },
  padding: {
    top: css`
      padding-top: 6rem;
      ${devices.phone`padding-top: 3rem;`};
    `,
    bottom: css`
      padding-bottom: 6rem;
      ${devices.phone`padding-bottom: 3rem;`};
    `,
  },
}

export default mixins
