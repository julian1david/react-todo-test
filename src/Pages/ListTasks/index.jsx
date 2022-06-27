import { Title } from '../../components/Title';
import { CreateButton } from '../../components/Button';

import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import { TodoList } from '../../components/TodoList'
import { ListItem } from '../../components/ListItem'

import style from './ListTasks.module.scss';

export const ListTasks = () => {

	const { handleTodoAdd, todoTaskRef, listTasks } = useContext(TodoContext);

	return (
		<div className={style.ListTasks}>
			<Title>Todo App</Title>
			<p>Tasks List</p>
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
