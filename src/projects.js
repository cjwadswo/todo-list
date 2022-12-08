import todo from "./todos.js";

// var project1 = project("Test1", "This is a test");
// var todo1 = todo(
//   "My first todo",
//   "This is my first todo item",
//   "12/8/2022",
//   "high",
//   true
// );
// var todo2 = todo(
//   "My sec todo",
//   "This is my second todo item",
//   "12/8/2022",
//   "high",
//   true
// );
// var todo3 = todo(
//   "My third todo",
//   "This is my second todo item",
//   "12/8/2022",
//   "high",
//   true
// );

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

  return { projectTitle, projectDescription, todoList, addTodo, removeTodo };
};

export default project;
