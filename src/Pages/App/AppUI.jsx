import { Tasks } from '../Tasks';
import { ListTasks } from '../ListTasks';
import style from './main.module.scss';

export const AppUI = () => {
	return (
		<main className={style.MainContainer}>
			<ListTasks />
			<Tasks />
		</main>
	);
};
