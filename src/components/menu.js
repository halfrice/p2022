import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-scroll"
import styled from "styled-components"
import { navLinks } from "@config"
import { mixins, theme } from "@styles"

const { colors, fontSizes } = theme
const { flex } = mixins

const StyledMenu = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  font-size: ${fontSizes.xxs};
  transition: ${theme.transition};
  transform: translateY(${(props) => (props.isMenuOpen ? 0 : -100)}vh);
  visibility: ${(props) => (props.isMenuOpen ? "visible" : "hidden")};
  z-index: -9980;

  .menu-content {
    ${flex.start};
    width: 100%;
    background-color: ${colors.dark};
  }
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${theme.nav.heightMobile} 0 1rem 0;
  transition: ${theme.transition};
`
const StyledLink = styled(Link)`
  ${flex.start};
  height: 100%;
  margin: 0 0.5rem;
  border-top: 1px solid ${colors.gray};
  color: ${colors.light};

  span {
    margin: 0.5rem;
    padding: 0.5rem 0;
    pointer-events: none;
  }
`

const Menu = ({ isMenuOpen, toggleMenu }) => {
  const handleMenuClick = (e) => {
    const target = e.target
    const targetIsLink = target.tagName && target.tagName === "A"
    const targetIsMenuOverlay =
      target.classList && target.classList[0].includes("StyledMenu")

    if (targetIsLink || targetIsMenuOverlay) {
      toggleMenu()
    }
  }

  return (
    <StyledMenu isMenuOpen={isMenuOpen} onClick={handleMenuClick}>
      <div className="menu-content">
        <StyledLinks>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <StyledLink
                duration={469}
                key={i}
                offset={-48}
                to={url}
                smooth={true}
                spy={true}
                onClick={handleMenuClick}
              >
                <span>{name}</span>
              </StyledLink>
            ))}
        </StyledLinks>
      </div>
    </StyledMenu>
  )
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default Menu
