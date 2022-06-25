import { Title } from '../../components/Title';
import { CreateButton } from '../../components/Button';

import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import { TodoList } from '../../components/TodoList'
import { ListItem } from '../../components/ListItem'

import style from './ListTasks.module.scss';

export const ListTasks = () => {
	// ToDo revisar la referencia cuando el modal esta abierto
	// ToDo la referencia se pierde después de que se abre el modal
	const { handleTodoAdd, todoTaskRef, listTasks } = useContext(TodoContext);

	return (
		<div className={style.ListTasks}>
			<Title>List Todos</Title>
			<h3>Tasks List</h3>
			<input
				className={style.ListTaskCreate}
				ref={todoTaskRef}
				type='text'
				placeholder='New list of tasks'
			/>
			<div className={style.ContainerList}>
				<TodoList>
					{!listTasks.length && <p>Add a new list tasks</p>}
					{listTasks.map(list => (
						<ListItem key={list.id} list={list}></ListItem>
					))}
				</TodoList>
			</div>
			<CreateButton onClick={handleTodoAdd}>
				Create List
			</CreateButton>
		</div>
	);
};
