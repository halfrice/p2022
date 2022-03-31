import React, { useEffect, useRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { mixins, Section } from "@styles"
import { scrollReveal } from "@utils"
import { scrollRevealConfig } from "@config"

const { flex } = mixins

const AboutContainer = styled(Section)`
  ${flex.center};
  p {
    margin-top: 1rem;
  }
`
const StyledImageWrapper = styled.div`
  margin: 0;
  padding: 0;
`
const StyledImage = styled(GatsbyImage)`
  width: 100%;
  /* margin-bottom: 2rem; */
  z-index: -1;
`
const Title = styled.h1`
  margin-top: 0;
`
const Content = styled.p`
  margin-top: 1rem;
`

const About = ({ data }) => {
  const { frontmatter, html } = data
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
    <AboutContainer>
      <div>
        <Title ref={revealTitle}>{frontmatter.title}</Title>
        <StyledImageWrapper ref={revealImage}>
          <StyledImage image={image} alt="" />
        </StyledImageWrapper>
        <Content
          ref={revealContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </AboutContainer>
  )
}

export default About
