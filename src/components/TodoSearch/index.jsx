import style from './TodoSearch.module.scss';

function TodoSearch( { search, setSearch }) {

	const handleSearch = e => {
		setSearch(e.target.value);
	};

	return (
		<input
			className={style.SearchTodo}
			type='text'
			placeholder='Search task'
			onChange={handleSearch}
			value={search}
		/>
	);
}

export { TodoSearch };
