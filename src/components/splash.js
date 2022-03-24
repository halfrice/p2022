import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from "@styles"

const { colors } = theme

const StyledSplash = styled.div`
  min-height: calc(100vh);
`
const Name = styled.h1`
  color: ${colors.lightRed};
`
const Title = styled.h2`
  color: ${colors.blue};
`
const Location = styled.h3`
  color: ${colors.green};
`
const Content = styled.p`
  color: ${colors.light};
`

const Splash = ({ data }) => {
  const { frontmatter, html } = data

  return (
    <StyledSplash>
      <Name>{frontmatter.name}</Name>
      <Title>{frontmatter.title}</Title>
      <Location>{frontmatter.location}</Location>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </StyledSplash>
  )
}

Splash.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Splash
