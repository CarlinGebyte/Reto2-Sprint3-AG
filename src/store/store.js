import { createStore, combineReducers } from "redux";
import { taskReducer } from "../reducers/taskReducer";
import {
  guardarLocaleStorage,
  obtenerLocaleStorage,
} from "../utils/localStorage";

const reducers = combineReducers({
  task: taskReducer,
});
const storageState = obtenerLocaleStorage();
const store = createStore(
  reducers,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  guardarLocaleStorage({ citas: store.getState().citas });
});

export default store;
