import style from './CreateButton.module.scss';

function CreateButton({ onClick, kind, children, type,id }) {
	const className = kind ? style.addButton : style.standardButton;

	return (
		<button id={id} className={className} onClick={onClick} 
			type={!type ? 'button' : type}>
			{children}
		</button>
	);
}

export { CreateButton };
