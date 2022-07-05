import { Fragment } from 'react';

import { TodoHeader } from '../../components/TodoHeader';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoList } from '../../components/TodoList';
import { TodoItem } from '../../components/TodoItem';
import { TodoAdd } from '../../components/TodoAdd';
import { Title } from '../../components/Title';
import { CreateButton } from '../../components/Button';
import { Modal } from '../../components/Modal';

import { TodoLoading } from '../../components/TodoLoading';
import { EmptyTodo } from '../../components/EmptyTodo';
import { TodoError } from '../../components/TodoError';
import { useTodos } from './useTodos';
import style from './Tasks.module.scss';

export const Tasks = () => {
	const {
		loading,
		error,
		searchedTodos,
		completedTodos,
		modalValue,
		search,
		totalTodos,
		taskValue,
		editTask,
		setModal,
		setEditTask,
		setSearch,
		setTaskValue,
		onClickDeleteAllTasks,
		onClickCompleteTodo,
		onClickDelete,
		onClickEdit,
		onClickTaskAdd,
		onClickTaskUpdate,
	} = useTodos();

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
						<TodoAdd
							taskValue={taskValue}
							editTask={editTask}
							setTaskValue={setTaskValue}
							setEditTask={setEditTask}
							setModal={setModal}
							onClickTaskAdd={onClickTaskAdd}
							onClickTaskUpdate={onClickTaskUpdate}
						/>
					</Modal>
				)}
		</div>
	);
};
