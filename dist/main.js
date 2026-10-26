/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n// src/index.js\n\n\n// Initialize our storage/app manager\nconst app = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconsole.log(\"Initial Projects:\", app.getProjects());\n\n// Get the default project and add a test todo\nconst defaultProject = app.getProjects()[0];\ndefaultProject.addTodo(\"Learn Webpack\", \"Understand how modules bundle\", \"2026-06-05\", \"High\", \"Keep practicing\");\n\n// Save changes to localStorage\napp.saveStorage();\n\nconsole.log(\"Updated Default Project Todos:\", defaultProject.getTodos());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUMwQzs7QUFFMUM7QUFDQSxZQUFZLHVEQUFjOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzP2E4ODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LmpzXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuLy8gSW5pdGlhbGl6ZSBvdXIgc3RvcmFnZS9hcHAgbWFuYWdlclxuY29uc3QgYXBwID0gU3RvcmFnZU1hbmFnZXIoKTtcblxuY29uc29sZS5sb2coXCJJbml0aWFsIFByb2plY3RzOlwiLCBhcHAuZ2V0UHJvamVjdHMoKSk7XG5cbi8vIEdldCB0aGUgZGVmYXVsdCBwcm9qZWN0IGFuZCBhZGQgYSB0ZXN0IHRvZG9cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gYXBwLmdldFByb2plY3RzKClbMF07XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvKFwiTGVhcm4gV2VicGFja1wiLCBcIlVuZGVyc3RhbmQgaG93IG1vZHVsZXMgYnVuZGxlXCIsIFwiMjAyNi0wNi0wNVwiLCBcIkhpZ2hcIiwgXCJLZWVwIHByYWN0aWNpbmdcIik7XG5cbi8vIFNhdmUgY2hhbmdlcyB0byBsb2NhbFN0b3JhZ2VcbmFwcC5zYXZlU3RvcmFnZSgpO1xuXG5jb25zb2xlLmxvZyhcIlVwZGF0ZWQgRGVmYXVsdCBQcm9qZWN0IFRvZG9zOlwiLCBkZWZhdWx0UHJvamVjdC5nZXRUb2RvcygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\nfunction createProject(name) {\n    let todos = [];\n\n    const getName = () => name;\n    const getTodos = () => todos;\n\n    const addTodo = (title, description, dueDate, priority, notes) => {\n        const newTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, priority, notes);\n        todos.push(newTodo);\n        return newTodo;\n    };\n\n    const removeTodo = (index) => {\n        todos.splice(index, 1);\n    };\n\n    return {\n        getName,\n        getTodos,\n        addTodo,\n        removeTodo\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQzs7QUFFcEI7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG9EQUFVO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzPzBmMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSAnLi90b2RvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gICAgICAgIHRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgICAgIHJldHVybiBuZXdUb2RvO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGdldFRvZG9zLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICByZW1vdmVUb2RvXG4gICAgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/project.js\n\n}");

/***/ },

/***/ "./src/storage.js"
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StorageManager)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nfunction StorageManager() {\n    let projects = [];\n\n    // Initialize with a Default project if nothing is in localStorage\n    const initStorage = () => {\n        const savedData = localStorage.getItem('todo_projects');\n        if (savedData) {\n            const parsedData = JSON.parse(savedData);\n            // Rebuild project objects from saved data\n            projects = parsedData.map(projData => {\n                const project = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projData.name);\n                projData.todos.forEach(todo => {\n                    project.addTodo(\n                        todo.title,\n                        todo.description,\n                        todo.dueDate,\n                        todo.priority,\n                        todo.notes\n                    );\n                    // Preserve completion status if needed\n                    if (todo.completed) {\n                        const currentTodos = project.getTodos();\n                        currentTodos[currentTodos.length - 1].completed = true;\n                    }\n                });\n                return project;\n            });\n        } else {\n            // Create a default project out of the box\n            const defaultProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Default');\n            projects.push(defaultProject);\n            saveStorage();\n        }\n    };\n\n    // Save current projects array to localStorage\n    const saveStorage = () => {\n        localStorage.setItem('todo_projects', JSON.stringify(projects.map(p => ({\n            name: p.getName(),\n            todos: p.getTodos()\n        }))));\n    };\n\n    const getProjects = () => projects;\n\n    const addProject = (name) => {\n        const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n        projects.push(newProject);\n        saveStorage();\n        return newProject;\n    };\n\n    // Initialize immediately when module is loaded\n    initStorage();\n\n    return {\n        getProjects,\n        addProject,\n        saveStorage\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5Qzs7QUFFMUI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1REFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQSxtQ0FBbUMsdURBQWE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQix1REFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0b3JhZ2UuanM/MzM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9yYWdlTWFuYWdlcigpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIC8vIEluaXRpYWxpemUgd2l0aCBhIERlZmF1bHQgcHJvamVjdCBpZiBub3RoaW5nIGlzIGluIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IGluaXRTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzYXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb19wcm9qZWN0cycpO1xuICAgICAgICBpZiAoc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICAgICAgICAgICAgLy8gUmVidWlsZCBwcm9qZWN0IG9iamVjdHMgZnJvbSBzYXZlZCBkYXRhXG4gICAgICAgICAgICBwcm9qZWN0cyA9IHBhcnNlZERhdGEubWFwKHByb2pEYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qRGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICBwcm9qRGF0YS50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvZG8oXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8ucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLm5vdGVzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXNlcnZlIGNvbXBsZXRpb24gc3RhdHVzIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IHByb2plY3QuZ2V0VG9kb3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb2Rvc1tjdXJyZW50VG9kb3MubGVuZ3RoIC0gMV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkZWZhdWx0IHByb2plY3Qgb3V0IG9mIHRoZSBib3hcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgnRGVmYXVsdCcpO1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgICAgICBzYXZlU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNhdmUgY3VycmVudCBwcm9qZWN0cyBhcnJheSB0byBsb2NhbFN0b3JhZ2VcbiAgICBjb25zdCBzYXZlU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9fcHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cy5tYXAocCA9PiAoe1xuICAgICAgICAgICAgbmFtZTogcC5nZXROYW1lKCksXG4gICAgICAgICAgICB0b2RvczogcC5nZXRUb2RvcygpXG4gICAgICAgIH0pKSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBzYXZlU3RvcmFnZSgpO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBpbW1lZGlhdGVseSB3aGVuIG1vZHVsZSBpcyBsb2FkZWRcbiAgICBpbml0U3RvcmFnZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvamVjdHMsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIHNhdmVTdG9yYWdlXG4gICAgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/storage.js\n\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodo)\n/* harmony export */ });\n// src/todo.js\nfunction createTodo(title, description, dueDate, priority, notes = '') {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        notes,\n        completed: false,\n        toggleCompleted() {\n            this.completed = !this.completed;\n        }\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8uanM/NGNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvdG9kby5qc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyA9ICcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgbm90ZXMsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgICAgICB9XG4gICAgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/todo.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;