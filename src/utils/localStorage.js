export const obtenerLocaleStorage = () => {
  if (localStorage.getItem("tasks")) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return [];
  }
};

export const guardarLocaleStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
