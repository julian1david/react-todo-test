import style from './LoadingTodo.module.scss';

export const LoadingTodo = () => {
	return (
			<li className={style.LoadingTodo}>
				<span className={style.LoadingTodo__circle}></span>
				<p className={style.LoadingTodo__text}></p>
			</li>
	);
};
