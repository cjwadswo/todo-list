import controller from "./controller.js";

const view = function () {
  let loadTodoList = () => {
    let todoList = controller.getTodos();
  };

  let loadStorage = () => {};
};
