let currentTodo;

const onDragStart = event => {
	currentTodo = event.target;
	event.dataTransfer.setData("id", event.target.dataset.id);
	setTimeout(() => event.target.classList.add("hide"));
};

const onDragEnd = event => {
	event.target.classList.remove("hide");
};

const onDragOver = event => {
	event.preventDefault();
};

const onDragEnter = event => {
	if (event.target.closest(".todo-item__content") === currentTodo) return;

	event.target.closest(".todo-item").classList.add("hovered");
};

const onDragLeave = ({ target }) => {
	const todoItem = target.closest(".todo-item__content");

	todoItem === target ||
		todoItem.closest(".todo-item").classList.remove("hovered");
};

const onDrop = event => {
	const target = event.target.closest("#todo-draggable");
	const todoId = event.dataTransfer.getData("id");

	const dragOverTodo = document.querySelector(`[data-id="${todoId}"]`);
	const tempElement = dragOverTodo.cloneNode(true);
	render(tempElement);

	tempElement.classList.remove("hide");
	target.closest(".todo-item").classList.remove("hovered");

	target.replaceWith(tempElement);
	dragOverTodo.replaceWith(target);
};

export const todoDragHandler = todo => {
	render(todo);
};

export function destoy(todos) {
	todos.forEach(todo => {
		todo.addEventListener("dragenter", onDragEnter);
		todo.addEventListener("dragleave", onDragLeave);
		todo.addEventListener("dragstart", onDragStart);
		todo.addEventListener("dragend", onDragEnd);
		todo.addEventListener("drop", onDrop);
	});
}

function render(todo) {
	todo.addEventListener("dragover", onDragOver);
	todo.addEventListener("dragenter", onDragEnter);
	todo.addEventListener("dragleave", onDragLeave);
	todo.addEventListener("dragstart", onDragStart);
	todo.addEventListener("dragend", onDragEnd);
	todo.addEventListener("drop", onDrop);
}
