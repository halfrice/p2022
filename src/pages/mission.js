import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Layout } from "@components"
import { mixins } from "@styles"

const { padding } = mixins

const StyledMission = styled.section`
  ${padding.section};
  margin-top: var(--nav-height);

  @media (max-width: 600px) {
    marign-top: var(--nav-height-mobile);
  }

  h1 {
    margin-top: 0;
    color: var(--purple);
  }

  .content {
    color: var(--eigengrau);
  }
`

const MissionPage = () => {
  const data = useStaticQuery(graphql`
    {
      mission: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/mission/" } }
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

  const { frontmatter, html } = data.mission.edges[0].node

  return (
    <Layout>
      <StyledMission>
        <h1>{frontmatter.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </StyledMission>
    </Layout>
  )
}

export default MissionPage
