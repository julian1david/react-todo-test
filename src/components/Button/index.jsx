import style from './CreateButton.module.scss';

function CreateButton({ onClick, kind, children, type }) {
	const className = kind ? style.addButton : style.hideButton;

	return (
		<button className={className} onClick={onClick} 
			type={!type ? 'button' : type}>
			{children}
		</button>
	);
}

export { CreateButton };
