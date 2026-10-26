import createProject from './project.js';

export default function StorageManager() {
    let projects = [];

    // Initialize with a Default project if nothing is in localStorage
    const initStorage = () => {
        const savedData = localStorage.getItem('todo_projects');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // Rebuild project objects from saved data
            projects = parsedData.map(projData => {
                const project = createProject(projData.name);
                projData.todos.forEach(todo => {
                    project.addTodo(
                        todo.title,
                        todo.description,
                        todo.dueDate,
                        todo.priority,
                        todo.notes
                    );
                    // Preserve completion status if needed
                    if (todo.completed) {
                        const currentTodos = project.getTodos();
                        currentTodos[currentTodos.length - 1].completed = true;
                    }
                });
                return project;
            });
        } else {
            // Create a default project out of the box
            const defaultProject = createProject('Default');
            projects.push(defaultProject);
            saveStorage();
        }
    };

    // Save current projects array to localStorage
    const saveStorage = () => {
        localStorage.setItem('todo_projects', JSON.stringify(projects.map(p => ({
            name: p.getName(),
            todos: p.getTodos()
        }))));
    };

    const getProjects = () => projects;

    const addProject = (name) => {
        const newProject = createProject(name);
        projects.push(newProject);
        saveStorage();
        return newProject;
    };

    // Initialize immediately when module is loaded
    initStorage();

    return {
        getProjects,
        addProject,
        saveStorage
    };
}