import createProject from './project.js';

export default function StorageManager() {
    let projects = [];

    // Save current projects array to localStorage
    const saveStorage = () => {
        const dataToSave = projects.map(p => ({
            name: p.getName(),
            todos: p.getTodos()
        }));
        localStorage.setItem('todo_projects', JSON.stringify(dataToSave));
    };

    // Initialize with a Default project if nothing is in localStorage
    const initStorage = () => {
        const savedData = localStorage.getItem('todo_projects');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            projects = parsedData.map(projData => {
                const project = createProject(projData.name);
                projData.todos.forEach(todo => {
                    const newTodo = project.addTodo(
                        todo.title,
                        todo.description,
                        todo.dueDate,
                        todo.priority,
                        todo.notes
                    );
                    if (todo.completed) {
                        newTodo.completed = true;
                    }
                });
                return project;
            });
        } else {
            const defaultProject = createProject('Default');
            projects.push(defaultProject);
            saveStorage();
        }
    };

    const getProjects = () => projects;

    const addProject = (name) => {
        const newProject = createProject(name);
        projects.push(newProject);
        saveStorage(); // <--- CRUCIAL: Save immediately when a project is added
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