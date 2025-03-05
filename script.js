// Obtener elementos del DOM
document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  if (!taskInput || !taskList) {
    console.error('No se encontraron los elementos del DOM.');
    return;
  }

  loadTasks();

  // Función para agregar una tarea
  window.addTask = function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Por favor, escribe una tarea.');
      return;
    }

    createTaskElement(taskText, false);
    taskInput.value = '';
    saveTasks();
  };

  // Función para guardar tareas en localStorage
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach((li) => {
      const taskText = li.querySelector('.task-text').textContent;
      const completed = li.classList.contains('completed');
      tasks.push({ text: taskText, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Función para cargar tareas desde localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = ''; // Limpiar lista antes de cargar
    tasks.forEach((task) => createTaskElement(task.text, task.completed));
  }

  // Función para crear un elemento de tarea
  function createTaskElement(text, completed) {
    const li = document.createElement('li');
    if (completed) {
      li.classList.add('completed');
    }

    // Crear el span para el texto de la tarea
    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;
    li.appendChild(span);

    // Botón para eliminar tarea
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el clic en el botón active el evento de la tarea
      li.remove();
      saveTasks();
    });

    li.appendChild(deleteBtn);

    // Evento para marcar como completada
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
      saveTasks();
    });

    taskList.appendChild(li);
  }
});
