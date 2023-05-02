const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
  }
});
clearBtn.addEventListener("click", clearList);
todoList.addEventListener("change", toggleTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      const span = document.createElement("span");
      span.innerText = todoText;
      const color = document.getElementById("color").value;
      li.style.backgroundColor = color;
      li.appendChild(checkbox);
      li.appendChild(span);
      todoList.appendChild(li);
      todoInput.value = "";
    }
  }
  

function clearList() {
  todoList.innerHTML = "";
}

function toggleTodo(event) {
  const checkbox = event.target;
  const li = checkbox.parentElement;
  if (checkbox.checked) {
    li.classList.add("completed");
  } else {
    li.classList.remove("completed");
  }
}
