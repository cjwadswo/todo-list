import todo from "./todos.js";
import project from "./projects.js";
import storage from "./storage.js";
import view from "./view.js";
//a array that sorts even number
const controller = function (data) {
  let storage = data;
  let viewInstance = view();

  function createTodo() {
    //Get title, desc, duedate. priorty, and completed from view.
    return todo(title, desc, dueDate, priority, completed);
  }

  function createProject() {
    //Get title, desc from view
    return project(title, desc);
  }

  function addToDo(project) {
    let todoItem = createTodo();
    project.addToDo(todoItem);
  }

  function addProject(project) {
    projectData.addProject(project);
  }

  function removeToDo(project) {}

  function setup() {
    viewInstance.initialLoad(storage.getProjects()[0]);
  }

  return {
    storage,
    createTodo,
    createProject,
    addToDo,
    addProject,
    removeToDo,
    setup,
  };
};

export default controller;
