import { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext'
import { CreateButton } from '../Button'

import style from './TodoAdd.module.scss';

export const TodoAdd = () => {

  const { setModal, addTodo } = useContext(TodoContext);

  const [newTask, setNewTask]  = useState('');

  const onCancel = () => {
    /* */
    setModal(false)
  }

  const onWrite = (event) => {
    setNewTask(event.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(newTask === '') return
    addTodo(newTask);
    setModal(false);
  }
  return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">
                <textarea 
                  placeholder="Description of your taks"
                  onChange={onWrite}
                  value={newTask}
                  >
                </textarea>
            </label>
            <div>
              <CreateButton className={style.TodoFormButton && style.TodoFormButtonAdd} onClick={onCancel}>
                Cancel
              </CreateButton>
              <CreateButton type='submit'>
                Add Task
              </CreateButton>
            </div>
        </form>
  )
}
