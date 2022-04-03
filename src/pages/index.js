import React from "react"
import { About, Apps, Contact, Layout, Splash } from "@components"

const IndexPage = () => {
  return (
    <Layout>
      <Splash />
      <About />
      <Apps />
      <Contact />
    </Layout>
  )
}

export default IndexPage
