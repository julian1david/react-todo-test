import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import { TodoItem } from '../TodoItem';

import style from './TodoList.module.scss';

export function TodoList() {

	const { searchValue,todos } = useContext(TodoContext);

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
				<TodoItem key={todo.id} todo={todo}
				/>
			))}
		</ul>
	);
}
