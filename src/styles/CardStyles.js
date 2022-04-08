import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  height: 80%;
  width: 50%;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  /* border-radius: 10px; */
  /* box-shadow: 0px 0px 10px #000; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  h4 {
    font-weight: 900;
    letter-spacing: 15px;
  }
  img.LightTheme {
    content: url(https://raw.githubusercontent.com/CarlinGebyte/Reto2-Sprint3-AG/c2f3ca6eb6c5a7a406cc0554e1615bf6c148bf36/src/assets/img/icon-moon.svg);
  }
  img.DarkTheme {
    content: url(https://raw.githubusercontent.com/CarlinGebyte/Reto2-Sprint3-AG/f2cfb1553db07c52a13700a0e1a1a40c40a5abf9/src/assets/img/icon-sun.svg);
  }
`;

export const Task = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: space-between;
  background-color: hsl(235, 24%, 19%);
  padding: 20px 20px;
  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  i.fa-times {
    position: absolute;
    top: 50%;
    right: 20px;
    font-size: 22px;
    transform: translateY(-50%);
    color: #5a5a5a;
  }
  i.fa-times:hover {
    cursor: pointer;
    color: #fff;
  }
`;
export const ActionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 20px;
  font-size: 14px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Left = styled.span`
  width: 23%;
`;

export const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  position: relative;
  margin-bottom: 5%;
  i.fa-circle {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    color: #5a5a5a;
  }
`;

export const Input = styled.input`
  font-size: 18px !important;
  width: 100% !important;
  height: 40px !important;
  border-bottom: 1px solid transparent !important;
  box-shadow: none !important;
  border-radius: 5px !important;

  padding: 10px 20px !important;
  font-family: "Josefin Sans" !important;
  font-size: 18px !important;
  margin: 0 !important;
  padding-left: 55px !important;

  &:focus {
    caret-color: hsl(220, 98%, 61%);
    outline: none;
  }
`;

export const CardFooter = styled.div`
  text-align: center;
  font-size: 13px;
  padding: 0 40px;
`;
