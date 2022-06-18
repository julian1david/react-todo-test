import styles from '../styles/TodoCounter.module.scss'

function TodoCounter({ todos }) {
	return (
		<div>
			<p className={styles.TodoCounter}>
			You have {todos.filter(todo => !todo.completed).length} 
			of  {todos.length}
			to complete</p>
		</div>
	);
}

export { TodoCounter };


