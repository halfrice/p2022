import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Layout, Splash } from "@components"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Splash data={data.splash.edges[0].node} />
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
  }
`
