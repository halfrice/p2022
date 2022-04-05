import React from "react"
import PropTypes from "prop-types"
import {
  IconCodepen,
  IconGithub,
  IconGitlab,
  IconGoogle,
  IconLinkedin,
  IconLogo,
  IconTwitter,
} from "@components/icons"

const Icon = ({ name }) => {
  switch (name) {
    case "Codepen":
      return <IconCodepen />
    case "Github":
      return <IconGithub />
    case "Gitlab":
      return <IconGitlab />
    case "Google":
      return <IconGoogle />
    case "Linkedin":
      return <IconLinkedin />
    case "Logo":
      return <IconLogo />
    case "Twitter":
      return <IconTwitter />
    default:
      return <IconLogo />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
