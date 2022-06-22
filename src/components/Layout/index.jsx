import style from './Layout.module.scss';

function Layout({ children, className }) {
	const cssClassName = className;

	return <div className={`${style[cssClassName]}`}>{children}</div>;
}

export { Layout };
