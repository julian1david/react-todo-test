import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import style from '../../Pages/ListTasks/ListTasks.module.scss';

function TodoSearch() {
	const { search, setSearch } = useContext(TodoContext);

	const handleSearch = e => {
		setSearch(e.target.value);
	};

	return (
		<input
			className={style.ListTaskCreate}
			type='text'
			placeholder='Search task'
			onChange={handleSearch}
			value={search}
		/>
	);
}

export { TodoSearch };
