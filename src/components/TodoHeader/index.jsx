import style from './TodoHeader.module.scss'

export const TodoHeader = ({ children }) => {
	return <header className={style.Header}>
			{children}
			</header>;
};
