import React, { useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Link } from "gatsby"
import styled from "styled-components"
import { IconLogo } from "@components/icons"
import { navLinks } from "@config"
import { devices, mixins, theme } from "@styles"

const { colors, nav } = theme
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
  background-color: ${colors.black};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  overflow-y: hidden;
  transition: ${theme.transition};
  z-index: 9999;
`
const StyledWrapper = styled.div`
  ${flex.start};
  ${devices.tablet`${flex.between};`};
  position: relative;
  width: 100%;
  height: 100%;
`
const StyledLogo = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 0;
  svg {
    width: 18px;
    height: 18px;
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

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledNav>
      <StyledWrapper>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <StyledLink key={"home"} to="/">
                <StyledLogo>
                  <IconLogo />
                </StyledLogo>
              </StyledLink>
            </CSSTransition>
          )}
        </TransitionGroup>

        <Links>
          <TransitionGroup component={null}>
            {isMounted &&
              navLinks &&
              navLinks.map(({ url, name }, i) => (
                <CSSTransition key={i} classNames="fade" timeout={3000}>
                  <StyledLink
                    to={url}
                    style={{ transitionDelay: `${(i + 1) * 59}ms` }}
                  >
                    <StyledButton>{name.toUpperCase()}</StyledButton>
                  </StyledLink>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </Links>
      </StyledWrapper>
    </StyledNav>
  )
}

export default Nav
