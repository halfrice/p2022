import React from "react"
import styled from "styled-components"
import { mixins, Section } from "@styles"

const { flex } = mixins

const AppsContainer = styled(Section)`
  ${flex.center};
  p {
    margin-top: 1rem;
  }
`
const Title = styled.h1`
  margin-top: 0;
`
const Content = styled.p``

const Apps = ({ data }) => {
  const { frontmatter, html } = data

  return (
    <AppsContainer>
      <div>
        <Title>{frontmatter.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </AppsContainer>
  )
}

export default Apps
