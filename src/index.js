import createTodo from './todo.js';

// Test our factory function in the console
const testTodo = createTodo("Buy Milk", "Get whole milk from the store", "2026-06-01", "High", "Check expiration date");

console.log("Todo Title:", testTodo.title);
console.log("Completed Status:", testTodo.completed);

testTodo.toggleCompleted();
console.log("Completed Status After Toggle:", testTodo.completed);