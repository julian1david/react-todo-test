import { Tasks } from '../Pages/Tasks';
import { Title } from '../components/Title';
import style from './main.module.scss';

export const AppUI = () => {
	return (
		<main className={style.MainContainer}>
			<Tasks />
			<Title>Hola</Title>
		</main>
	);
};
