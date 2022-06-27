import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import styles from './TodoCounter.module.scss';

function TodoCounter() {
	const { totalTodos, completedTodos } = useContext(TodoContext);

	return (
		<p className={styles.TodoCounter}>
			Completed {completedTodos} to {totalTodos} tasks
		</p>
	);
}

export { TodoCounter };
