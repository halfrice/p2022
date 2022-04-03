import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { mixins, Section, theme } from "@styles"
import { scrollReveal } from "@utils"
import { scrollRevealConfig } from "@config"

const { colors } = theme
const { flex, padding } = mixins

const StyledApps = styled(Section)`
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
const StyledTitle = styled.h1`
  margin-top: 0;
`
const StyledContent = styled.p`
  margin-top: 1rem;
`

const Apps = ({ data }) => {
  const { frontmatter, html } = data

  const revealTitle = useRef(null)
  const revealContent = useRef(null)

  useEffect(() => {
    scrollReveal.reveal(revealTitle.current, scrollRevealConfig(234))
    scrollReveal.reveal(revealContent.current, scrollRevealConfig(293))
  }, [])

  return (
    <StyledApps id="apps">
      <StyledWrapper>
        <StyledTitle ref={revealTitle}>{frontmatter.title}</StyledTitle>
        <StyledContent
          ref={revealContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </StyledWrapper>
    </StyledApps>
  )
}

export default Apps
