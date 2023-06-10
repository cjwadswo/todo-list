import controller from "./controller.js";
import projectList from "./projectList.js";

const view = function () {
  const todoListContainer = document.getElementById("todo-list");
  const projectListContainer = document.getElementById("project-list");

  function load(projectList) {
    let todos = projectList.getCurrentProject().getTodos();
    let projects = projectList.getProjects();
    todoListContainer.innerHTML = "";
    projectListContainer.innerHTML = "";

    todos.forEach((todo) => {
      addTodo(todo);
    });

    projects.forEach((project) => {
      addProject(project);
    });
  }

  function addTodo(todo) {
    todoListContainer.innerHTML += generateTodoHTML(todo);
  }

  function addProject(project) {
    let liElement = document.createElement("li");
    liElement.classList.add("project");
    let textNode = document.createTextNode(`${project.projectTitle}`);
    liElement.appendChild(textNode);
    projectListContainer.appendChild(liElement);
  }
  function generateTodoHTML(todo) {
    const title = sanitizeHTML(todo.title);
    const desc = sanitizeHTML(todo.desc);
    const dueDate = sanitizeHTML(todo.dueDate);

    return `
      <li class="todo-item">
        <input type="checkbox" class="completed">
        <div class="title">${title}</div>
        <div class="description">${desc}</div>
        <div class="due-date">${dueDate}</div>
        <div class="trash"><i class="fa-solid fa-trash-can"></i></div>
        <div class="edit"><i class="fa-sharp fa-solid fa-pen-to-square"></i></div>
      </li>
    `;
  }

  function sanitizeHTML(str) {
    const tempElement = document.createElement("div");
    tempElement.textContent = str;
    return tempElement.innerHTML;
  }

  return {
    load,
    addTodo,
  };
};

export default view;
