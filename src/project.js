import createTodo from './todo.js';

export default function createProject(name) {
    let todos = [];

    const getName = () => name;
    const getTodos = () => todos;

    const addTodo = (title, description, dueDate, priority, notes) => {
        const newTodo = createTodo(title, description, dueDate, priority, notes);
        todos.push(newTodo);
        return newTodo;
    };

    const removeTodo = (index) => {
        todos.splice(index, 1);
    };

    return {
        getName,
        getTodos,
        addTodo,
        removeTodo
    };
}