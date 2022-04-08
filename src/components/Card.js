import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { AddTask, DeleteTask } from "../actions/taskActions";
import { useForm } from "../hooks/useForm";
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
import ModalEdit from "./ModalEdit";

function Card() {
  const [formValue, handleInputChange, reset] = useForm({
    name: "",
  });

  const { tasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const { name } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTask({ ...formValue, id: uuid() }));
    reset();
  };

  const deleteTask = (id) => {
    dispatch(DeleteTask(id));
  };

  const openModal = (id, name) => {
    const modalBg = document.querySelector("#modal-bg");
    const idEdit = document.querySelector("#idEdit");
    const nameEdit = document.querySelector("#nameEdit");
    modalBg.style.display = "flex";
    nameEdit.value = name;
    idEdit.value = id;
  };

  const toDark = () => {
    const ligthIcon = document.querySelector("#LightTheme");
    ligthIcon.style.display = "none";
    const darkIcon = document.querySelector("#DarkTheme");
    darkIcon.style.display = "block";
    const body = document.querySelector("body");
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  };
  const toLight = () => {
    const darkIcon = document.querySelector("#DarkTheme");
    darkIcon.style.display = "none";
    const ligthIcon = document.querySelector("#LightTheme");
    ligthIcon.style.display = "block";
    const body = document.querySelector("body");
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  };

  let counter = 0;

  return (
    <div>
      <CardContainer>
        <Content>
          <CardHeader className="cardHeader">
            <h4 className="toDoH4">TODO</h4>
            <img
              id="DarkTheme"
              className="DarkTheme"
              alt="DarkTheme"
              onClick={toLight}
            ></img>
            <img
              id="LightTheme"
              className="LightTheme"
              alt="LightTheme"
              onClick={toDark}
            ></img>
          </CardHeader>
          <div>
            <ContainerInput
              className="containerInput"
              as="form"
              onSubmit={handleSubmit}
            >
              <i className="far fa-circle"></i>
              <Input
                className="inputAdd"
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Add a new task"
                onChange={handleInputChange}
              ></Input>
            </ContainerInput>
          </div>
          <div className="containerTasks">
            <div>
              {tasks.map((task) => {
                counter++;
                return (
                  <Task
                    id="edit"
                    className="edit task"
                    key={task.id}
                    onClick={(e) => {
                      console.log();
                      if (e.target.classList[2] === "edit") {
                        openModal(task.id, task.name);
                      } else {
                      }
                    }}
                  >
                    <label>
                      <input
                        type="checkbox"
                        className="filled-in"
                        id={task.id}
                      />
                      <span>{task.name}</span>
                    </label>
                    <i
                      className="fas fa-times"
                      onClick={() => deleteTask(task.id)}
                    ></i>
                  </Task>
                );
              })}
            </div>
            <ActionsBar className="actionsBar">
              <Left className="left">{counter} items left</Left>
              <FooterNav className="footerNav">
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
          </div>
        </Content>
        <CardFooter className="cardFooter">
          <p>Drag and drop to reoder list</p>
        </CardFooter>
      </CardContainer>
      <ModalEdit className="modalEdit"></ModalEdit>
    </div>
  );
}

export default Card;
