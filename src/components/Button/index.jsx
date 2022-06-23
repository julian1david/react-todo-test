import style from './CreateButton.module.scss';

function CreateButton({ onClick, kind, children }) {
	const className = kind ? style.addButton : style.hideButton;

	return (
		<button className={className} onClick={onClick} type='button'>
			{children}
		</button>
	);
}

export { CreateButton };
