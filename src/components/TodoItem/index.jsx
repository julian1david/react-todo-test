import style from './TodoItem.module.scss';

export function TodoItem({ todo, toggleTodo, deleteToDo }) {
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
			{/* Si el todo.completed es true agregle el tachado al text */}
			<p className={`${todo.completed && style.TodoItem__text}`}>{task}</p>
			<span onClick={handleTodoDelete}>Delete</span>
		</li>
	);
}
