/* UseHooks */

import { useEffect, useState } from 'react';

export const useStorageListener = syncronized => {
	/* Si hay un cambio en el navegador cambie este estado */
	const [storageChange, setStorageChange] = useState(false);

	useEffect(() => {
		const onChange = change => {
			if (change.key === 'TODO_V1') {
				console.log('Hubo cambios en TODOS_V1');
				setStorageChange(true);
			}
		};

		window.addEventListener('storage', onChange);

		return () => {
			window.removeEventListener('storage', onChange);
		};
	}, [storageChange]);

	const toggleShow = () => {
		/* Intercep prop of wrappedComponent */
		syncronized();
		setStorageChange(false);
	};

	return {
		show: storageChange,
		toggleShow,
	};
};
