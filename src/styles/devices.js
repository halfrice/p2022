import { css } from "styled-components"

const sizes = {
  desktop: 1199.98,
  tablet: 829.98,
  phone: 599.98,
}

export const devices = Object.keys(sizes).reduce((device, name) => {
  const size = sizes[name] / 16
  device[name] = (...args) => css`
    @media (max-width: ${size}rem) {
      ${css(...args)};
    }
  `
  return device
}, {})

export default devices
