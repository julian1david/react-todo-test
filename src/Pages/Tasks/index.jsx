import { Fragment, useContext } from 'react';

import { TodoList } from '../../components/TodoList';
import { TodoItem } from '../../components/TodoItem';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoAdd } from '../../components/TodoAdd';
import { CreateButton } from '../../components/Button';
import { Modal } from '../../components/Modal';

import { TodoLoading } from '../../components/TodoLoading';
import { EmptyTodo } from '../../components/EmptyTodo';
import { TodoError } from '../../components/TodoError';

import { TodoContext } from '../../Hooks/TodoContext';
import style from './Tasks.module.scss';

export const Tasks = () => {
	const {
		loading,
		error,
		totalTodos,
		completedTodos,
		onClickDeleteAllTasks,
		searchedTodos,
		setModal,
		modalValue,
		setEditTask,
		setTaskValue,
		search,
		setSearch
	} = useContext(TodoContext);

	const modalOpen = () => {
		setTaskValue('');
		setModal(!modalValue);
		setEditTask(false);
	};

	return (
		<div className={style.Tasks}>
			<TodoSearch
				search={search}
				setSearch={setSearch}
			/>
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
					<TodoCounter 
						totalTodos={totalTodos}
						completedTodos={completedTodos}
					/>
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
