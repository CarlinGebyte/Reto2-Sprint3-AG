import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { AddTask, DeleteTask, EditTask } from "../actions/taskActions";
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

function Card({ filter }) {
  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    status: "todo",
  });

  const { tasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    tasks.forEach((task) => {
      if (task.status === "done") {
        document.querySelector("#label" + task.id).classList.add("checked");
      }
    });
  }, [tasks]);

  const { name, status } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTask({ ...formValue, id: uuid() }));
    reset();
  };

  const deleteTask = (id) => {
    dispatch(DeleteTask(id));
  };

  const editTask = (task) => {
    dispatch(EditTask(task));
  };

  const openModal = (id, status, name) => {
    const modalBg = document.querySelector("#modal-bg");
    const idEdit = document.querySelector("#idEdit");
    const nameEdit = document.querySelector("#nameEdit");
    const statusEdit = document.querySelector("#statusEdit");
    modalBg.style.display = "flex";
    nameEdit.value = name;
    statusEdit.value = status;
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

  const clearCompleted = () => {
    const tasksToDelete = tasks.filter((task) => task.status === "done");
    tasksToDelete.forEach((task) => deleteTask(task.id));
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
                if (task.status === "todo") {
                  counter++;
                }
                switch (filter) {
                  case "all":
                    return (
                      <Task
                        id="edit"
                        className="edit task"
                        key={task.id}
                        onClick={(e) => {
                          console.log();
                          if (e.target.classList[2] === "edit") {
                            openModal(task.id, task.status, task.name);
                          } else {
                          }
                        }}
                      >
                        <label id={"label" + task.id}>
                          <input
                            type="checkbox"
                            className="filled-in"
                            id={task.id}
                            checked={task.status === "done" ? "checked" : ""}
                            onChange={(e) => {
                              if (e.target.checked) {
                                editTask({
                                  name: task.name,
                                  status: "done",
                                  id: task.id,
                                });
                                document
                                  .querySelector("#label" + task.id)
                                  .classList.add("checked");
                              } else {
                                editTask({
                                  name: task.name,
                                  status: "todo",
                                  id: task.id,
                                });
                                document
                                  .querySelector("#label" + task.id)
                                  .classList.remove("checked");
                              }
                            }}
                          />
                          <span>{task.name}</span>
                        </label>
                        <i
                          className="fas fa-times"
                          onClick={() => deleteTask(task.id)}
                        ></i>
                      </Task>
                    );
                  case "completed":
                    if (task.status === "done") {
                      return (
                        <Task
                          id="edit"
                          className="edit task"
                          key={task.id}
                          onClick={(e) => {
                            console.log();
                            if (e.target.classList[2] === "edit") {
                              openModal(task.id, task.status, task.name);
                            } else {
                            }
                          }}
                        >
                          <label className="checked">
                            <input
                              type="checkbox"
                              className="filled-in"
                              id={task.id}
                              checked={task.status === "done" ? "checked" : ""}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  editTask({
                                    name: task.name,
                                    status: "done",
                                    id: task.id,
                                  });
                                } else {
                                  editTask({
                                    name: task.name,
                                    status: "todo",
                                    id: task.id,
                                  });
                                }
                              }}
                            />
                            <span>{task.name}</span>
                          </label>
                          <i
                            className="fas fa-times"
                            onClick={() => deleteTask(task.id)}
                          ></i>
                        </Task>
                      );
                    }
                    return null;
                  case "todo":
                    if (task.status === "todo") {
                      return (
                        <Task
                          id="edit"
                          className="edit task"
                          key={task.id}
                          onClick={(e) => {
                            console.log();
                            if (e.target.classList[2] === "edit") {
                              openModal(task.id, task.status, task.name);
                            } else {
                            }
                          }}
                        >
                          <label>
                            <input
                              type="checkbox"
                              className="filled-in"
                              id={task.id}
                              checked={task.status === "done" ? "checked" : ""}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  editTask({
                                    name: task.name,
                                    status: "done",
                                    id: task.id,
                                  });
                                } else {
                                  editTask({
                                    name: task.name,
                                    status: "todo",
                                    id: task.id,
                                  });
                                }
                              }}
                            />
                            <span>{task.name}</span>
                          </label>
                          <i
                            className="fas fa-times"
                            onClick={() => deleteTask(task.id)}
                          ></i>
                        </Task>
                      );
                    }
                    return null;
                  default:
                    return null;
                }
              })}
            </div>
            <ActionsBar className="actionsBar">
              <Left className="left">{counter} items left</Left>
              <FooterNav className="footerNav" id="footerNav">
                <Link to="/">
                  <span>All</span>
                </Link>
                <Link to="/todo">
                  <span>Active</span>
                </Link>
                <Link to="/completed">
                  <span>Completed</span>
                </Link>
              </FooterNav>
              <a href="#?" onClick={clearCompleted}>
                <span>Clear completed</span>
              </a>
            </ActionsBar>
          </div>
          <FooterNav className="footerNav footerNavMobile">
            <Link to="/">
              <span>All</span>
            </Link>
            <Link to="/todo">
              <span>Active</span>
            </Link>
            <Link to="/completed">
              <span>Completed</span>
            </Link>
          </FooterNav>
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
