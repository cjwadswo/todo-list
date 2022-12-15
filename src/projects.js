import todo from "./todos.js";

const project = function (title, desc) {
  let projectTitle = title;
  let projectDescription = desc;
  let todoList = [];

  const addTodo = function (todoItem) {
    //Check to see if todo title exists already.
    let exists = false;
    todoList.push(todoItem);
  };

  const todoExists = function (todoItem) {
    let exists = false;
    todoList.forEach((todo) => {
      if (todo.title == todoItem.title) {
        exists = true;
      }
    });
    return exists;
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
    todoExists,
  };
};

export default project;
