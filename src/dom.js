// src/dom.js
export default function DomController(app) {
    const projectsContainer = document.getElementById('projects-container');
    const todosContainer = document.getElementById('todos-container');
    const projectTitle = document.getElementById('current-project-title');
    const addProjectBtn = document.getElementById('add-project-btn');
    const addTodoBtn = document.getElementById('add-todo-btn');

    let activeProjectIndex = 0;

    // Event Listener for Adding a Project
    addProjectBtn.addEventListener('click', () => {
        const projectName = prompt("Enter new project name:");
        if (projectName && projectName.trim() !== "") {
            app.addProject(projectName.trim());
            render();
        }
    });

    // Event Listener for Adding a Todo
    addTodoBtn.addEventListener('click', () => {
        const projects = app.getProjects();
        const currentProject = projects[activeProjectIndex];
        if (!currentProject) return;

        const title = prompt("Enter todo title:");
        if (!title || title.trim() === "") return;

        const description = prompt("Enter description:") || "";
        const dueDate = prompt("Enter due date (e.g., 2026-06-01):") || "No date";
        const priority = prompt("Enter priority (Low, Medium, High):") || "Normal";
        const notes = prompt("Enter any extra notes:") || "";

        currentProject.addTodo(title, description, dueDate, priority, notes);
        app.saveStorage();
        render();
    });

    const renderProjects = () => {
        projectsContainer.innerHTML = '';
        const projects = app.getProjects();

        projects.forEach((project, index) => {
            const btn = document.createElement('button');
            btn.textContent = project.getName();
            btn.classList.add('project-btn');
            if (index === activeProjectIndex) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', () => {
                activeProjectIndex = index;
                render();
            });

            projectsContainer.appendChild(btn);
        });
    };

    const renderTodos = () => {
        todosContainer.innerHTML = '';
        const projects = app.getProjects();
        const currentProject = projects[activeProjectIndex];

        if (!currentProject) return;

        projectTitle.textContent = currentProject.getName();
        const todos = currentProject.getTodos();

        if (todos.length === 0) {
            todosContainer.innerHTML = '<p class="empty-msg">No tasks in this project yet. Add one!</p>';
            return;
        }

        todos.forEach((todo, todoIndex) => {
            const card = document.createElement('div');
            card.classList.add('todo-card');
            if (todo.completed) card.classList.add('completed');

            card.innerHTML = `
                <div class="todo-header">
                    <h3>${todo.title}</h3>
                    <span class="priority-${todo.priority.toLowerCase()}">${todo.priority}</span>
                </div>
                <p class="todo-desc">${todo.description}</p>
                <p class="todo-date">Due: ${todo.dueDate}</p>
                <div class="todo-actions">
                    <button class="toggle-btn">${todo.completed ? 'Completed' : 'Mark Complete'}</button>
                    <button class="delete-todo-btn">Delete</button>
                </div>
            `;

            // Toggle completed event listener
            card.querySelector('.toggle-btn').addEventListener('click', () => {
                todo.toggleCompleted();
                app.saveStorage();
                render();
            });

            // Delete todo event listener
            card.querySelector('.delete-todo-btn').addEventListener('click', () => {
                currentProject.removeTodo(todoIndex);
                app.saveStorage();
                render();
            });

            todosContainer.appendChild(card);
        });
    };

    const render = () => {
        renderProjects();
        renderTodos();
    };

    return {
        render
    };
}