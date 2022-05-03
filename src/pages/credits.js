import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Layout } from "@components"
import { mixins } from "@styles"

const { padding } = mixins

const StyledCredits = styled.section`
  ${padding.section};
  margin-top: var(--nav-height);

  @media (max-width: 600px) {
    marign-top: var(--nav-height-mobile);
  }

  h1 {
    margin-top: 0;
    color: var(--peach);
  }

  .content {
    color: var(--eigengrau);
  }
`

const CreditsPage = () => {
  const data = useStaticQuery(graphql`
    {
      credits: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/credits/" } }
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

  const { frontmatter, html } = data.credits.edges[0].node

  return (
    <Layout>
      <StyledCredits>
        <h1>{frontmatter.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </StyledCredits>
    </Layout>
  )
}

export default CreditsPage
