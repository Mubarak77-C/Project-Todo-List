// src/dom.js
export default function DomController(app) {
    const projectsContainer = document.getElementById('projects-container');
    const todosContainer = document.getElementById('todos-container');
    const projectTitle = document.getElementById('current-project-title');
    const addProjectBtn = document.getElementById('add-project-btn');
    const addTodoBtn = document.getElementById('add-todo-btn');
    
    // Todo Modal elements
    const modal = document.getElementById('todo-modal');
    const todoForm = document.getElementById('todo-form');
    const cancelBtn = document.getElementById('cancel-btn');

    // Project Modal elements
    const projectModal = document.getElementById('project-modal');
    const projectForm = document.getElementById('project-form');
    const cancelProjectBtn = document.getElementById('cancel-project-btn');

    let activeProjectIndex = 0;

    // Open Project Modal
    addProjectBtn.addEventListener('click', () => {
        projectForm.reset();
        projectModal.showModal();
    });

    // Close Project Modal on Cancel
    cancelProjectBtn.addEventListener('click', () => {
        projectModal.close();
    });

    // Handle Project Form Submit
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = document.getElementById('project-name').value;
        if (projectName && projectName.trim() !== "") {
            app.addProject(projectName.trim());
            projectModal.close();
            // Automatically switch to the newly created project
            activeProjectIndex = app.getProjects().length - 1;
            render();
        }
    });

    // Open Todo Modal
    addTodoBtn.addEventListener('click', () => {
        const projects = app.getProjects();
        if (!projects[activeProjectIndex]) return;
        todoForm.reset();
        modal.showModal();
    });

    // Close Todo Modal on Cancel
    cancelBtn.addEventListener('click', () => {
        modal.close();
    });

    // Handle Todo Form Submit
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projects = app.getProjects();
        const currentProject = projects[activeProjectIndex];
        if (!currentProject) return;

        const title = document.getElementById('todo-title').value;
        const description = document.getElementById('todo-desc').value;
        const dueDate = document.getElementById('todo-date').value;
        const priority = document.getElementById('todo-priority').value;
        const notes = document.getElementById('todo-notes').value;

        currentProject.addTodo(title, description, dueDate, priority, notes);
        app.saveStorage();
        modal.close();
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

            card.querySelector('.toggle-btn').addEventListener('click', () => {
                todo.toggleCompleted();
                app.saveStorage();
                render();
            });

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