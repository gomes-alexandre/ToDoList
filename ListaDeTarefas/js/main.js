document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Adicionar nova tarefa
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value;
  if (taskText === "") return;

  addTask(taskText);
  saveTaskToLocalStorage(taskText);
  taskInput.value = ""; // Limpa o campo de entrada
});

// Função para adicionar tarefa ao DOM
function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.addEventListener("click", () => {
    removeTask(taskText);
    taskList.removeChild(li);
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);
}

// Salvar tarefa no localStorage
function saveTaskToLocalStorage(taskText) {
  let tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Carregar tarefas do localStorage
function loadTasksFromLocalStorage() {
  let tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  tasks.forEach((taskText) => addTask(taskText));
}

// Remover tarefa do localStorage
function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}