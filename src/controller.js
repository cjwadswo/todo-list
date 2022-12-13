import todo from "./todos.js";
import project from "./projects.js";
import storage from "./storage.js";
import view from "./view.js";
//a array that sorts even number
const controller = function (data) {
  let storage = data;
  let viewInstance = view();

  function createTodo(formData) {
    let title = formData.get("todo-title");
    let desc = formData.get("todo-description");
    let date = formData.get("date");
    //logic for getting priority
    let todoItem = todo(title, desc, date);
    addTodo(todoItem);
  }

  function createProject() {
    //Get title, desc from view
    return project(title, desc);
  }

  function addTodo(todo) {
    //TODO DEBUG THIS
    storage.getProjects()[0].addTodo(todo);
    viewInstance.addTodo(todo);
  }

  function addProject(project) {
    storage.addProject(project);
  }

  function removeToDo(project) {}

  function setup() {
    viewInstance.initialLoad(storage.getProjects()[0]);
    addEventListeners();
  }

  function addEventListeners() {
    const form = document.getElementById("add-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      createTodo(formData);
    });
  }

  return {
    storage,
    createTodo,
    createProject,
    addTodo,
    addProject,
    removeToDo,
    setup,
  };
};

export default controller;
