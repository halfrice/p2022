import React from "react"
import PropTypes from "prop-types"
import {
  IconApple,
  IconCodepen,
  IconFolder,
  IconGithub,
  IconGitlab,
  IconGoogle,
  IconGooglePlay,
  IconLink,
  IconLinkedin,
  IconLogo,
  IconTwitter,
  IconYoutube,
} from "@components/icons"

const Icon = ({ name }) => {
  switch (name) {
    case "Apple":
      return <IconApple />
    case "Codepen":
      return <IconCodepen />
    case "Folder":
      return <IconFolder />
    case "Github":
      return <IconGithub />
    case "Gitlab":
      return <IconGitlab />
    case "Google":
      return <IconGoogle />
    case "GooglePlay":
      return <IconGooglePlay />
    case "Link":
      return <IconLink />
    case "Linkedin":
      return <IconLinkedin />
    case "Logo":
      return <IconLogo />
    case "Twitter":
      return <IconTwitter />
    case "Youtube":
      return <IconYoutube />
    default:
      return <IconLogo />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
