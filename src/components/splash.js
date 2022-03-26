import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { mixins, theme } from "@styles"

const { flex } = mixins
const { colors } = theme

const StyledSplash = styled.div`
  ${flex.center};
  min-height: 100vh;
`
const StyledTransitionGroup = styled(TransitionGroup)`
  width: 100%;
  min-width: 16rem;
  max-width: 64rem;
  margin: 0 3rem;
`
const StyledName = styled.h1`
  color: ${colors.lightRed};
  margin-top: 0;
`
const StyledTitle = styled.h2`
  color: ${colors.blue};
`
const StyledLocation = styled.h3`
  color: ${colors.green};
`
const StyledQuest = styled.div`
  color: ${colors.light};
`

const Splash = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)

  const { frontmatter, html } = data

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 469)
    return () => clearTimeout(timeout)
  }, [])

  const name = () => (
    <StyledName style={{ transitionDelay: "0ms" }}>
      {frontmatter.name}
    </StyledName>
  )
  const title = () => (
    <StyledTitle style={{ transitionDelay: "469ms" }}>
      {frontmatter.title}
    </StyledTitle>
  )
  const location = () => (
    <StyledLocation style={{ transitionDelay: "938ms" }}>
      {frontmatter.location}
    </StyledLocation>
  )
  const quest = () => (
    <StyledQuest
      style={{ transitionDelay: "1407ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
  const items = [name, title, location, quest]

  return (
    <StyledSplash>
      <StyledTransitionGroup>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fade" timeout={3000}>
              {item}
            </CSSTransition>
          ))}
      </StyledTransitionGroup>
    </StyledSplash>
  )
}

Splash.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Splash
