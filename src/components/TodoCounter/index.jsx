import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import styles from './TodoCounter.module.scss';

function TodoCounter() {
	const { totalTodos, completedTodos } = useContext(TodoContext);

	const isMore = totalTodos > completedTodos;

	return (
		isMore ? 
		<p className={styles.TodoCounter}>
			Completed {completedTodos} to {totalTodos} tasks
		</p> :
		<p className={styles.TodoCounter}>
			You finish your task !
		</p>
	);
}

export { TodoCounter };
