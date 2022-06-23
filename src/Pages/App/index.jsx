import { Tasks } from '../Tasks'
import { Task } from '../Task'
import style from './main.module.scss'

import { TodoProvider } from "../../TodoContext";

export function App() {

	return (
		<TodoProvider>
			<main className={style.MainContainer}>
				<Task />
				<Tasks />
			</main>
		</TodoProvider>
	);
}
