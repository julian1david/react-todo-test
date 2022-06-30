import { AppUI } from './AppUI';
import { TodoProvider } from '../Hooks/TodoContext';

export function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}
