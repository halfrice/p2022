import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledAnchor = styled.div`
  width: var(--anchor-width);
  height: var(--anchor-width);
  background-color: transparent;
  z-index: 9999;
`

const StyledBars = styled.div`
  position: absolute;
  top: 50%;
  width: var(--anchor-width);
  height: 1px;
  border-radius: 3px;

  &:before,
  &:after {
    content: "";
    display: block;
    background-color: var(--light);
    position: absolute;
    width: var(--anchor-width);
    height: 1px;
  }

  &:before {
    top: ${(props) => (props.isToggled ? "0" : "-0.20rem")};
    transform: rotate(${(props) => (props.isToggled ? "45deg" : "0deg")});
    transition: ${(props) =>
      props.isToggled ? "var(--anchor-before-active)" : "var(--anchor-before)"};
  }

  &:after {
    bottom: ${(props) => (props.isToggled ? "0" : "-0.20rem")};
    transform: rotate(${(props) => (props.isToggled ? "-45deg" : "0deg")});
    transition: ${(props) =>
      props.isToggled ? "var(--anchor-after-active)" : "var(--anchor-after)"};
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
