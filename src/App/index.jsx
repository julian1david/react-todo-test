import { Tasks } from '../Pages/Tasks';
import style from './main.module.scss';

export function App() {
	return (
		<main className={style.MainContainer}>
			<Tasks />
		</main>
	);
}
