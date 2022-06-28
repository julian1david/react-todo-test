import { Fragment, useContext } from 'react';
import { TodoList } from '../../components/TodoList';
import { TodoItem } from '../../components/TodoItem';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoContext } from '../../TodoContext';
import { CreateButton } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Title } from '../../components/Title';

import { TodoLoading } from '../../components/TodoLoading';
import { EmptyTodo } from '../../components/EmptyTodo';
import { TodoError } from '../../components/TodoError';


import style from './Tasks.module.scss';
import { TodoAdd } from '../../components/TodoAdd';

export const Tasks = () => {
	const {
		loading,
		error,
		totalTodos,
		onClickDeleteAllTasks,
		searchedTodos,
		setModal,
		modalValue,
		setEditTask,
		setTaskValue
	} = useContext(TodoContext);

	const modalOpen = () => {
		setTaskValue('');
		setModal(!modalValue);
		setEditTask(false);
	};

	return (
		<div className={style.Tasks}>
			<Title>Task ToDo</Title>
			<TodoSearch />
			{!loading && !totalTodos && <EmptyTodo/>}
			<TodoList>
				{loading && new Array(3).fill().map((item, index) => <TodoLoading key={index} />)}
				{error && <TodoError/>}
				{searchedTodos.map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</TodoList>
			{totalTodos > 0 && (
				<Fragment>
					<TodoCounter />
					<CreateButton onClick={onClickDeleteAllTasks}>
						Hide completed tasks
					</CreateButton>
				</Fragment>
			)}
			<CreateButton kind={true} onClick={modalOpen}>
				+
			</CreateButton>
			{modalValue && (
				<Modal>
					<TodoAdd />
				</Modal>
			)}
		</div>
	);
};
