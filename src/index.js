// src/index.js
import StorageManager from './storage.js';
import DomController from './dom.js';

// Initialize App Storage and DOM Controller
const app = StorageManager();
const ui = DomController(app);

// Initial render on page load
ui.render();

// For quick testing in console if needed
window.app = app;