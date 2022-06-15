import { Fragment, useState, useRef, useEffect } from 'react'
import {TodoList}  from './components/TodoList'
import { v4 as uuid } from 'uuid'

const KEY = 'todoAPP.todos'

export function App() {
  
  const [todos, setTodos] = useState([
    {id: 1, task: "Task One", completed: false}
  ])

  //usar la referencia o valor del input
  const todoTaskRef = useRef();

  useEffect( () => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if(storedTodos){
      setTodos(storedTodos);
    }
  },[])

  useEffect(() => {
    localStorage.setItem(KEY,JSON.stringify(todos))
  },[todos])

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos)
  }

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === '') return;

    //Con esto creamos cambios en el estado(con set state se crea una copia del ref)
    //el uuid lo usamos para generar un id random
    setTodos((prevTodos) => {
        return [...prevTodos,{id: uuid() , task, completd: false}]
    })

    todoTaskRef.current.value = null;
  }

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoTaskRef} type="text" placeholder='New task' />
      <button onClick={handleTodoAdd}>➕</button>
      <button onClick={handleClearAll}>🗑</button>
      <div>
        Yoy have {todos.filter((todo) => !todo.completed).length} tasks to finish.
      </div>
    </Fragment>
  )
}

