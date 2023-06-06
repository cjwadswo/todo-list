import controller from "./controller.js";

const view = function () {
  const todoItemHTML = `<li class="todo-item">
  <input type="checkbox" class="completed"></input>
  <div class="title"></div>
  <div class="description"></div>
  <div class="due-date"></div>
</li>`;

  const todoListContainer = document.getElementById("todo-list");
  function initialLoad(project) {
    let todos = project.getTodos();
    todos.forEach((todo) => {
      addTodo(todo);
    });
  }

  function addTodo(todo) {
    todoListContainer.innerHTML += generateTodoHTML(todo);
  }

  function generateTodoHTML(todo) {
    return `<li class="todo-item">
  <input type="checkbox" class="completed"></input>
  <div class="title">${todo.title}</div>
  <div class="description">${todo.desc}</div>
  <div class="due-date">${todo.dueDate}</div>
  <div class="trash"><i class="fa-solid fa-trash-can"></i></div>
  <div class="edit"><i class="fa-sharp fa-solid fa-pen-to-square"></i></div>
</li>`;
  }

  return {
    initialLoad,
    addTodo,
  };
};

export default view;
