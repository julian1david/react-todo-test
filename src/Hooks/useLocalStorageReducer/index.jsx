import { useReducer, useEffect } from "react";

const useLocalStorageReducer = (itemName, initialValue) => {

    const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

    const { loading,
        syncronizedItem,
        error,
        item,} = state;


    /* Action creators */
    const onError = (error) => dispatch({ 
        type: actionTypes.error, 
        payload: error
    })
    
    const onSuccess = (parsedItem) => dispatch({ 
        type: actionTypes.success, 
        payload: parsedItem
    })

    const onSave = (newItem) => dispatch({ 
        type: actionTypes.save, 
        payload: newItem
    })

    const onSync = () => dispatch({
        type: actionTypes.syncronize
    })


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
                onSuccess(parsedItem);
			} catch (error) {
                onError(error)
			}
		}, 3000);
	}, [syncronizedItem]);


    /* Save item in localStorage */
	const saveItem = newItem => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			onSave(newItem)
		} catch (error) {
			/* In case of error, return this state */
            onError(error)
		}
	};

	const syncronizeItem = () => {
		onSync()
	};

    /* When we have more than one property, return an object */
	return {
		item,
		loading,
		error,
		syncronizedItem,
		saveItem,
		syncronizeItem,
	};
};

const initialState = ({ initialValue}) =>({ 
    loading:true,
    syncronizedItem:true,
    error:false,
    item:initialValue,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESSS',
    loading: 'LOADING',
    save: 'SAVE',
    syncronize: 'SYNCRONIZE'
};

const reducerObject = (state, payload) => ({
    [actionTypes.error]:{
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.success]:{
        ...state,
        error:false,
        loading:false,
        syncronizedItem: true,
        item:payload
    },
    [actionTypes.save]:{
        ...state,
        item: payload
    },
    [actionTypes.syncronize]:{
        ...state,
        syncronizedItem: false,
        loading: true
    }
})
const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorageReducer }