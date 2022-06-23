import { useContext } from 'react';
import { TodoList } from '../../components/TodoList';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoContext } from '../../TodoContext';
import { CreateButton } from '../../components/Button';
import { Modal } from '../../components/Modal';


import style from './Tasks.module.scss';

export const Tasks = () => {
	const { loading, 
			error, 
			totalTodos, 
			handleClearAll, 
			searchedTodos,
			setOpenModal,
			openModal } = useContext(TodoContext);

	const modalOpen = () => {
		setOpenModal(!openModal)
	}
	return (
		<div className={style.Tasks}>
			<TodoCounter />
			<TodoSearch />
			{error && <p>error</p>}
			{loading && <p>We are Loading</p>}
			{!loading && !totalTodos && <p>Crea tu primer todo</p>}
			<TodoList />
			{(totalTodos > 0 && searchedTodos.length > 0) && (
				<CreateButton onClick={handleClearAll}>
					Hide completed tasks
				</CreateButton>
			)}
			<CreateButton kind={true} onClick={modalOpen}>
				+
			</CreateButton>
			{openModal && (
                <Modal >{ searchedTodos[0]?.task}
                </Modal>
            )}
		</div>
	);
};
