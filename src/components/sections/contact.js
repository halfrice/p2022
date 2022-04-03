import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { mixins, Section, theme } from "@styles"
import { scrollReveal } from "@utils"
import { scrollRevealConfig } from "@config"

const { flex, padding } = mixins
const { colors } = theme

const StyledContact = styled(Section)`
  ${flex.center};
  margin: 0.75rem 0;
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
  margin: 1rem;
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      contact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/contact/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.contact.edges[0].node

  const revealTitle = useRef(null)
  const revealContent = useRef(null)

  useEffect(() => {
    scrollReveal.reveal(revealTitle.current, scrollRevealConfig(234))
    scrollReveal.reveal(revealContent.current, scrollRevealConfig(293))
  }, [])

  return (
    <StyledContact id="contact">
      <StyledWrapper>
        <StyledTitle ref={revealTitle}>{frontmatter.title}</StyledTitle>
        <StyledContent
          ref={revealContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </StyledWrapper>
    </StyledContact>
  )
}

export default Contact
