let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value !== '') {
    tasks.push(taskInput.value);
    updateTaskList(taskList);
    taskInput.value = '';
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  const taskList = document.getElementById('taskList');
  updateTaskList(taskList);
}

function updateTaskList(taskList) {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}
