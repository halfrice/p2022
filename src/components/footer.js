import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { footerLinks } from "@config"
import { devices, mixins } from "@styles"

const { flex } = mixins

const StyledFooter = styled.div`
  ${flex.center};
  height: var(--footer-height);
  ${devices.tablet`height: var(--footer-height-mobile)`};
  background-color: var(--lighter-gray);
  color: var(--eigengrau);
  font-size: var(--font-size-sm);
`

const StyledWrapper = styled.footer`
  ${flex.between};
  ${devices.tablet`${flex.center}`};
  flex-direction: row;
  ${devices.tablet`flex-direction: column`};
  ${devices.tablet`padding: 3rem 0`};
  ${devices.phone`padding: 1.5rem 0`};
  width: 100%;
  height: 100%;
`

const StyledCopyright = styled.div`
  ${flex.start};
  margin: 0 0.5rem;
`

const Links = styled.div`
  ${flex.center};
  ${devices.tablet`${flex.start}`};
  ${devices.tablet`margin-bottom: -1rem`};
`

const StyledLink = styled(Link)`
  ${flex.center};
  height: 100%;
  margin: 0 0.5rem;
`

const StyledButton = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 0;
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
