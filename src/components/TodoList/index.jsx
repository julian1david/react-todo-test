import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import { TodoItem } from '../TodoItem';

import style from './TodoList.module.scss';

export function TodoList() {
	const { searchedTodos } = useContext(TodoContext);

	return (
		<ul className={style.TodoList}>
			{searchedTodos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
}
