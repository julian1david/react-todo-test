import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import style from './ListItem.module.scss'
export function ListItem({ list }) {

	const { listName } = list;
	const { listDelete } = useContext(TodoContext);

	const handleTodos = (e) => {
		const event = e.target.id;
		if(event === 'viewTodos'){
			console.log('hola')
		}
		if(event === 'deleteTodos'){
			listDelete(list.id)
		}
	}
	return (
		<li onClick={handleTodos} id='viewTodos' className={style.ListItem}>
			<p>{listName}</p>
			<span
				className={style.ListItemDelete} 
				onClick={handleTodos} id='deleteTodos'>Delete</span>
		</li>
	);
}
