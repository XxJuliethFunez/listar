// Obtener elementos del DOM
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Cargar tareas al iniciar
document.addEventListener('DOMContentLoaded', loadTasks);

// Función para agregar una tarea
function addTask() {
  if (taskInput.value.trim() === '') {
    alert('Por favor, escribe una tarea.');
    return;
  }

  // Crear elemento de lista
  const li = document.createElement('li');
  li.textContent = taskInput.value;

  // Botón para eliminar tarea
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitar que el evento se propague al li
    li.remove();
    saveTasks();
  });

  li.appendChild(deleteBtn);

  // Marcar tarea como completada
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks();
  });

  taskList.appendChild(li);
  taskInput.value = '';
  saveTasks();
}

// Función para guardar tareas en localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#task-list li').forEach((li) => {
    tasks.push({
      text: li.textContent.replace('Eliminar', '').trim(),
      completed: li.classList.contains('completed'),
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Función para cargar tareas desde localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      li.remove();
      saveTasks();
    });

    li.appendChild(deleteBtn);

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
      saveTasks();
    });

    taskList.appendChild(li);
  });
}