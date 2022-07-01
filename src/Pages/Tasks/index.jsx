import { Fragment } from 'react';

import { TodoList } from '../../components/TodoList';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoAdd } from '../../components/TodoAdd';
import { CreateButton } from '../../components/Button';
import { TodoHeader } from '../../components/TodoHeader';
import { TodoItem } from '../../components/TodoItem';
import { Modal } from '../../components/Modal';

import { TodoLoading } from '../../components/TodoLoading';
import { EmptyTodo } from '../../components/EmptyTodo';
import { TodoError } from '../../components/TodoError';

import { useApi } from '../../Hooks/TodoContext';
import style from './Tasks.module.scss';
import { Title } from '../../components/Title';

export const Tasks = () => {

	const {
		loading,
		error,
		searchedTodos,
		completedTodos,
		setModal,
		modalValue,
		setEditTask,
		totalTodos,
		search,
		setSearch,
		setTaskValue,
		onClickDeleteAllTasks,
		onClickCompleteTodo,
		onClickDelete,
		onClickEdit,
	} = useApi();

	const modalOpen = () => {
		setTaskValue('');
		setModal(!modalValue);
		setEditTask(false);
	};

	return (
		<div className={style.Tasks}>
			<TodoHeader>
				<Title>Todo tasks</Title>
				{totalTodos > 0 && (
					<Fragment>
						<TodoSearch search={search} setSearch={setSearch} />
						<TodoCounter
							totalTodos={totalTodos}
							completedTodos={completedTodos}
						/>
						
					</Fragment>
				)}
			</TodoHeader>
			{!loading && !totalTodos && <EmptyTodo />}
			<TodoList>
				{loading &&
					new Array(3).fill().map((item, index) => <TodoLoading key={index} />)}
				{error && <TodoError />}
				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.id}
						completed={todo.completed}
						task={todo.task}
						onClickCompleteTodo={() => onClickCompleteTodo(todo.id)}
						onClickDelete={() => onClickDelete(todo.id)}
						onClickEdit={() => onClickEdit(todo.id)}
					/>
				))}
			</TodoList>
			<CreateButton onClick={onClickDeleteAllTasks}>
							Hide completed tasks
						</CreateButton>
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
