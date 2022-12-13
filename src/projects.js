import todo from "./todos.js";

const project = function (title, desc) {
  let projectTitle = title;
  let projectDescription = desc;
  let todoList = [];

  const addTodo = function (todoItem) {
    todoList.push(todoItem);
  };

  const removeTodo = function (todoItem) {
    let indexToRemove = todoList.indexOf(todoItem);
    if (indexToRemove == -1) return;
    todoList.splice(indexToRemove, 1);
  };

  const getTodos = function () {
    return todoList;
  };

  return {
    projectTitle,
    projectDescription,
    todoList,
    addTodo,
    removeTodo,
    getTodos,
  };
};

export default project;
