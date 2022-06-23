import { createContext, useRef, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { v4 as uuid } from 'uuid'; // Provide an id unique

const TodoContext = createContext();

/* Bridge to provider infor */
function TodoProvider(props) {
	/* States */
	const [searchValue, setSearch] = useState('');
	const [openModal,setOpenModal] = useState(false)

	/*  States with names */
	const {
		item: todos,
		saveItem: setTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', []);

	/* Complete todos checkbox */
	const completedTodos = todos.filter(todo => todo.completed).length;
	const totalTodos = todos.length;

	/*  SearchedTodos */
	let searchedTodos = []
	// Si la longitud de searchValue es mayor a uno
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

	/* Create todotask */
	const handleTodoAdd = () => {
		const task = todoTaskRef.current.value;
		console.log(task);
		if (task === '') return;
		const newItems = [...todos];
		newItems.push({
			id: uuid(),
			completed: false,
			task,
		});
		setTodos(newItems);
		todoTaskRef.current.value = null;
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
				setSearch,
				handleTodoAdd,
				handleClearAll,
				handleTodoDelete,
				toggleTodo,
				setOpenModal,
				openModal,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
