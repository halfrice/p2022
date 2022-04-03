import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { devices, mixins, Section, theme } from "@styles"

const { flex } = mixins
const { colors, fontSizes } = theme

const StyledSplash = styled(Section)`
  ${flex.center};
  height: 44rem;
  max-height: 44rem;
  position: relative;
  overflow: hidden;
`
const StyledTransitionGroup = styled(TransitionGroup)`
  width: 100%;
  text-align: center;
`
const StyledBackground = styled(GatsbyImage)`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  z-index: -9999;
`
const StyledAvatarWrapper = styled.div`
  ${flex.center};
`
const StyledAvatar = styled(GatsbyImage)`
  margin: 0 0 0.5rem 0;
  padding: 0;
  border-radius: 50%;
  width: 16rem;
  ${devices.tablet`width: 14rem;`};
  ${devices.phone`width: 12rem;`};
  height: 16rem;
  ${devices.tablet`height: 14rem;`};
  ${devices.phone`height: 12rem;`};
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
`
const StyledName = styled.h1`
  margin: 0;
  padding: 0;
  color: ${colors.light};
  font-size: ${fontSizes.h1};
  ${devices.tablet`font-size: ${fontSizes.h2};`};
  ${devices.phone`font-size: ${fontSizes.h3};`};
  text-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`
const StyledTitle = styled.h2`
  margin: 0 0 0.25rem;
  padding: 0;
  color: ${colors.dark};
  font-size: ${fontSizes.h3};
  ${devices.tablet`font-size: ${fontSizes.xxxl};`};
  ${devices.phone`font-size: ${fontSizes.xxl};`};
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`
const StyledLocation = styled.h3`
  margin: 0 0 0.5rem;
  padding: 0;
  color: ${colors.dark};
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
  p {
    margin: 0;
    padding: 0;
  }
`

const Splash = () => {
  const data = useStaticQuery(graphql`
    {
      splash: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/splash/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              title
              location
              background {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 75)
                }
              }
              avatar {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 75)
                }
              }
            }
            html
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.splash.edges[0].node
  const avatarImage = getImage(frontmatter.avatar)
  const backgroundImage = getImage(frontmatter.background)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 938)
    return () => clearTimeout(timeout)
  }, [])

  const avatar = () => (
    <StyledAvatarWrapper>
      <StyledAvatar
        image={avatarImage}
        alt="Avatar"
        style={{ transitionDelay: "0ms" }}
      />
    </StyledAvatarWrapper>
  )
  const name = () => (
    <StyledName style={{ transitionDelay: "469ms" }}>
      {frontmatter.name}
    </StyledName>
  )
  const title = () => (
    <StyledTitle style={{ transitionDelay: "938ms" }}>
      {frontmatter.title}
    </StyledTitle>
  )
  const location = () => (
    <StyledLocation style={{ transitionDelay: "1407ms" }}>
      {frontmatter.location}
    </StyledLocation>
  )
  const quest = () => (
    <StyledQuest
      style={{ transitionDelay: "1876ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  const items = [avatar, name, title, location, quest]

  return (
    <StyledSplash id="splash">
      <StyledBackground image={backgroundImage} alt="" />
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

export default Splash
