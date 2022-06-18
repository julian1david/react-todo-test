import style from '../styles/TodoItem.module.scss'
import { CreateButton } from '../components/CreateButton'

export function TodoItem({ todo, toggleTodo }) {
	const { id, task, completed } = todo;

	const handleTodoClick = () => {
		toggleTodo(id);
	};

	return (
		<li className={style.TodoItem}>
			<input type='checkbox' checked={completed} onChange={handleTodoClick}/>
			<p className={`${todo.completed && style.TodoItem__text}`}>{task}</p>
			<CreateButton>+</CreateButton>
		</li>
	);
}
