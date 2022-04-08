import styled from "styled-components";

export const ModalBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: none;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .fa-times {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  form {
    width: 80% !important;
  }
  .idContainer {
    display: none;
  }
`;
