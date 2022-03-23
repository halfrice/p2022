import React from "react"
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
