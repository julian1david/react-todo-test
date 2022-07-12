import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import style from './ListItem.module.scss';
import deleteIcon from '../../assets/img/delete.png';

export function ListItem({ list }) {
	const { listName } = list;
	const { listDelete, setListName } = useContext(TodoContext);

	const handleTodos = e => {
		const event = e.target.id;
		if (event === 'viewTodos') {
			setListName(list.listName);
		}
		if (event === 'deleteTodos') {
			listDelete(list.id);
		}
	};
	return (
		<li onClick={handleTodos} id='viewTodos' className={style.ListItem}>
			<p>{listName}</p>
			<span className={style.ListItemDelete} onClick={handleTodos}>
				<img src={deleteIcon} alt='delete-icon' id='deleteTodos' />
			</span>
		</li>
	);
}
