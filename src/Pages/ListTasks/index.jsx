import{  useContext } from 'react'
import { TodoList } from '../../components/TodoList';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoContext } from '../../TodoContext';
import { CreateButton } from '../../components/Button';

import style from './ListTasks.module.scss'

export const ListTasks = () => {

    const { dataStatus, todos, toggleTodo, searchValue, deleteToDo,handleClearAll} = useContext(TodoContext);

    return (
        <div className={style.ListTasks}>
            {console.log('hola')}
            <TodoCounter />
            <TodoSearch />
            {dataStatus.error && <p>error</p>}
            {dataStatus.loading && <p>We are Loadingin</p>}
            {
                (!dataStatus.loading && !todos.length)
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
        </div>
    )
}
