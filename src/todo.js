// src/todo.js
export default function createTodo(title, description, dueDate, priority, notes = '') {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        completed: false,
        toggleCompleted() {
            this.completed = !this.completed;
        }
    };
}