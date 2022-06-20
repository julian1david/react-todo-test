import style from '../styles/TodoItem.module.scss'

export function TodoItem({ todo, toggleTodo }) {
	const { id, task, completed } = todo;

	const handleTodoClick = () => {
		toggleTodo(id);
	};

	return (
		<li className={style.TodoItem}>
			<input className={style.Checkbox}type='checkbox' checked={completed} onChange={handleTodoClick}/>
			{/* Si el todo.completed es true agregle el tachado al text */}
			<p className={`${todo.completed && style.TodoItem__text}`}>{task}</p>
		</li>
	);
}
