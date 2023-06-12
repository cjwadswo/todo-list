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

// var todo1 = todo(
//   "Project 1 todo",
//   "This is my first todo item",
//   "12/8/2022",
//   "high",
//   true
// );
// var todo2 = todo(
//   "project 1 todo 2",
//   "This is my second todo item",
//   "12/8/2022",
//   "high",
//   true
// );
// var todo3 = todo(
//   "Project 1 todo 3",
//   "This is my second todo item",
//   "12/8/2022",
//   "high",
//   true
// );

// var todo4 = todo(
//   "Project 2 todo",
//   "This is my first todo item",
//   "12/8/2022",
//   "high",
//   true
// );
// var todo5 = todo(
//   "project 2 todo 2",
//   "This is my second todo item",
//   "12/8/2022",
//   "high",
//   true
// );
// var todo6 = todo(
//   "Project 2 todo 3",
//   "This is my second todo item",
//   "12/8/2022",
//   "high",
//   true
// );

// project1.addTodo(todo1);
// project1.addTodo(todo2);
// project1.addTodo(todo3);
// project2.addTodo(todo4);
// project2.addTodo(todo5);
// project2.addTodo(todo6);
// projects.addProject(project1);
// projects.addProject(project2);
projects.deleteProject(0);
let storedProject = localStorage.getItem("projects");
// console.log("parsed JSON: ", JSON.parse(storedProject));
storedProject = JSON.parse(storedProject);
console.log("storedProject", storedProject);
//Go through the JSON and add the projects one by one
//Create a new projectList
console.log("storedProject.projects", storedProject.projects);
//For each project
storedProject.projects.forEach((proj) => {
  //Create a new project
  let newProj = project(proj.projectTitle);

  //Add the todos from the project to the newly created project
  let newTodos = proj.todoList;
  newTodos.forEach((todoItem) => {
    let newTodo = todo(
      todoItem.title,
      todoItem.desc,
      todoItem.dueDate,
      todoItem.priority,
      todoItem.completed
    );
    newProj.addTodo(newTodo);
  });
  projects.addProject(newProj);
  //Add the proj to the projectList
});
// projects = storedProject ? JSON.parse(storedProject) : projects;
let mainController = controller(projects);
mainController.setup();
