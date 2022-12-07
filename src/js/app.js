import "../index.html";
import "../scss/style.scss";
import { todoDragHandler } from "./drag-and-drop";
import { getTodos, template } from "./utils";

const todoContainer = document.querySelector(".todo-container");

getTodos().then(todos => {
	todoContainer.insertAdjacentHTML("beforeend", template(todos));

	document.body.querySelectorAll("#todo-draggable").forEach(todoDragHandler);
});
