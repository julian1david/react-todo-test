import { Fragment, useContext } from 'react';
import { TodoList } from '../../components/TodoList';
import { TodoItem } from '../../components/TodoItem';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoContext } from '../../TodoContext';
import { CreateButton } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { LoadingTodo } from '../../components/LoadingTodo';
import { Title } from '../../components/Title';

import style from './Tasks.module.scss';
import { TodoAdd } from '../../components/TodoAdd';

export const Tasks = () => {
	const {
		loading,
		error,
		totalTodos,
		handleClearAll,
		searchedTodos,
		setModal,
		modalValue,
	} = useContext(TodoContext);

	const modalOpen = () => {
		setModal(!modalValue);
	};

	return (
		<div className={style.Tasks}>
			<Title>Task ToDo</Title>
			<TodoSearch />
			{!loading && !totalTodos && <p>Empty tasks, please create your task</p>}
			<TodoList>
				{loading && new Array(3).fill(0).map(i => <LoadingTodo key={i} />)}
				{error && <p>error</p>}
				{searchedTodos.map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</TodoList>
			{totalTodos > 0 && (
				<Fragment>
					<TodoCounter />
					<CreateButton onClick={handleClearAll}>
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
