import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { mixins, Section } from "@styles"

const { flex } = mixins

const AboutContainer = styled(Section)`
  ${flex.center};
  p {
    margin-top: 1rem;
  }
`
const StyledImage = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: 2rem;
  z-index: -1;
`
const Title = styled.h1`
  margin-top: 0;
`
const Content = styled.p``

const About = ({ data }) => {
  const { frontmatter, html } = data
  const image = getImage(frontmatter.image)

  return (
    <AboutContainer>
      <div>
        <Title>{frontmatter.title}</Title>
        <StyledImage image={image} alt="" />
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </AboutContainer>
  )
}

export default About
