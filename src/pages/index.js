import React from "react"
import styled from "styled-components"
import { Layout } from "@components"
import { theme } from "@styles"

const { colors } = theme

const Title = styled.h1`
  color: ${colors.aqua};
`

const IndexPage = () => {
  return (
    <Layout>
      <Title>P2022</Title>
    </Layout>
  )
}

export default IndexPage
