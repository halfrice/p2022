import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { mixins, theme } from "@styles"

const { flex } = mixins
const { colors } = theme

const StyledSplash = styled.div`
  ${flex.center};
  min-height: 100vh;
`
const Content = styled.div`
  margin: 0 3rem;
  width: 64rem;
`
const Name = styled.h1`
  color: ${colors.lightRed};
  margin-top: 0;
`
const Title = styled.h2`
  color: ${colors.blue};
`
const Location = styled.h3`
  color: ${colors.green};
`
const Quest = styled.div`
  color: ${colors.light};
`

const Splash = ({ data }) => {
  const { frontmatter, html } = data

  return (
    <StyledSplash>
      <Content>
        <Name>{frontmatter.name}</Name>
        <Title>{frontmatter.title}</Title>
        <Location>{frontmatter.location}</Location>
        <Quest dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </StyledSplash>
  )
}

Splash.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Splash
