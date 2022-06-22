import { createContext, useRef, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuid } from 'uuid'; // Provide an id unique


const TodoContext = createContext();

/* Bridge to provider infor */
function TodoProvider(props) {


    /* States */
    const [searchValue, setSearch] = useState('');

    /*  States with names */
    const {
        item: todos,
        saveItem: setTodos,
        dataStatus,
    } = useLocalStorage('TODOS_V1', [])

    /* Complete todos checkbox */
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;


    /* use ref of input to create task */
    const todoTaskRef = useRef();

    /* Create todotask */
    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;

        setTodos(prevTodos => {
            return [...prevTodos, { id: uuid(), task, completed: false }];
        });
        todoTaskRef.current.value = null;
    };

    /* Toogle checkbox */
    const toggleTodo = id => {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    /* Clear all tasks */
    const handleClearAll = () => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    };

    /*  Delete only task */
    const deleteToDo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    // value provide a props information
    <TodoContext.Provider value={{
        todoTaskRef,
        completedTodos,
        dataStatus,
        todos,
        totalTodos,
        searchValue,
        setSearch,
        handleTodoAdd,
        handleClearAll,
        deleteToDo,
        toggleTodo,
    }}>
        {props.children}
    </TodoContext.Provider>
}

export { TodoProvider }