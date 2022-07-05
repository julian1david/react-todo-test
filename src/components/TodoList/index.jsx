import style from './TodoList.module.scss';

export function TodoList({
	error,
	loading,
	searchTodos,
	onEmpty,
	onLoading,
	onError,
	children,
}) {
	return (
		<section>
			{error && onError()}
			{loading && onLoading()}
			{!loading && !searchTodos.length && onEmpty() }
			<ul className={style.TodoList}>{children}</ul>
		</section>
	);
}
