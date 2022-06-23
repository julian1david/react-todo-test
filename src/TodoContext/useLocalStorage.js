import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
	/* State whit loading and error status  */
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	/* This is a initial State */
	const [item, setItem] = useState(initialValue);

	useEffect(() => {
		setTimeout(() => {
			try {
				/* ItenName is a KEY to localStorage */
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;
				if (!localStorageItem || localStorageItem === undefined) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}
				setItem(parsedItem);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
				setError(true);
			}
		}, 3000);
	}, []);

	/* Save item in localStorage */
	const saveItem = newItem => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			setItem(newItem);
		} catch (error) {
			/* In case of error, return this state */
			console.log(error);
			setError(true);
		}
	};

	/* When we have more than one property, return an object */
	return {
		item,
		saveItem,
		loading,
		error,
	};
}

export { useLocalStorage };
