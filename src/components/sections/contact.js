import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Social } from "@components"
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

  .contact-content {
    max-width: 64rem;

    .contact-title {
      margin-top: 0;
    }

    .contact-html {
      p {
        margin-top: 1rem;
      }
    }
  }
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
  const revealHtml = useRef(null)

  useEffect(() => {
    scrollReveal.reveal(revealTitle.current, scrollRevealConfig(234))
    scrollReveal.reveal(revealHtml.current, scrollRevealConfig(293))
  }, [])

  return (
    <StyledContact id="contact">
      <div className="contact-content">
        <h1 className="contact-title" ref={revealTitle}>
          {frontmatter.title}
        </h1>
        <div
          className="contact-html"
          ref={revealHtml}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Social />
      </div>
    </StyledContact>
  )
}

export default Contact
