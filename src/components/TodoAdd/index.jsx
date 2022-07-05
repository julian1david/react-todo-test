import { CreateButton } from '../Button';

import style from './TodoAdd.module.scss';

export const TodoAdd = ({
	taskValue,
	editTask,
	setTaskValue,
	setEditTask,
	setModal,
	onClickTaskAdd,
	onClickTaskUpdate,
}) => {
	const onCancel = () => {
		setEditTask(false);
		setModal(false);
	};

	const onWrite = event => {
		setTaskValue(event.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		if (taskValue === '') return;
		if (e.target[2].id === 'editButton') {
			onClickTaskUpdate();
		}
		if (e.target[2].id === 'addButton') {
			onClickTaskAdd(taskValue);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor='Description'>Description</label>
			<textarea
				placeholder='Description of your taks'
				onChange={onWrite}
				value={taskValue}
				name='Description'
			></textarea>
			<div className={style.TodoFormButtonContainer}>
				<CreateButton onClick={onCancel}>Cancel</CreateButton>
				{editTask ? (
					<CreateButton id='editButton' type='submit'>
						Edit Task
					</CreateButton>
				) : (
					<CreateButton id='addButton' type='submit'>
						Add Task
					</CreateButton>
				)}
			</div>
		</form>
	);
};
