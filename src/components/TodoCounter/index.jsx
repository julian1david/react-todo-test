import styles from './TodoCounter.module.scss';

function TodoCounter({ completedTodos, totalTodos }) {
	

	return (
		<h2 className={styles.TodoCounter}>
			Completed {completedTodos} to {totalTodos} tasks
		</h2>
	);
}

export { TodoCounter };
