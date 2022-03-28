import React from "react"
import styled from "styled-components"
import { mixins, Section } from "@styles"

const { flex } = mixins

const AboutContainer = styled(Section)`
  ${flex.center};
  p {
    margin-top: 1rem;
  }
`
const Title = styled.h1`
  margin-top: 0;
`
const Content = styled.p``

const About = ({ data }) => {
  const { frontmatter, html } = data

  return (
    <AboutContainer>
      <div>
        <Title>{frontmatter.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </AboutContainer>
  )
}

export default About
