import { types } from "../types/types";

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case types.edit:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case types.delete:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
