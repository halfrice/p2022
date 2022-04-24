import React, { useCallback, useEffect, useState } from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import { Anchor, Menu } from "@components"
import { IconLogo } from "@components/icons"
import { navLinks } from "@config"
import { devices, mixins } from "@styles"
import { throttle, useEventListener } from "@utils"

const { flex } = mixins

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: var(--nav-height);
  ${devices.tablet`height: var(--nav-height-mobile)`};
  background-color: #000000cc;
  font-size: var(--font-size-xxs);
  letter-spacing: 0.03rem;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: var(--transition);
  backdrop-filter: blur(1.25rem) saturate(180%);
  -webkit-backdrop-filter: blur(1.25rem) saturate(180%);
  z-index: 9999;

  .nav-content {
    ${flex.start};
    ${devices.tablet`${flex.between};`};
    width: 100%;
    height: 100%;
  }
`

const StyledLinks = styled.div`
  ${flex.center};
  height: 100%;
`

const StyledLink = styled(Link)`
  ${flex.center};
  height: 100%;
  margin: 0 0.5rem;
  color: var(--light);

  span {
    margin: 0.5rem;
    padding: 0.5rem 0;

    svg {
      width: var(--font-size-lg);
      height: var(--font-size-lg);

      #n {
        stroke: var(--light);
      }

      #circle {
        stroke: var(--light);
      }
    }
  }
`

const StyledAnchorLink = styled.div`
  ${flex.center};
  height: 100%;
  margin: 0 0.5rem;

  :hover {
    cursor: pointer;
  }

  span {
    margin: 0.5rem;
    padding: 0.5rem 0;
    cursor: pointer;
    text-transform: none;
    overflow: visible;
  }
`

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDeviceMobile, setIsDeviceMobile] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const setDevice = () => {
    if (typeof window === "undefined") return
    if (window.innerWidth <= 830) {
      setIsDeviceMobile(true)
    } else {
      setIsDeviceMobile(false)
    }
  }

  const handleResize = useCallback(
    throttle(() => {
      setDevice()
      if (!isDeviceMobile && isMenuOpen) {
        toggleMenu()
      }
    }, 100),
    [isDeviceMobile]
  )

  useEffect(() => {
    setDevice()
  }, [])

  useEventListener("resize", handleResize)

  return (
    <StyledNav>
      <div className="nav-content">
        {isDeviceMobile && (
          <StyledAnchorLink onClick={toggleMenu}>
            <span>
              <Anchor isToggled={isMenuOpen} />
            </span>
          </StyledAnchorLink>
        )}

        {isDeviceMobile && (
          <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        )}

        <StyledLink
          duration={469}
          offset={-44}
          to={"splash"}
          smooth={true}
          spy={true}
        >
          <span>
            <IconLogo />
          </span>
        </StyledLink>

        {!isDeviceMobile && (
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
                >
                  <span>{name}</span>
                </StyledLink>
              ))}
          </StyledLinks>
        )}
      </div>
    </StyledNav>
  )
}

export default Nav
