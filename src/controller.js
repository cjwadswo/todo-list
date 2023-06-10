import todo from "./todos.js";
import project from "./projects.js";
import storage from "./storage.js";
import view from "./view.js";
import { parse, format } from "date-fns";
import projectList from "./projectList.js";

//a array that sorts even number
const controller = function (data) {
  let viewInstance = view();
  let projects = data;
  let currentProject = projects.getCurrentProject();
  console.log("currentProject:", currentProject);
  console.log("projects:", projects);
  let editIndex;
  const todoListContainer = document.getElementById("todos-container");
  const editElement = document.getElementById("edit-todo");
  const trash = document.getElementsByClassName("trash");
  const edit = document.getElementsByClassName("edit");
  const projectsDom = document.getElementsByClassName("project");
  const addTodoButton = document.getElementById("add-form");
  const editSubmitBtn = document.getElementById("edit-form");
  const newProjectBtn = document.getElementById("new-project");
  const newProjectInput = document.getElementById("new-project-submit");
  const newProjectSubmit = document.getElementById("new-project-submit-btn");
  function createTodo(formData) {
    let title = formData.get("todo-title");
    let desc = formData.get("todo-description");
    let date = formData.get("date");
    date = format(new Date(date), "MM/dd/yyyy");
    //logic for getting priority
    let todoItem = todo(title, desc, date);
    return todoItem;
  }

  function createProject() {
    //Get title, desc from view
    return project(title, desc);
  }
  function changeProject(index) {
    projects.changeProject(index);
    currentProject = projects.getCurrentProject();
    update();
  }

  function addProject(project) {
    projects.addProject(project);
    update();
    // proj.addEventListener("click", (event) => {
    //   changeProject(projIndex);
    // });
  }

  function addTodo(todo) {
    if (!projects.getCurrentProject().todoExists(todo)) {
      projects.getCurrentProject().addTodo(todo);
      viewInstance.addTodo(todo);

      // attachTodoEventListeners();
      update();
    } else {
      //TODO update view to say item exists.
    }
  }

  function removeToDo(project) {}

  function editTodo(index, todoFormData) {
    let editedTodo = createTodo(todoFormData);
    currentProject.editTodo(index, editedTodo);
    update();
  }

  function update() {
    viewInstance.load(projects);
    attachTodoEventListeners();
  }

  function setup() {
    update();
    //Attach a onetime event listener to the "add" button for adding todos
    addTodoButton.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(addTodoButton);
      let newTodo = createTodo(formData);
      addTodo(newTodo);
      addTodoButton.reset();
    });

    editSubmitBtn.addEventListener("submit", (event) => {
      event.preventDefault();
      let todoIndex = editIndex;
      const formData = new FormData(editSubmitBtn);
      editTodo(todoIndex, formData);
      update();
      editSubmitBtn.reset();
    });

    newProjectBtn.addEventListener("click", () => {
      newProjectBtn.classList.toggle("hide");
      newProjectInput.classList.toggle("hide");
    });

    newProjectSubmit.addEventListener("click", () => {
      const inputElement = document.querySelector("#new-project-submit input");
      let projectName = inputElement.value;
      //Create a new project
      let newProject = project(projectName);
      //Add the project to the project list

      //Update the view
      addProject(newProject);
      newProjectBtn.classList.toggle("hide");
      newProjectInput.classList.toggle("hide");
    });
  }

  function attachTodoEventListeners() {
    //Delete
    handleTodoDeleteEventListeners();
    //Edit
    handleTodoEditEventListeners();
    //Add projects event listener
    handleProjectEventListeners();
  }

  function handleTodoDeleteEventListeners() {
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
  }

  function handleTodoEditEventListeners() {
    //Attach event listeners to each edit button that is added.
    [...edit].forEach((button) => {
      button.addEventListener("click", (event) => {
        //Toggle the edit todo element to be visible.
        toggleHide();
        //Populates the edit fields of the data with the current todo's data
        populateEditElementData(button);
      });
    });
  }

  function handleProjectEventListeners() {
    console.log(projectsDom);
    [...projectsDom].forEach((project) => {
      project.addEventListener("click", (event) => {
        let projIndex = [...projectsDom].indexOf(project);
        console.log(projIndex);
        changeProject(projIndex);
      });
    });
  }

  function toggleHide() {
    editElement.classList.toggle("hide");
    todoListContainer.classList.toggle("blur");
    editElement.classList.toggle("keepfocus");
  }

  function populateEditElementData(button) {
    editIndex = [...edit].indexOf(button);
    let todoToEdit = edit[editIndex].parentNode;
    let oldTitle = todoToEdit.querySelector(".title").textContent;
    let oldDesc = todoToEdit.querySelector(".description").textContent;
    let oldDate = todoToEdit.querySelector(".due-date").textContent;
    oldDate = format(new Date(oldDate), "yyyy-MM-dd");
    editElement.querySelector("#todo-due-date").value = oldDate;
    editElement.querySelector("#edit-title").value = oldTitle;
    editElement.querySelector("#edit-description").value = oldDesc;
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
