import style from './Title.module.scss';

function Title({ children }) {
	return <h1 className={style.Title}>{children}</h1>;
}

export { Title };
