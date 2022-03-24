import React from "react"
import styled from "styled-components"
import "normalize.css/normalize.css"
import { GlobalStyles, theme } from "@styles"

const { colors } = theme

const Title = styled.h1`
  color: ${colors.darkPink};
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Title>Layout</Title>
      {children}
    </div>
  )
}

export default Layout
