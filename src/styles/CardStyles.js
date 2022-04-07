import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  height: 80%;
  width: 40%;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
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
  img {
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
  border-bottom: 1px solid #fff;
  label {
    color: hsl(234, 39%, 85%);
  }
  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin-top: 5%;
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
  background-color: hsl(235, 24%, 19%);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  color: hsl(234, 11%, 52%);
  a {
    color: hsl(234, 11%, 52%);
  }
  a:hover {
    color: hsl(236, 33%, 92%);
  }
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
  background-image: "\f111" !important;
  height: 40px !important;
  border-bottom: 1px solid transparent !important;
  box-shadow: none !important;
  border-radius: 5px !important;
  color: #fff !important;
  background-color: hsl(235, 24%, 19%) !important;
  border: 1px solid hsl(235, 24%, 19%) !important;
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
  color: hsl(234, 11%, 52%);
  padding: 0 40px;
`;
