import style from './TodoList.module.scss';

export function TodoList({
	error,
	loading,
	searchText,
	searchedTodos,
	totalTodos,
	children,
	render,
	onEmpty,
	onLoading,
	onError,
	onEmptySearchTodo,
}) {
	return (
		<section className={style.TodoListContainer}>
			{error && onError()}
			{!loading && !totalTodos && onEmpty()}
			<ul className={style.TodoList}>
				{loading && onLoading()}
				{!!totalTodos && !searchedTodos.length && onEmptySearchTodo(searchText)}
				{!loading && !error && searchedTodos.map(render ?? children)}
			</ul>
		</section>
	);
}
