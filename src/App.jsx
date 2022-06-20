import { Fragment, useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { Layout } from './components/Layout';
import { Title } from './components/Title';
import { CreateButton } from './components/CreateButton';
import { CreateInput } from './components/CreateInput';
import { TodoList } from './components/TodoList';
import { TodoCounter } from './components/TodoCounter';


const KEY = 'todoAPP.todos';

export function App() {

	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem(KEY)) ?? []
	);

	useEffect(() => {
		localStorage.setItem(KEY, JSON.stringify(todos));
	});
	// usar la referencia o valor del input
	const todoTaskRef = useRef();


	const toggleTodo = id => {
		const newTodos = [...todos];
		const todo = newTodos.find(todo => todo.id === id);
		console.log(todo.completed);
		todo.completed = !todo.completed;
		setTodos(newTodos);
	};

	const handleTodoAdd = () => {
		const task = todoTaskRef.current.value;
		if (task === '') return;

		// Con esto creamos cambios en el estado(con set state se crea una copia del ref)
		// el uuid lo usamos para generar un id random
		setTodos(prevTodos => {
			return [...prevTodos, { id: uuid(), task, completed: false }];
		});

		todoTaskRef.current.value = null;
	};

	const handleClearAll = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
	};

	return (
		<Fragment>
			<Layout className='mainContainer'>
				<Layout className='createTask'>
					<Title>Todo List</Title>
					<h3>Task name</h3>
					<CreateInput  
						className='TodoTaskCreate'
						innerRef={todoTaskRef} 
						type='text' 
						placeholder='New task' />
					<CreateButton className='addButton' onClick={handleTodoAdd}>+</CreateButton>
				</Layout>
				<Layout className="todoTasks">
					<TodoCounter todos={todos} />
					<CreateInput  
						className='TodoTaskCreate'
						type='text' 
						placeholder='Search task' />
					<TodoList todos={todos} toggleTodo={toggleTodo} />
					{todos.length > 0 &&
						<CreateButton 
							className='hideButton' 
							onClick={handleClearAll}>
							Hide completed tasks
						</CreateButton>
					}
				</Layout>
			</Layout>
		</Fragment>
	);
}
