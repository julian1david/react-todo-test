import { Title } from '../../components/Title';
import { CreateButton } from '../../components/Button';
import { CreateTask } from '../../components/CreateTask';

import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';

import style from './Task.module.scss';

export const Task = () => {
	const { handleTodoAdd } = useContext(TodoContext);

	return (
		<div className={style.Task}>
			<Title>Todo List</Title>
			<h3>Task name</h3>
			<CreateTask />
			<CreateButton kind={true} onClick={handleTodoAdd}>
				+
			</CreateButton>
		</div>
	);
};
