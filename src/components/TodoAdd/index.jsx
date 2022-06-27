import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import { CreateButton } from '../Button';

import style from './TodoAdd.module.scss';

export const TodoAdd = () => {
	const { setModal, addTodo } = useContext(TodoContext);

	const [newTask, setNewTask] = useState('');

	const onCancel = () => {
		/* */
		setModal(false);
	};

	const onWrite = event => {
		setNewTask(event.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (newTask === '') return;
		addTodo(newTask);
		setModal(false);
	};
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor='Title'>Title</label>
			<input 
				type='text' 
				placeholder='Title' 
				name='Title'
				className={style.InputTitle} />
			<label htmlFor='Description'>Description</label>
			<textarea
				placeholder='Description of your taks'
				onChange={onWrite}
				value={newTask}
				name='Description'
			></textarea>
			<div className={style.TodoFormButtonContainer}>
				<CreateButton onClick={onCancel}>Cancel</CreateButton>
				<CreateButton type='submit'>Add Task</CreateButton>
			</div>
		</form>
	);
};
