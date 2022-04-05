import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Icon } from "@components/icons"
import { devices, mixins, theme } from "@styles"
import { socialMedia } from "@config"
import { scrollReveal } from "@utils"
import { scrollRevealConfig } from "@config"

const { colors } = theme
const { flex } = mixins

const StyledSocial = styled.div`
  ${flex.center};
  margin: 2rem 0 0 0;
`

const StyledSocialGrid = styled.div`
  display: inline-grid;
  grid-template-columns: 1 1fr;
  grid-template-rows: auto;
  margin: 0 auto;

  a {
    ${flex.start};
    padding: 0.5rem 0;
    min-height: 3rem;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.5;
    }

    svg {
      fill: ${colors.darkBlue};
      width: 2rem;
      ${devices.tablet`width: 1.75rem;`};
      height: 2rem;
      ${devices.tablet`height: 1.75rem;`};
    }
  }
`

const StyledSocialUsername = styled.div`
  ${flex.start};
  padding: 0.5rem;
  margin-left: 0.5rem;
  color: ${(props) => (props.color ? props.color : colors.darkBlue)};
`

const Social = () => {
  const revealContainer = useRef(null)

  useEffect(() => {
    scrollReveal.reveal(revealContainer.current, scrollRevealConfig())
  }, [])

  return (
    <StyledSocial ref={revealContainer}>
      <StyledSocialGrid>
        {socialMedia &&
          socialMedia.map(({ name, url, color, username }, i) => (
            <div key={i}>
              <a
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                <Icon name={name} />
                <StyledSocialUsername color={color}>
                  {username}
                </StyledSocialUsername>
              </a>
            </div>
          ))}
      </StyledSocialGrid>
    </StyledSocial>
  )
}

export default Social
