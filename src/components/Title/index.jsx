import style from './Title.module.scss';

function Title({ children }) {
	return <h2 className={style.Title}>{children}</h2>;
}

export { Title };
