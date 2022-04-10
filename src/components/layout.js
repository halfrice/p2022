import React from "react"
import "normalize.css/normalize.css"
import { GlobalStyles } from "@styles"
import { Footer, Head, Nav } from "@components"
import "typeface-lato"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <div id="root">
        <GlobalStyles />
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
