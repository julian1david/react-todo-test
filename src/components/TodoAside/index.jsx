import style from './TodoAside.module.scss';

export const ListTasks = ( { children }) => {

	return (
		<aside className={style.AsideTasks}>
			{ children  }	
		</aside>
	);
};
