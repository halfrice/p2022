import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "@components"

const Title = styled.h1`
  color: var(--red);
`
const Description = styled.h3`
  color: var(--light);
`
const HomeLink = styled(Link)`
  color: var(--light-green);
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
