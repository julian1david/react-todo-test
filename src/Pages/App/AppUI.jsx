
import { useContext } from 'react';

import { Layout } from '../../components/Layout';
import { Title } from '../../components/Title';
import { CreateButton } from '../../components/Button';
import { CreateTask } from '../../components/CreateTask';
import { ListTasks } from '../ListTasks'

import { TodoContext } from '../../TodoContext';

import style from './main.module.scss'

export const AppUI = () => {

  const {
    handleTodoAdd
  } = useContext(TodoContext);

  return (
      <main className={style.MainContainer}>
        <ListTasks/>
        <Layout className='createTask'>
          <Title>Todo List</Title>
          <h3>Task name</h3>
          <CreateTask />
          <CreateButton kind={true} onClick={handleTodoAdd}>
            +
          </CreateButton>
        </Layout>
      </main>
  )
}
