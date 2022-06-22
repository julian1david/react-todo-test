import { useEffect, useState, } from "react";

function useLocalStorage(itemName, initialValue) {

    const [dataStatus, setDataStatus] = useState({ loading: true, error: false });
    // Por defencto va a ser nuestro estado inicial
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                // Traemos lo que hay en local storage con el KEY
                const localStorageItem = localStorage.getItem(itemName);
                // Variable para recibir el parseo
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


    /* 	useEffect(() => {
            localStorage.setItem(itenName, JSON.stringify(todos));
        }); */


    // Como esta no debemos esperar
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            // En caso de algún error lo guardamos en el estado
            setDataStatus({ ...dataStatus, error: true });
        }
    };

    // Cuando tenemos más de dos estados debemos envíar un objeto
    return {
        item,
        saveItem,
        dataStatus,
    }
}

export { useLocalStorage }