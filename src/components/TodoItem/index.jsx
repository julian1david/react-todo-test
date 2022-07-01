import style from './TodoItem.module.scss';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export function TodoItem({
	completed,
	task,
	onClickCompleteTodo,
	onClickDelete,
	onClickEdit,
}) {
	
	return (
		<IconContext.Provider
			value={{
				color: '#ff7360',
			}}
		>
			<li className={style.TodoItem}>
				<input
					className={style.Checkbox}
					type='checkbox'
					checked={completed}
					onChange={onClickCompleteTodo}
				/>
				{/* if completed add the CSS */}
				<p className={`${completed && style.TodoItem__text}`}>{task}</p>
				<span onClick={onClickEdit}>
					<FaEdit />
				</span>
				<span onClick={onClickDelete} className={style.deleteIcon}>
					<FaRegTrashAlt />
				</span>
			</li>
		</IconContext.Provider>
	);
}
