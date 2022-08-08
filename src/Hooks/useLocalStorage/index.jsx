import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
	/* State whit loading and error status  */
	const [loading, setLoading] = useState(true);
	/* Is synchronized with all windows? */
	const [syncronizedItem, setsyncronizedItem] = useState(true);
	const [error, setError] = useState(false);
	/* This is a initial State */
	const [item, setItem] = useState(initialValue);

	useEffect(() => {
		console.log("ejecuta el useEffect");
		setTimeout(() => {
			try {
				/* Item is a KEY to localStorage */
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}
				setItem(parsedItem);
				setLoading(false);
				setsyncronizedItem(true);
			} catch (error) {
				console.log(error);
				setLoading(false);
				setError(true);
			}
		}, 3000);
	}, [syncronizedItem]);

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

	const syncronizeItem = () => {
		setLoading(true);
		setsyncronizedItem(false);
	};

	/* When we have more than one property, return an object */
	return {
		item,
		saveItem,
		loading,
		error,
		syncronizedItem,
		syncronizeItem,
	};
}

export { useLocalStorage };
