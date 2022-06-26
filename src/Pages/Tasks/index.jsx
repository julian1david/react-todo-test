import { useContext } from 'react';
import { TodoList } from '../../components/TodoList';
import { TodoItem } from '../../components/TodoItem';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoContext } from '../../TodoContext';
import { CreateButton } from '../../components/Button';
import { Modal } from '../../components/Modal';

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
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{error && <p>error</p>}
				{loading && <p>We are Loading</p>}
				{!loading && !totalTodos && <p>Crea tu primer todo</p>}
				{searchedTodos.map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</TodoList>
			{totalTodos > 0 && searchedTodos.length > 0 && (
				<CreateButton onClick={handleClearAll}>
					Hide completed tasks
				</CreateButton>
			)}
			<CreateButton kind={true} onClick={modalOpen}>
				+
			</CreateButton>
			{modalValue && (
				<Modal>
					<TodoAdd/>
				</Modal>
			)}
		</div>
	);
};
