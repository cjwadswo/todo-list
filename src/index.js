import "./style.css";
import project from "./projects.js";
import todo from "./todos.js";
import storage from "./storage.js";
import controller from "./controller.js";
//Hardcoded data
var project1 = project("Test1", "This is a test");
let defaultStorage = storage(project1);
let mainController = controller(defaultStorage);
// const form = document.getElementById("add-form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);
//   console.log(formData.get("todo-title"));
// });

var todo1 = todo(
  "My first todo",
  "This is my first todo item",
  "12/8/2022",
  "high",
  true
);
var todo2 = todo(
  "My sec todo",
  "This is my second todo item",
  "12/8/2022",
  "high",
  true
);
var todo3 = todo(
  "My third todo",
  "This is my second todo item",
  "12/8/2022",
  "high",
  true
);

project1.addTodo(todo1);
project1.addTodo(todo2);
project1.addTodo(todo3);
mainController.setup();
// console.log(mainController);
