import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const handleEdit = (id, nameEdit) => {
    if (nameEdit !== "") {
      editTask({ id, name: nameEdit });
      reset();
    } else {
      alert("Please enter a name");
      // closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(e.target.id.value, name);
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
      <Modal>
        <i className="fas fa-times" onClick={closeModal}></i>
        <form onSubmit={handleSubmit}>
          <ContainerInput className="idContainer">
            <i className="far fa-circle"></i>
            <Input type="text" name="id" id="idEdit" disabled></Input>
          </ContainerInput>
          <ContainerInput>
            <i className="far fa-circle"></i>
            <Input
              type="text"
              name="name"
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
