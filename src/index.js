import "./style.css";
import project from "./projects.js";
import todo from "./todos.js";
import storage from "./storage.js";
import controller from "./controller.js";
import projectList from "./projectList";
//Hardcoded data
var project1 = project("Test1");
var project2 = project("Test 2");
// let defaultStorage = storage(project1);
let projects = projectList();

var todo1 = todo(
  "Project 1 todo",
  "This is my first todo item",
  "12/8/2022",
  "high",
  true
);
var todo2 = todo(
  "project 1 todo 2",
  "This is my second todo item",
  "12/8/2022",
  "high",
  true
);
var todo3 = todo(
  "Project 1 todo 3",
  "This is my second todo item",
  "12/8/2022",
  "high",
  true
);

var todo4 = todo(
  "Project 2 todo",
  "This is my first todo item",
  "12/8/2022",
  "high",
  true
);
var todo5 = todo(
  "project 2 todo 2",
  "This is my second todo item",
  "12/8/2022",
  "high",
  true
);
var todo6 = todo(
  "Project 2 todo 3",
  "This is my second todo item",
  "12/8/2022",
  "high",
  true
);

project1.addTodo(todo1);
project1.addTodo(todo2);
project1.addTodo(todo3);

projects.addProject(project1);
projects.addProject(project2);
let mainController = controller(projects);
mainController.setup();
