import styled from "styled-components"
import mixins from "./mixins"

const { padding } = mixins

const Section = styled.section`
  ${padding.top};
  ${padding.bottom};
  margin: 0 auto;
  width: 100%;
`

export default Section
