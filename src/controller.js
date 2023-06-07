import todo from "./todos.js";
import project from "./projects.js";
import storage from "./storage.js";
import view from "./view.js";
import { parse, format } from "date-fns";
//a array that sorts even number
const controller = function (data) {
  let storage = data;
  let viewInstance = view();
  let currentProject = storage.getProjects()[0];
  const todoListContainer = document.getElementById("todos-container");
  const editElement = document.getElementById("edit-todo");

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
    if (!currentProject.todoExists(todo)) {
      currentProject.addTodo(todo);
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
    const editSubmitBtn = document.getElementById("edit-submit");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      createTodo(formData);
      form.reset();
    });
    editSubmitBtn.addEventListener("submit", (event) => {});
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
      button.addEventListener("click", (event) => {
        //Toggle the edit todo element to be visible.
        editElement.classList.toggle("hide");
        todoListContainer.classList.toggle("blur");
        editElement.classList.toggle("keepfocus");
        //Add an event listener to the edit-submit button
        let editIndex = [...edit].indexOf(button);
        let todoToEdit = edit[editIndex].parentNode;
        let oldTitle = todoToEdit.querySelector(".title").textContent;
        let oldDesc = todoToEdit.querySelector(".description").textContent;
        let oldDate = todoToEdit.querySelector(".due-date").textContent;
        oldDate = parse(oldDate, "MM/dd/yyyy", new Date());
        oldDate = format(oldDate, "yyyy-MM-dd");
        editElement.querySelector("#todo-due-date").value = oldDate;
        editElement.querySelector("#edit-title").value = oldTitle;
        editElement.querySelector("#edit-description").value = oldDesc;
      });
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
