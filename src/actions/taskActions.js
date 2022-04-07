import { types } from "../types/types";

export const AddTask = (task) => {
  return { type: types.add, payload: task };
};

export const EditTask = (task) => {
  return { type: types.edit, payload: task };
};

export const DeleteTask = (id) => {
  return { type: types.delete, payload: id };
};
