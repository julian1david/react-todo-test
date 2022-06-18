import { Fragment, useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { TodoList } from './components/TodoList';
import { TodoCounter } from './components/TodoCounter';
import { CreateButton } from './components/CreateButton';

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
		todo.completed = !todo.completed;
		setTodos(newTodos);
	};

	const handleTodoAdd = () => {
		const task = todoTaskRef.current.value || null;
		if (task === '') return;

		// Con esto creamos cambios en el estado(con set state se crea una copia del ref)
		// el uuid lo usamos para generar un id random
		setTodos(prevTodos => {
			return [...prevTodos, { id: uuid(), task, completd: false }];
		});

		todoTaskRef.current.value = null;
	};

	const handleClearAll = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
	};

	return (
		<Fragment>
			<TodoCounter todos={todos} />
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input ref={todoTaskRef} type='text' placeholder='New task' />
			<CreateButton onClick={handleTodoAdd}>➕</CreateButton>
			<CreateButton onClick={handleClearAll}>🗑</CreateButton>
		</Fragment>
	);
}
