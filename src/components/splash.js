import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { devices, mixins, Section, theme } from "@styles"

const { flex } = mixins
const { colors, fontSizes } = theme

const StyledSplash = styled(Section)`
  ${flex.center};
  /* height: calc(100vh - 6rem); */
  height: 44rem;
  max-height: 44rem;
  position: relative;
  overflow: hidden;
`
const StyledTransitionGroup = styled(TransitionGroup)`
  width: 100%;
  text-align: center;
`
const StyledImage = styled(GatsbyImage)`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  z-index: -9999;
`
const StyledName = styled.h1`
  margin: 0;
  color: ${colors.light};
  font-size: ${fontSizes.h1};
  ${devices.tablet`font-size: 2.884rem;`};
  ${devices.phone`font-size: 2.667rem;`};
  text-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`
const StyledTitle = styled.h2`
  color: ${colors.dark};
  font-size: ${fontSizes.h3};
  ${devices.tablet`font-size: ${fontSizes.xxxl};`};
  ${devices.phone`font-size: ${fontSizes.xxl};`};
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`
const StyledLocation = styled.h3`
  margin-bottom: 0.5rem;
  color: ${colors.eigengrau};
  font-size: ${fontSizes.xxxl};
  ${devices.tablet`font-size: ${fontSizes.xxl};`};
  ${devices.phone`font-size: ${fontSizes.xl};`};
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`
const StyledQuest = styled.div`
  color: ${colors.eigengrau};
  font-size: ${fontSizes.md};
  ${devices.tablet`font-size: ${fontSizes.sm};`};
  ${devices.phone`font-size: ${fontSizes.xs};`};
`

const Splash = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)

  const { frontmatter, html } = data
  const image = getImage(frontmatter.image)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 938)
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
      <StyledImage image={image} alt="" />
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
