import todo from "./todos.js";
import project from "./projects.js";
import storage from "./storage.js";
import view from "./view.js";
//a array that sorts even number
const controller = function (data) {
  let storage = data;
  let viewInstance = view();
  let currentProject = storage.getProjects()[0];

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
    if (!storage.getProjects()[0].todoExists(todo)) {
      storage.getProjects()[0].addTodo(todo);
      viewInstance.addTodo(todo);
      //Add event listeners to newly added todo
      addEventListeners();
    } else {
      //TODO update view to say item exists.
    }
  }

  function addProject(project) {
    storage.addProject(project);
  }

  function removeToDo(project) {}

  function setup() {
    viewInstance.initialLoad(storage.getProjects()[0]);
    const form = document.getElementById("add-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      createTodo(formData);
      form.reset();
    });
    addEventListeners();
  }

  function addEventListeners() {
    //Delete
    const trash = document.getElementsByClassName("trash");
    [...trash].forEach((button) => {
      button.addEventListener("click", (event) => {
        //Remove that todoItem
        //REFACTOR
        let trashIndex = [...trash].indexOf(button);
        let todoToRemove = trash[trashIndex].parentNode;
        todoToRemove.parentNode.removeChild(todoToRemove);
        currentProject.removeTodo(trashIndex);
      });
    });

    //TODO add edit
    const edit = document.getElementsByClassName("edit");
    [...edit].forEach((button) => {
      let editIndex = [...edit].indexOf(button);
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
