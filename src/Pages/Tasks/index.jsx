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
import { EmptySearch } from '../../components/EmptySearch';
// import { ChangeAlertWithStorageListener } from '../../components/ChangeAlert';
import { ChangeAlert } from '../../components/ChangeAlert';

export const Tasks = () => {
	const {
		loading,
		error,
		searchedTodos,
		completedTodos,
		modalValue,
		searchValue,
		totalTodos,
		taskValue,
		editTask,
		syncronizedTodo,
		syncronizedTodos,
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
			<TodoHeader loading={loading}>
				<Title>Todo tasks</Title>
				{/* {totalTodos > 0 && 
						<TodoSearch 
							search={searchValue} 
							setSearch={setSearch} 
							loading={loading}
							/>
				} */}
				<TodoSearch
					search={searchValue}
					setSearch={setSearch}
					// loading={loading}
				/>
			</TodoHeader>
			<TodoList
				error={error}
				loading={loading}
				totalTodos={totalTodos}
				searchedTodos={searchedTodos}
				searchText={searchValue}
				onError={() => <TodoError />}
				onLoading={() =>
					new Array(3).fill().map((item, index) => <TodoLoading key={index} />)
				}
				onEmpty={() => <EmptyTodo />}
				onEmptySearchTodo={search => <EmptySearch searchText={search} />}
				render={todo => (
					<TodoItem
						key={todo.id}
						completed={todo.completed}
						task={todo.task}
						onClickCompleteTodo={() => onClickCompleteTodo(todo.id)}
						onClickDelete={() => onClickDelete(todo.id)}
						onClickEdit={() => onClickEdit(todo.id)}
					/>
				)}
			/>
			{totalTodos > 0 && !!searchedTodos.length && syncronizedTodo && (
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
			<ChangeAlert syncronized={syncronizedTodos} />
			{/* 
				// With Hocs
			<ChangeAlertWithStorageListener
				syncronized={syncronizedTodos}
			/> */}
		</div>
	);
};
