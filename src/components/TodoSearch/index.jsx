import style from '../Inputs/CreateInput.module.scss';

function TodoSearch({ search, setSearch }) {
	const handleSearch = e => {
		setSearch(e.target.value);
	};

	return (
		<>
			<input
				className={style.TodoTaskCreate}
				type='text'
				placeholder='Search task'
				onChange={handleSearch}
				value={search}
			/>
			<p>{search}</p>
		</>
	);
}

export { TodoSearch };
