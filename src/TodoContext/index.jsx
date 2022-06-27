import { createContext, useRef, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { v4 as uuid } from 'uuid'; // Provide an id unique

const TodoContext = createContext();

/* Bridge to provider infor */
function TodoProvider(props) {
	/* States */
	const [searchValue, setSearch] = useState('');
	const [modalValue, setModal] = useState(false);
	const [listName, setListName] = useState('')

	/*  States with names */
	const {
		item: listTasks,
		saveItem: setLists,
	}= useLocalStorage('lists',[])

	
	const {
		item: todos,
		saveItem: setTodos,
		loading,
		error,
	} = useLocalStorage(listName, []);

	/* Complete todos checkbox */
	const completedTodos = todos.filter(todo => todo.completed).length;
	const totalTodos = todos.length;

	/*  SearchedTodos */
	let searchedTodos = [];

	/* Passs todos to searchValues */
	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.task.toLowerCase();
			const searchText = searchValue.toLocaleLowerCase();
			return todoText.includes(searchText);
		});
	}

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
		todoTaskRef.current.value = null;
	};

	/* Add ToDo */
	const addTodo = (task) => {
		const newTodos = [...todos];
		newTodos.push({
			id: uuid(),
			task,
			completed: false
		})
		setTodos(newTodos);
	};

	/* Toogle checkbox */
	const toggleTodo = id => {
		const newTodos = [...todos];
		const todo = newTodos.find(todo => todo.id === id);
		todo.completed = !todo.completed;
		setTodos(newTodos);
	};

	/* Clear all tasks */
	const handleClearAll = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
	};

	/*  Delete only task */
	const handleTodoDelete = id => {
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
	};

	const listDelete = id => {
		const newList = listTasks.filter(list => list.id !== id);
		setLists(newList);
	};

	/* value provide a props information Doble key becose return an object */
	return (
		<TodoContext.Provider
			value={{
				todoTaskRef,
				completedTodos,
				loading,
				error,
				todos,
				totalTodos,
				searchValue,
				searchedTodos,
				modalValue,
				listTasks,
				setSearch,
				handleTodoAdd,
				handleClearAll,
				handleTodoDelete,
				toggleTodo,
				setModal,
				addTodo,
				listDelete,
				setListName,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
