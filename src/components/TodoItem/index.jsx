import { useContext } from 'react';
import { TodoContext } from '../../Hooks/TodoContext';
import style from './TodoItem.module.scss';
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { IconContext } from 'react-icons';

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
		<IconContext.Provider 
			value={{
				color: "#ff7360",
			}}>
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
				<FaEdit/>
			</span>
			<span onClick={onDelete} className={style.deleteIcon}>
				<FaRegTrashAlt/>
			</span>
		</li>
		</IconContext.Provider>
	);
}
