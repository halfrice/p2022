import React from "react"
import "normalize.css/normalize.css"
import { GlobalStyles } from "@styles"
import { Nav } from "@components"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {children}
    </div>
  )
}

export default Layout
