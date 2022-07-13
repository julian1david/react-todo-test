import ReactDOM from 'react-dom';
import style from './Modal.module.scss';

export const Modal = ({ children, kind }) => {
	const className = kind
		? `${style.ModalBackground} ${style.absolute}`
		: style.ModalBackground;

	return ReactDOM.createPortal(
		<div className={className}>{children}</div>,
		/* llamamos a nuestro nuevo nodo */
		document.getElementById('modal')
	);
};
