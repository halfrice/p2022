import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from "@styles"

const { anchor, colors } = theme

const StyledAnchor = styled.div`
  width: ${anchor.width};
  height: ${anchor.width};
  background-color: transparent;
  z-index: 9999;
`
const StyledBars = styled.div`
  position: absolute;
  top: 50%;
  width: ${anchor.width};
  height: 1px;
  border-radius: 3px;
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${colors.light};
    position: absolute;
    width: ${anchor.width};
    height: 1px;
  }
  &:before {
    top: ${(props) => (props.isToggled ? `0` : `-0.20rem`)};
    transform: rotate(${(props) => (props.isToggled ? `45deg` : `0deg`)});
    transition: ${(props) =>
      props.isToggled ? anchor.beforeActive : anchor.before};
  }
  &:after {
    bottom: ${(props) => (props.isToggled ? `0` : `-0.20rem`)};
    transform: rotate(${(props) => (props.isToggled ? `-45deg` : `0deg`)});
    transition: ${(props) =>
      props.isToggled ? anchor.afterActive : anchor.after};
  }
`

const Anchor = (props) => {
  const { isToggled } = props
  return (
    <StyledAnchor>
      <StyledBars isToggled={isToggled} />
    </StyledAnchor>
  )
}

Anchor.propTypes = {
  isToggled: PropTypes.bool.isRequired,
}

export default Anchor
