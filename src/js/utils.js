import axios from "axios";

export const getTodos = async () => {
	try {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/todos?_limit=10"
		);

		return new Promise(res => res(response.data));
	} catch (err) {
		console.log(err);
	}
};

export const template = data => {
	const items = data
		.map(
			(item, index) => `
    <li class="todo-item">
			<h3 class="todo-item__number">${index + 1}</h3>
			<div 
				class="todo-item__content" 
				data-id="${item.id}" 
				id="todo-draggable"
				draggable="true"
			>
  	    <h2 class="todo-item__title">${item.title}</h2>
	      <div class="todo-item__control">
				</div>
			</div>
    </li>
  `
		)
		.join("");

	return `
    <ul class="todo-list">
      ${items}
    </ul>
  `;
};
