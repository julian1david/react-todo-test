import { Children, cloneElement } from 'react';
import style from './TodoHeader.module.scss';

export const TodoHeader = ({ children, loading }) => {
	return (
		<header className={style.Header}>
			{/*  Vamos a crear un clon  de children
				Esto se puede usar cuando el Header solo tiene one child */}
			{/* cloneElement(children, { loading}) */}
			{/* Cuando se pasan más de dos componentes o nodos se debe usar Children */}
			{Children.toArray(children).map((child, index) =>
				cloneElement(child, { loading, key: index })
			)}
		</header>
	);
};
