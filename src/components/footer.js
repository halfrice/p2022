import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { footerLinks } from "@config"
import { devices, mixins, theme } from "@styles"

const { footer, colors } = theme
const { flex } = mixins

const StyledFooter = styled.div`
  ${flex.center};
  height: ${footer.height};
  ${devices.tablet`height: ${footer.heightMobile};`};
  background-color: ${colors.lighterGray};
  color: ${colors.eigengrau};
`
const StyledWrapper = styled.footer`
  ${flex.between};
  ${devices.tablet`${flex.center};`};
  flex-direction: row;
  ${devices.tablet`flex-direction: column;`};
  ${devices.tablet`padding: 3rem 0;`};
  ${devices.phone`padding: 1.5rem 0;`};
  width: 100%;
  height: 100%;
`
const StyledCopyright = styled.div`
  ${flex.start};
  margin: 0 0.25rem;
`
const Links = styled.div`
  ${flex.center};
  ${devices.tablet`${flex.start};`};
  ${devices.tablet`margin-bottom: -0.5rem`};
`
const StyledLink = styled(Link)`
  ${flex.center};
  height: 100%;
  margin: 0 0.25rem;
`
const StyledButton = styled.div`
  margin: 0.375rem;
  padding: 0.375rem 0;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledCopyright>
          <span>© {new Date().getFullYear()} Neel Pedersen</span>
        </StyledCopyright>
        <Links>
          {footerLinks &&
            footerLinks.map(({ name, url }, i) => (
              <StyledLink key={i} to={url}>
                <StyledButton>{name}</StyledButton>
              </StyledLink>
            ))}
        </Links>
      </StyledWrapper>
    </StyledFooter>
  )
}

export default Footer
