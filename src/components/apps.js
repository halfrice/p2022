import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { mixins, Section } from "@styles"
import { scrollReveal } from "@utils"
import { scrollRevealConfig } from "@config"

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

  const revealTitle = useRef(null)
  const revealContent = useRef(null)

  useEffect(() => {
    scrollReveal.reveal(revealTitle.current, scrollRevealConfig(234))
    scrollReveal.reveal(revealContent.current, scrollRevealConfig(293))
  }, [])

  return (
    <AppsContainer id="apps">
      <div>
        <Title ref={revealTitle}>{frontmatter.title}</Title>
        <Content
          ref={revealContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </AppsContainer>
  )
}

export default Apps
