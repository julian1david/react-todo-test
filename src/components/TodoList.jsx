import { TodoItem } from './TodoItem';

import style from '../styles/TodoList.module.scss'

export function TodoList({ todos, toggleTodo }) {
	return (
		<ul className={style.TodoList}>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
			))}
		</ul>
	);
}
