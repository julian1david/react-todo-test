import { Tasks } from '../Tasks';
import { Task } from '../Task';
import style from './main.module.scss';

export const AppUI = () => {

    return (
        <main className={style.MainContainer}>
            <Task />
            <Tasks />
        </main>
    )
}
