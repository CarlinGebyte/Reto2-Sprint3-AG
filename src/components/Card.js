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

  const { tasks } = useSelector((state) => state.task);

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

  return (
    <div>
      <CardContainer>
        <Content>
          <CardHeader>
            <h4>TODO</h4>
            <img alt="Theme"></img>
          </CardHeader>
          <div>
            {/* <ContainerInput> */}
            <ContainerInput as="form" onSubmit={handleSubmit}>
              <i className="far fa-circle"></i>
              <Input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Add a new task"
                onChange={handleInputChange}
              ></Input>
            </ContainerInput>
            {/* </ContainerInput> */}
          </div>
          <div>
            {tasks.map((task) => (
              <Task
                id="edit"
                key={task.id}
                onClick={(e) => {
                  console.log(e.target.id);
                  if (e.target.id === "edit") {
                    openModal(task.id, task.name);
                  } else {
                  }
                }}
              >
                <label>
                  <input type="checkbox" className="filled-in" id={task.id} />
                  <span>{task.name}</span>
                </label>
                <i
                  className="fas fa-times"
                  onClick={() => deleteTask(task.id)}
                ></i>
              </Task>
            ))}
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
      <ModalEdit editTask={"name"} id={1}></ModalEdit>
    </div>
  );
}

export default Card;
