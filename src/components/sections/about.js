import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { mixins, Section, theme } from "@styles"
import { scrollReveal } from "@utils"
import { scrollRevealConfig } from "@config"

const { flex, padding } = mixins
const { colors } = theme

const StyledAbout = styled(Section)`
  ${flex.center};
  margin-top: 0.75rem;
  ${padding.sides};
  background-color: ${colors.light};

  p {
    margin-top: 1rem;
  }
`
const StyledWrapper = styled.div`
  max-width: 64rem;
`
const StyledImageWrapper = styled.div`
  ${flex.center};
  margin: 0;
  padding: 0;
`
const StyledImage = styled(GatsbyImage)`
  width: 100%;
  max-height: 22rem;
`
const StyledTitle = styled.h1`
  color: ${colors.eigengrau};
  margin-top: 0;
`
const StyledContent = styled.p`
  margin-top: 1rem;
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      about: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              image {
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

  const { frontmatter, html } = data.about.edges[0].node
  const image = getImage(frontmatter.image)

  const revealTitle = useRef(null)
  const revealImage = useRef(null)
  const revealContent = useRef(null)

  useEffect(() => {
    scrollReveal.reveal(revealTitle.current, scrollRevealConfig(234))
    scrollReveal.reveal(revealImage.current, scrollRevealConfig(293))
    scrollReveal.reveal(revealContent.current, scrollRevealConfig(352))
  }, [])

  return (
    <StyledAbout id="about">
      <StyledWrapper>
        <StyledTitle ref={revealTitle}>{frontmatter.title}</StyledTitle>
        <StyledImageWrapper ref={revealImage}>
          <StyledImage image={image} alt="" />
        </StyledImageWrapper>
        <StyledContent
          ref={revealContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </StyledWrapper>
    </StyledAbout>
  )
}

export default About
