document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("input-task");
  const addTaskBtn = document.getElementById("add-task");
  const listContainer = document.getElementById("list-container");

  addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === "") return;
    let newTask = document.createElement("li");
    newTask.innerHTML = `
      <span class="task-text">${taskInput.value}</span>
      <button class="delete-btn">Delete</button>
      <button class="toggle-btn">Completed</button>
    `;
    listContainer.appendChild(newTask);
    taskInput.value = "";
    const deleteBtn = newTask.querySelector(".delete-btn");
    const toggleBtn = newTask.querySelector(".toggle-btn");

    deleteBtn.addEventListener("click", () => {
      newTask.remove();
    });

    toggleBtn.addEventListener("click", () => {
      newTask.classList.toggle("completed");
      if (toggleBtn.textContent === "Completed") {
        toggleBtn.textContent = "incomplete";
      } else {
        toggleBtn.textContent = "Completed";
      }
    });
  });
});
