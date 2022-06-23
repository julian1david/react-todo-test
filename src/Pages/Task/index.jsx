import { Title } from '../../components/Title';
import { CreateButton } from '../../components/Button';

import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';

import style from './Task.module.scss';

export const Task = ({ modalClass }) => {
	// ToDo revisar la referencia cuando el modal esta abierto
	// ToDo la referencia se pierde después de que se abre el modal
	const { handleTodoAdd, todoTaskRef } = useContext(TodoContext);

	const className = modalClass ? style.Task__Modal : style.Task;

	return (
		<div className={className}>
			<Title>Add Todo</Title>
			<h3>Task name</h3>
			<input
				className={style.TodoTaskCreate}
				ref={todoTaskRef}
				type='text'
				placeholder='New Task'
			/>
			<CreateButton kind={true} onClick={handleTodoAdd}>
				+
			</CreateButton>
		</div>
	);
};
