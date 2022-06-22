import { useEffect, useState, } from "react";

function useLocalStorage(itemName, initialValue) {

    /* State whit loading and error status  */
    const [dataStatus, setDataStatus] = useState({ loading: true, error: false });
    /* This is a initial State */
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                /* ItenName is a KEY to localStorage */
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setDataStatus({ ...dataStatus, loading: false })
            }
            catch (error) {
                console.log(error);
            }
        }, 5000)
    }, [])

    /* Save item in localStorage */
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            /* In case of error, return this state */
            setDataStatus({ ...dataStatus, error: true });
        }
    };

    /* When we have more than one property, return an object */
    return {
        item,
        saveItem,
        dataStatus,
    }
}

export { useLocalStorage }