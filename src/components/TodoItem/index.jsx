import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import style from './TodoItem.module.scss';
import deleteIcon from '../../assets/img/delete.png'

export function TodoItem({ todo }) {
	const { toggleTodo, 
			onClickDelete,
			onClickEdit
		} = useContext(TodoContext);

	const { id, task, completed } = todo;
	
	const onDelete = () => {
		onClickDelete(id);
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
			<span onClick={() => onClickEdit(id)}>
				Editar
			</span>
			<span onClick={onDelete} className={style.deleteIcon}>
				<img src={(deleteIcon)} alt="delete-icon" />
			</span>
		</li>
	);
}
