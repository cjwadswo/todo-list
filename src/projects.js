import todo from "./todos.js";

const project = function (title) {
  let projectTitle = title;
  let todoList = [];

  const addTodo = function (todoItem) {
    //Check to see if todo title exists already.
    let exists = false;
    todoList.push(todoItem);
  };

  const editTodo = function (index, todoItem) {
    todoList[index] = todoItem;
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
  const removeTodo = function (indexToRemove) {
    todoList.splice(indexToRemove, 1);
  };

  const getTodos = function () {
    return todoList;
  };

  return {
    projectTitle,
    todoList,
    addTodo,
    editTodo,
    removeTodo,
    getTodos,
    todoExists,
  };
};

export default project;
