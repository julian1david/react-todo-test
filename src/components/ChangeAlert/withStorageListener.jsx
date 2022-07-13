/* use HOC */
import { useEffect, useState } from 'react';

export const withStorageListener = WrappedComponent => {
	return function WrappedComponentWithStorageListener(props) {
		/* Si hay un cambio en el navegador cambie este estado */
		const [storageChange, setStorageChange] = useState(false);

		useEffect(() => {
			window.addEventListener('storage', change => {
				if (change.key === 'TODO_V1') {
					console.log('Hubo Cambios en Todos_V1');
					setStorageChange(true);
				}
			});
		}, [storageChange]);

		const toggleShow = () => {
			/* Intercep prop of wrappedComponent */
			props.syncronized();
			setStorageChange(false);
		};

		return (
				<WrappedComponent 
					show={storageChange} 
					toggleShow={toggleShow} />
		);
	};
};
