import { createStore, combineReducers } from "redux";
import { taskReducer } from "../reducers/taskReducer";
import {
  guardarLocaleStorage,
  obtenerLocaleStorage,
} from "../utils/localStorage";

const reducers = combineReducers({
  tasks: taskReducer,
});
const storageState = obtenerLocaleStorage();
console.log(storageState.tasks);
const store = createStore(
  reducers,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  guardarLocaleStorage({ tasks: store.getState().tasks});
});

export default store;
