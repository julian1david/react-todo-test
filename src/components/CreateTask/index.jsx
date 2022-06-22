import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import style from './CreateTask.module.scss';

function CreateTask() {

	const{ todoTaskRef } = useContext(TodoContext);

	return (
		<input
			className={style.TodoTaskCreate}
			ref={todoTaskRef}
			type="text"
			placeholder="New Task"
		/>
	);
}

export { CreateTask };
