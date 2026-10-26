// src/index.js
import StorageManager from './storage.js';

// Initialize our storage/app manager
const app = StorageManager();

console.log("Initial Projects:", app.getProjects());

// Get the default project and add a test todo
const defaultProject = app.getProjects()[0];
defaultProject.addTodo("Learn Webpack", "Understand how modules bundle", "2026-06-05", "High", "Keep practicing");

// Save changes to localStorage
app.saveStorage();

console.log("Updated Default Project Todos:", defaultProject.getTodos());