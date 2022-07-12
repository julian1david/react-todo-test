import { createContext, useRef } from 'react';
import { useLocalStorage } from '../useLocalStorage';
import { v4 as uuid } from 'uuid'; // Provide an id unique

const ListContext = createContext();

export const ListProvider = ({ children }) => {
	/* const [listName, setListName] = useState(''); */

	/*  States with names */
	const { item: listTasks, saveItem: setLists } = useLocalStorage('lists', []);

	/* use ref of input to create task */
	const todoTaskRef = useRef();

	/* Create todoList */
	const handleTodoAdd = () => {
		const listName = todoTaskRef.current.value;
		if (listName === '') return alert('Type on input');
		const newItems = [...listTasks];
		newItems.push({
			id: uuid(),
			listName,
		});
		setLists(newItems);
		todoTaskRef.current.value = '';
	};

	const listDelete = id => {
		const newList = listTasks.filter(list => list.id !== id);
		setLists(newList);
	};

	return (
		<ListContext.Provider
			value={{
				listTasks,
				setLists,
				todoTaskRef,
				handleTodoAdd,
				listDelete,
			}}
		>
			{children}
		</ListContext.Provider>
	);
};
