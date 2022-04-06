import styled from "styled-components";

export const HeaderContainer = styled.header`
  ${({ dark }) =>
    dark
      ? `
  background-image: url(https://raw.githubusercontent.com/CarlinGebyte/Reto2-Sprint3-AG/main/src/assets/img/bg-desktop-dark.jpg);
  @media (max-width: 768px) {
    background-image: url(https://raw.githubusercontent.com/CarlinGebyte/Reto2-Sprint3-AG/main/src/assets/img/bg-mobile-dark.jpg);
  }
  `
      : ` 
  background-image: url(https://raw.githubusercontent.com/CarlinGebyte/Reto2-Sprint3-AG/main/src/assets/img/bg-desktop-light.jpg);
  @media (max-width: 768px) {
    background-image: url(https://raw.githubusercontent.com/CarlinGebyte/Reto2-Sprint3-AG/main/src/assets/img/bg-mobile-light.jpg);
  }
`}
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  height: 37vh;
  width: 100%;
  z-index: -1;
`;
