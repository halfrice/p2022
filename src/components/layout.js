import React from "react"
import "normalize.css/normalize.css"
import { GlobalStyles } from "@styles"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <h1>Layout</h1>
      {children}
    </div>
  )
}

export default Layout
