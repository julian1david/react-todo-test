import './TodoCounter.css'

function TodoCounter({ todos }) {
	return (
		<div>
			<p className='TodoCounter'>You have {todos.filter(todo => !todo.completed).length} to complete</p>
		</div>
	);
}

export { TodoCounter };


