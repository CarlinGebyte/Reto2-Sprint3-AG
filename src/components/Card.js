import React from "react";
import {
  ActionsBar,
  CardContainer,
  CardFooter,
  CardHeader,
  ContainerInput,
  Content,
  FooterNav,
  Input,
  Left,
  Task,
} from "../styles/CardStyles";

function Card() {
  return (
    <CardContainer>
      <Content>
        <CardHeader>
          <h4>TODO</h4>
          <img alt="Theme"></img>
        </CardHeader>
        <div>
          {/* <ContainerInput> */}
          <ContainerInput>
            <i className="far fa-circle"></i>
            <Input type="text" placeholder="Add a new task"></Input>
          </ContainerInput>
          {/* </ContainerInput> */}
        </div>
        <div>
          <Task>
            <label>
              <input type="checkbox" className="filled-in" id="hola" />
              <span>Hola</span>
            </label>
          </Task>
          <Task>
            <label>
              <input type="checkbox" className="filled-in" id="hola" />
              <span>Hola</span>
            </label>
          </Task>
          <Task>
            <label>
              <input type="checkbox" className="filled-in" id="hola" />
              <span>Hola</span>
            </label>
          </Task>
        </div>
        <ActionsBar>
          <Left>5 items left</Left>
          <FooterNav>
            <a href="#?">
              <span>All</span>
            </a>
            <a href="#?">
              <span>Active</span>
            </a>
            <a href="#?">
              <span>Completed</span>
            </a>
          </FooterNav>
          <a href="#?">
            <span>Clear completed</span>
          </a>
        </ActionsBar>
      </Content>
      <CardFooter>
        <p>Drag and drop to reoder list</p>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;
