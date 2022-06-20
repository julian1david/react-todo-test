import styles from '../styles/TodoCounter.module.scss'

function TodoCounter({ todos }) {
	return (
			<h2 className={styles.TodoCounter}>
			Complete {todos.filter(todo => todo.completed).length} to {todos.length} tasks</h2>
	);
}

export { TodoCounter };


