import style from './TodoList.module.scss';

export function TodoList({ children }) {

	return (
		<ul className={style.TodoList}>
			{children}
		</ul>
	);
}
