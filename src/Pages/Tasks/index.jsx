import{  useContext } from 'react'
import { TodoList } from '../../components/TodoList';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoContext } from '../../TodoContext';
import { CreateButton } from '../../components/Button';

import style from './Tasks.module.scss'

export const Tasks = () => {

    const { loading, error, todos, handleClearAll} = useContext(TodoContext);

    return (
        <div className={style.Tasks}>
            <TodoCounter />
            <TodoSearch />
            {error && <p>error</p>}
            {loading && <p>We are Loading</p>}
            {
                (!loading && !todos.length)
                && <p>Crea tu primer todo</p>
            }
            <TodoList/>
            {todos.length > 0 && (
                <CreateButton onClick={handleClearAll}>
                    Hide completed tasks
                </CreateButton>
            )}
        </div>
    )
}
