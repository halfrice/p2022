import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { mixins, theme } from "@styles"
import {
  IconApple,
  IconGithub,
  IconGooglePlay,
  IconLink,
  IconYoutube,
} from "@components/icons"

const { flex } = mixins
const { colors, fontSizes } = theme

const StyledDownload = styled.div`
  ${flex.start};
  margin-left: -0.5rem;
`

const Link = styled.a`
  padding: 0.25rem 0.5rem;

  &:last-of-type {
    margin-right: 0;
  }

  &:focus,
  &:active,
  &:hover {
    opacity: 0.5;
  }

  svg {
    width: ${fontSizes.xxl} !important;
    height: ${fontSizes.xxl} !important;
  }
`

const Download = ({ links }) => {
  const { appleStore, github, googlePlay, url, youtube } = links

  return (
    <StyledDownload>
      {appleStore && (
        <Link
          href={appleStore}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Apple Store Link"
          style={{ fill: colors.darkerSlate }}
        >
          <IconApple />
        </Link>
      )}

      {googlePlay && (
        <Link
          href={googlePlay}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Google Play Link"
        >
          <IconGooglePlay />
        </Link>
      )}

      {youtube && (
        <Link
          href={youtube}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Youtube Link"
        >
          <IconYoutube />
        </Link>
      )}

      {github && (
        <Link
          href={github}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="GitHub Link"
          style={{ fill: "#4078c0" }}
        >
          <IconGithub />
        </Link>
      )}

      {url && (
        <Link
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Link"
          style={{ fill: colors.blue }}
        >
          <IconLink />
        </Link>
      )}
    </StyledDownload>
  )
}

Download.propTypes = {
  links: PropTypes.object.isRequired,
}

export default Download
