import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import style from './TodoItem.module.scss';

export function TodoItem({ todo }) {
	
	const {  toggleTodo, deleteToDo, } = useContext(TodoContext);

	const { id, task, completed } = todo;

	const handleTodoClick = () => {
		toggleTodo(id);
	};

	const handleTodoDelete = () => {
		deleteToDo(id);
	};

	return (
		<li className={style.TodoItem}>
			<input
				className={style.Checkbox}
				type='checkbox'
				checked={completed}
				onChange={handleTodoClick}
			/>
			{/* if completed add the CSS */}
			<p className={`${completed && style.TodoItem__text}`}>{task}</p>
			<span onClick={handleTodoDelete}>Delete</span>
		</li>
	);
}
