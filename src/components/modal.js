import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { mixins } from "@styles"

const { padding } = mixins

const StyledModal = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    ${padding.section};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    z-index: 9999;

    .modal {
      background-color: #000000ee;
      position: relative;
      ${padding.section};
      border-radius: 3px;
      max-width: 100%;
      height: 100%;
      color: var(--light);

      .header {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`

const StyledX = styled.div`
  background-color: transparent;
  z-index: 9999;
  padding: 0.5rem;
  border: 1px solid var(--light);
  border-radius: 3px;

  :hover {
    cursor: pointer;
  }
`

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <StyledModal>
          <div className="overlay" />
          <div
            className="wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="header">
                <StyledX onClick={hide}>
                  <span>X</span>
                </StyledX>
              </div>
              <p>Modal test</p>
            </div>
          </div>
        </StyledModal>,
        document.body
      )
    : null

export default Modal
