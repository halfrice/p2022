import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { devices, mixins, Section, theme } from "@styles"
import { scrollReveal } from "@utils"
import { scrollRevealConfig } from "@config"

const { flex, padding } = mixins
const { colors } = theme

const StyledApps = styled(Section)`
  ${flex.center};
  flex-direction: column;
  margin-top: 0.75rem;
  margin-bottom: -0.75rem;
  padding-bottom: 0;
  background-color: ${colors.light};

  .apps-content {
    ${padding.sides};
    max-width: 64rem;
  }

  .apps-title {
    margin-top: 0;
  }

  .apps-description {
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
  }
`
const StyledAppsGridWrapper = styled.div`
  padding: 0.75rem;
  ${devices.phone`padding: 0.75rem 0;`};
  background-color: ${colors.white};
`
const StyledAppsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${devices.tablet`grid-template-columns: repeat(2, 1fr);`};
  ${devices.phone`grid-template-columns: repeat(1, 1fr);`};
  grid-gap: 0.75rem;
  ${devices.phone`grid-gap: 0.75 0rem;`};
`
const StyledApp = styled.div`
  width: 100%;
  padding: 0.75rem;
  background-color: ${colors.light};

  .app-image {
    max-height: 300px;
  }
`

const Apps = () => {
  const data = useStaticQuery(graphql`
    {
      apps: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/app/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, quality: 75)
                }
              }
            }
            html
          }
        }
      }
    }
  `)

  const apps = data.apps.edges

  const revealTitle = useRef(null)
  const revealContent = useRef(null)
  const revealApps = useRef([])

  useEffect(() => {
    scrollReveal.reveal(revealTitle.current, scrollRevealConfig(234))
    scrollReveal.reveal(revealContent.current, scrollRevealConfig(293))
    revealApps.current.forEach((ref, i) =>
      scrollReveal.reveal(ref, scrollRevealConfig((i + 2) * 117))
    )
  }, [])

  return (
    <StyledApps id="apps">
      <div className="apps-content">
        <h1 className="apps-title" ref={revealTitle}>
          Apps
        </h1>
        <div className="apps-description" ref={revealContent}>
          <p>
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail. Keeping your eye on the ball
            while performing a deep dive on the start-up mentality to derive
            convergence on cross-platform integration.
          </p>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI.
          </p>
          <p>
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions.
          </p>
        </div>
      </div>
      <StyledAppsGridWrapper>
        <StyledAppsGrid>
          {apps &&
            apps.map(({ node }, i) => {
              const { frontmatter, html } = node
              const image = getImage(frontmatter.image)

              return (
                <StyledApp key={i} ref={(app) => (revealApps.current[i] = app)}>
                  <h1>{frontmatter.title}</h1>
                  <GatsbyImage className="app-image" image={image} alt="" />
                  <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </StyledApp>
              )
            })}
        </StyledAppsGrid>
      </StyledAppsGridWrapper>
    </StyledApps>
  )
}

export default Apps
