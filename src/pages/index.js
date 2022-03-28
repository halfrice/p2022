import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { About, Apps, Layout, Splash } from "@components"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Splash data={data.splash.edges[0].node} />
      <About data={data.about.edges[0].node} />
      <Apps data={data.apps.edges[0].node} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const indexPageQuery = graphql`
  {
    splash: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/splash/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
            title
            location
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
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
    apps: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/apps/" } }) {
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
`
