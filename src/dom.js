export default function DomController(app) {
    const projectsContainer = document.getElementById('projects-container');
    const todosContainer = document.getElementById('todos-container');
    const projectTitle = document.getElementById('current-project-title');

    let activeProjectIndex = 0;

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

        todos.forEach((todo, todoIndex) => {
            const card = document.createElement('div');
            card.classList.add('todo-card');
            if (todo.completed) card.classList.add('completed');

            card.innerHTML = `
                <h3>${todo.title}</h3>
                <p>${todo.description}</p>
                <p>Due: ${todo.dueDate}</p>
                <p>Priority: ${todo.priority}</p>
                <button class="delete-todo-btn">Delete</button>
            `;

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