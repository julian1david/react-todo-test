import { AppUI } from "./AppUI";
import { TodoProvider } from "../../TodoContext";

export function App() {

	return (
		<TodoProvider>
			<AppUI/>
		</TodoProvider>
	);
}
