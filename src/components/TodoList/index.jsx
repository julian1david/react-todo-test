import { TodoItem } from '../TodoItem';

import style from './TodoList.module.scss';

export function TodoList({ todos, toggleTodo, searchValue, deleteToDo }) {
	let searchTodos = [];

	// Si la longitud de searchValue es mayor a uno
	if (!searchValue.length >= 1) {
		searchTodos = todos;
	} else {
		searchTodos = todos.filter(todo => {
			const todoText = todo.task.toLowerCase();
			const searchText = searchValue.toLocaleLowerCase();
			return todoText.includes(searchText);
		});
	}

	return (
		<ul className={style.TodoList}>
			{searchTodos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
					deleteToDo={deleteToDo}
				/>
			))}
		</ul>
	);
}
