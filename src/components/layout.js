import React from "react"
import "normalize.css/normalize.css"
import { GlobalStyles } from "@styles"
import { Footer, Nav } from "@components"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
