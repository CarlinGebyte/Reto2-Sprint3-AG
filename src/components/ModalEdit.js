import React from "react";
import { useDispatch } from "react-redux";
import { EditTask } from "../actions/taskActions";
import { useForm } from "../hooks/useForm";
import { ContainerInput, Input } from "../styles/CardStyles";
import { Modal, ModalBG } from "../styles/ModalStyles";

function ModalEdit() {
  const [formValue, handleInputChange, reset] = useForm({
    name: "",
  });

  const dispatch = useDispatch();
  const { name } = formValue;

  const editTask = (task) => {
    dispatch(EditTask(task));
  };
  const handleEdit = (id, status, nameEdit) => {
    if (nameEdit !== "") {
      editTask({ name: nameEdit, status, id });
      reset();
    } else {
      alert("Please enter a name");
      // closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(e.target.id.value, e.target.status.value, name);
    e.target.reset();
    reset();
    closeModal();
  };

  const closeModal = () => {
    const modalBg = document.querySelector("#modal-bg");
    modalBg.style.display = "none";
  };
  return (
    <ModalBG id="modal-bg">
      <Modal className="modal">
        <i className="fas fa-times" onClick={closeModal}></i>
        <form onSubmit={handleSubmit}>
          <ContainerInput className="idContainer">
            <i className="far fa-circle"></i>
            <Input type="text" name="id" id="idEdit" disabled></Input>
          </ContainerInput>
          <ContainerInput className="idContainer">
            <i className="far fa-circle"></i>
            <Input type="text" name="status" id="statusEdit" disabled></Input>
          </ContainerInput>
          <ContainerInput>
            <i className="far fa-circle"></i>
            <Input
              type="text"
              name="name"
              className="inputAdd"
              id="nameEdit"
              placeholder="Edit task"
              onChange={handleInputChange}
            ></Input>
          </ContainerInput>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </Modal>
    </ModalBG>
  );
}

export default ModalEdit;
