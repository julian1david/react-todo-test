import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import style from './TodoItem.module.scss';

export function TodoItem({ todo }) {
	const { toggleTodo, handleTodoDelete } = useContext(TodoContext);

	const { id, task, completed } = todo;

	const onDelete = () => {
		handleTodoDelete(id);
	};

	return (
		<li className={style.TodoItem}>
			<input
				className={style.Checkbox}
				type='checkbox'
				checked={completed}
				onChange={() => toggleTodo(id)}
			/>
			{/* if completed add the CSS */}
			<p className={`${completed && style.TodoItem__text}`}>{task}</p>
			<span onClick={onDelete}>Delete</span>
		</li>
	);
}
