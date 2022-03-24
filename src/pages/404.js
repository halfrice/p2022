import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "@components"
import { theme } from "@styles"

const { colors } = theme

const Title = styled.h1`
  color: ${colors.red};
`
const Description = styled.h3`
  color: ${colors.light};
`
const HomeLink = styled(Link)`
  color: ${colors.lightGreen};
  text-decoration: underline;
`

const NotFoundPage = () => (
  <Layout>
    <Title>404</Title>
    <Description>Page Not Found</Description>
    <HomeLink to="/">Home</HomeLink>
  </Layout>
)

export default NotFoundPage
