
import { Fragment } from 'react';

import { Layout } from '../components/Layout';
import { Title } from '../components/Title';
import { CreateButton } from '../components/Button';
import { CreateInput } from '../components/Inputs';
import { TodoList } from '../components/TodoList';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';

export const Appui = () => {
  return (
    <Fragment>
			<Layout className='mainContainer'>
				<Layout className='createTask'>
					<Title>Todo List</Title>
					<h3>Task name</h3>
					<CreateInput
						className='TodoTaskCreate'
						innerRef={todoTaskRef}
						type='text'
						placeholder='New task'
					/>
					<CreateButton kind={true} onClick={handleTodoAdd}>
						+
					</CreateButton>
				</Layout>
				<Layout className='todoTasks'>
					<TodoCounter 
						completedTodos={completedTodos}
						totalTodos={totalTodos}
						/>
					<TodoSearch search={searchValue} setSearch={setSearch} />
					{dataStatus.error && <p>error</p>}
					{dataStatus.loading && <p>We are Loadingin</p>}
					{(!dataStatus.loading && !todos.length)
						&& <p>Crea tu primer todo</p>
					}
					<TodoList
						todos={todos}
						toggleTodo={toggleTodo}
						searchValue={searchValue}
						deleteToDo={deleteToDo}
					/>
					{todos.length > 0 && (
						<CreateButton onClick={handleClearAll}>
							Hide completed tasks
						</CreateButton>
					)}
				</Layout>
			</Layout>
		</Fragment>
  )
}
