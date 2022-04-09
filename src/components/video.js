import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledVideo = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;

  iframe {
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = (props) => {
  const { url, title } = props
  return (
    <StyledVideo>
      <iframe src={url} title={title} allowFullScreen />
    </StyledVideo>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Video
