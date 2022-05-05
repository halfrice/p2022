import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { footerLinks } from "@config"
import { Modal } from "@components"
import { devices, mixins } from "@styles"
import { useModal } from "@utils"

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

const ModalButton = styled.div`
  margin: 0 1rem 0 0.5rem;
  padding: 0.5rem 0;
  color: var(--blue);

  :hover {
    cursor: pointer;
  }
`

const Footer = () => {
  const { isShowing, toggle } = useModal()

  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledCopyright>
          <span>© {new Date().getFullYear()} Neel Pedersen</span>
        </StyledCopyright>
        <Links>
          <ModalButton onClick={toggle}>Modal</ModalButton>
          {footerLinks &&
            footerLinks.map(({ name, url }, i) => (
              <StyledLink key={i} to={url}>
                <StyledButton>{name}</StyledButton>
              </StyledLink>
            ))}
        </Links>
      </StyledWrapper>
      <Modal isShowing={isShowing} hide={toggle} />
    </StyledFooter>
  )
}

export default Footer
