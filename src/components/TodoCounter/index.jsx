import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import styles from './TodoCounter.module.scss';

function TodoCounter() {
	const { totalTodos, completedTodos } = useContext(TodoContext);

	return (
		<h2 className={styles.TodoCounter}>
			Completed {completedTodos} to {totalTodos} tasks
		</h2>
	);
}

export { TodoCounter };
