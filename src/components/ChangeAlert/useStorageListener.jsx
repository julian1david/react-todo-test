/* UseHooks */

import { useEffect, useState } from 'react';

export const useStorageListener = (syncronized) => {
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
			syncronized();
			setStorageChange(false);
		};

        return {
            show: storageChange,
            toggleShow,
        }
};
