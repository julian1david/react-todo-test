import { createContext, useRef, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { v4 as uuid } from 'uuid'; // Provide an id unique

const TodoContext = createContext();

/* Bridge to provider infor */
function TodoProvider(props) {
	/* States */
	const [searchValue, setSearch] = useState('');
	const [listName, setListName] = useState('');
	const [taskValue, setTaskValue] = useState('');
	const [taskEdit, setTaskEdit] = useState('');
	const [modalValue, setModal] = useState(false);
	const [editTask, setEditTask] = useState(false);

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
	const onClickTaskAdd = (task) => {
		console.log('entro a la funcion de agregar');
		const isOnly = todos.some( item => item.task.toLowerCase() === task.toLowerCase())
		if(isOnly) {
			return alert('This task exist')
		}
		const newTodos = [...todos];
		newTodos.push({
			id: uuid(),
			task,
			completed: false
		})
		setTodos(newTodos);
		setModal(false);
		setTaskValue('')
	};
	
	/* Edit Todo */

	const onClickEdit = (id) => {
		setModal(true)
		setEditTask(true)
		const newTodo = todos.filter(todo => todo.id === id)
		setTaskValue(newTodo[0].task)
		setTaskEdit(newTodo[0]);
	}

	const onClickTaskUpdate = () => {    
        // New Task
		const newTodos = [...todos];
		const todo = newTodos.find( todo => todo.id === taskEdit.id)
		todo.task = taskValue
		setTodos(newTodos)
		setModal(false)
    }

	/* Toogle checkbox */
	const toggleTodo = id => {
		const newTodos = [...todos];
		const todo = newTodos.find(todo => todo.id === id);
		todo.completed = !todo.completed;
		setTodos(newTodos);
	};

	/* Clear all tasks */
	const onClickDeleteAllTasks = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
	};

	/*  Delete only a task */
	const onClickDelete = id => {
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
				onClickDeleteAllTasks,
				onClickDelete,
				toggleTodo,
				setModal,
				onClickTaskAdd,
				listDelete,
				setListName,
				setEditTask,
				editTask,
				taskValue,
				setTaskValue,
				onClickEdit,
				onClickTaskUpdate,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
