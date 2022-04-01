import React, { useCallback, useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Link } from "react-scroll"
import styled from "styled-components"
import { Anchor } from "@components"
import { IconLogo } from "@components/icons"
import { navLinks } from "@config"
import { devices, mixins, theme } from "@styles"
import { throttle, useEventListener } from "@utils"

const { colors, fontSizes, nav } = theme
const { flex } = mixins

const StyledNav = styled.nav`
  ${flex.center};
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: ${nav.height};
  ${devices.tablet`height: ${nav.heightMobile};`};
  background-color: ${colors.black + "CC"};
  font-size: ${fontSizes.xxxs};
  letter-spacing: 0.03rem;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  overflow-y: hidden;
  transition: ${theme.transition};
  z-index: 9999;
  backdrop-filter: blur(1.25rem) saturate(180%);
  -webkit-backdrop-filter: blur(1.25rem) saturate(180%);
`
const StyledWrapper = styled.div`
  ${flex.start};
  ${devices.tablet`${flex.between};`};
  position: relative;
  width: 100%;
  height: 100%;
  .active {
    background-color: ${colors.black + "88"};
  }
`
const StyledLogo = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 0;
  svg {
    width: ${fontSizes.md};
    height: ${fontSizes.md};
    #n {
      stroke: ${colors.light};
    }
    #circle {
      stroke: ${colors.light};
    }
  }
`
const Links = styled.div`
  ${flex.center};
  height: 100%;
`
const StyledLink = styled(Link)`
  ${flex.center};
  height: 100%;
  margin: 0 0.5rem;
  color: ${colors.light};
`
const StyledButton = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 0;
`
const StyledAnchorLink = styled.div`
  ${flex.center};
  height: 100%;
  margin: 0 0.5rem;
  :hover {
    cursor: pointer;
  }
`
const StyledAnchorButton = styled.div`
  ${flex.center};
  margin: 0.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
`

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isAnchorOpen, setIsAnchorOpen] = useState(false)
  const [isDeviceMobile, setIsDeviceMobile] = useState(false)

  const toggleAnchor = () => {
    setIsAnchorOpen(!isAnchorOpen)
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
      if (!isDeviceMobile && isAnchorOpen) {
        toggleAnchor()
      }
    }, 100),
    [isDeviceMobile]
  )

  useEffect(() => {
    setDevice()
    const timeout = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timeout)
  }, [])

  useEventListener("resize", handleResize)

  return (
    <StyledNav>
      <StyledWrapper>
        {isDeviceMobile && (
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <StyledAnchorLink onClick={toggleAnchor}>
                  <StyledAnchorButton>
                    <Anchor isToggled={isAnchorOpen} />
                  </StyledAnchorButton>
                </StyledAnchorLink>
              </CSSTransition>
            )}
          </TransitionGroup>
        )}

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <StyledLink
                activeClass="active"
                duration={469}
                offset={-44}
                to={"splash"}
                smooth={true}
                spy={true}
              >
                <StyledLogo>
                  <IconLogo />
                </StyledLogo>
              </StyledLink>
            </CSSTransition>
          )}
        </TransitionGroup>

        {!isDeviceMobile && (
          <Links>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames="fade" timeout={3000}>
                    <StyledLink
                      activeClass="active"
                      duration={469}
                      offset={-44}
                      to={url}
                      smooth={true}
                      spy={true}
                      style={{ transitionDelay: `${(i + 1) * 59}ms` }}
                    >
                      <StyledButton>{name}</StyledButton>
                    </StyledLink>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </Links>
        )}
      </StyledWrapper>
    </StyledNav>
  )
}

export default Nav
