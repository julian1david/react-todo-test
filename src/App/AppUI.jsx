import { Tasks } from '../Pages/Tasks';
import style from './main.module.scss';

export const AppUI = () => {
	return (
		<main className={style.MainContainer}>
			<Tasks />
		</main>
	);
};
