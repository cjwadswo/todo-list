import todo from "./todos.js";
import project from "./projects.js";
import storage from "./storage.js";

const controller = function () {
  let projectData = storage.getProjects();

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
};
