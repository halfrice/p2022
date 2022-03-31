import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { About, Apps, Contact, Layout, Splash } from "@components"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Splash data={data.splash.edges[0].node} />
      <About data={data.about.edges[0].node} />
      <Apps data={data.apps.edges[0].node} />
      <Contact data={data.contact.edges[0].node} />
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
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, quality: 75)
              }
            }
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
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, quality: 75)
              }
            }
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
`
