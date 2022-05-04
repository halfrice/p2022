import React from "react"
import "normalize.css/normalize.css"
import styled from "styled-components"
import { GlobalStyles } from "@styles"
import { Footer, Head, Nav } from "@components"
import "typeface-lato"

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const isHome = location.pathname === "/"

  return (
    <StyledLayout>
      <Head />
      <GlobalStyles />
      <Nav isHome={isHome} />
      <main>
        {children}
        <Footer />
      </main>
    </StyledLayout>
  )
}

export default Layout
