import controller from "./controller.js";

const view = function () {
  const todoItemHTML = `<li class="todo-item">
  <input type="checkbox" class="completed"></input>
  <div class="title"></div>
  <div class="description"></div>
  <div class="due-date"></div>
</li>`;

  const todoListContainer = document.getElementById("todo-list");
  function load(project) {
    let todos = project.getTodos();
    todoListContainer.innerHTML = "";
    todos.forEach((todo) => {
      addTodo(todo);
    });
  }

  function addTodo(todo) {
    todoListContainer.innerHTML += generateTodoHTML(todo);
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
