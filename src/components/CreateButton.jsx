import style from '../styles/CreateButton.module.scss';

function CreateButton({ onClick, className, children }) {
    
	const cssClassName = className;

	return <button  className={style[cssClassName]} onClick={onClick}>{children}</button>;
}

export { CreateButton };
