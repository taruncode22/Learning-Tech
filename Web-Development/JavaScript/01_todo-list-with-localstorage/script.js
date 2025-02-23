document.addEventListener("DOMContentLoaded", () => {
  // Element grbbed and stored in variable
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Pushing tasks into the Array (tasks) and recalling any tasks stored in the local storage

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = ""; //clear input
    console.log(tasks);
  });
  // As soon as the page loads we want to read from the local storage, grab all the tasks, store them inside the array, then run a loop to read all the individual task in the array and then call method renderTask to render every task in the array as a list items
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      tasks = tasks.filter((t) => t.id === task.id);
      li.remove(); //Revomes the task on pressing delete button when id of eventlister is same as the task id 
      saveTasks();
    });

    todoList.appendChild(li);
  }
  // fuction to add tasks to the local Storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
