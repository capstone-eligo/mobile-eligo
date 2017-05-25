export const ACTION_TYPES = {
    ADD_BARCODE: 'ADD_BARCODE',
    FETCHED_BARCODE: 'FETCHED_BARCODE',
    FETCHED_HISTORY: 'FETCHED_HISTORY',

    SET_ACCOUNT: 'SET_ACCOUNT',
    GET_PROFILE: "GET_PROFILE",

    ADD_NEW_USER: "ADD_NEW_USER",
    FETCH_NEW_USER: "FETCH_NEW_USER",
    FETCHED_NEW_USER: "FETCHED_NEW_USER",

    DELETE_USER: "DELETE_USER",
    FETCHED_DELETED_USER: "FETCHED_DELETED_USER",

    CLEAR_PROFILE: "CLEAR_PROFILE",
}

const baseURL = 'https://infinite-journey-83753.herokuapp.com/';

export const addBarcode = (barcode) => {
    return { type: 'ADD_BARCODE', barcode };
}

export const fetchBarcode = (barcode, accountId) => {
    return dispatch => {
        dispatch(addBarcode(barcode))
        return fetch(baseURL + 'upc/' + barcode + "?" + "accountId=" + accountId)
            .then(response => response.json())
            .then(json => {
                dispatch(receivedBarcode(barcode, json));
                dispatch(updateHistory(accountId));
            })
    }
}

export const receivedBarcode = (barcode, json) => {
    return {
        type: 'FETCHED_BARCODE',
        barcode,
        product: json,
        receivedAt: Date.now()
    }
}

export const updateHistory = (accountId) => {
    return dispatch => {
        return fetch(baseURL + 'history',
            {method: "POST", headers:{'Content-Type': 'application/json'}, body: JSON.stringify({'accountId': accountId})})
            .then(response => response.json())
            .then(json => dispatch(receivedHistory(json)))
    }
}

export const receivedHistory = (json) => {
    return {
        type: "FETCHED_HISTORY",
        history: json,
        receivedAt: Date.now()
    }
}

export const setAccount = (acc) => {
    return { type: 'SET_ACCOUNT', acc };
}

export const addNewUser = (newUser) => {
    return { type: 'ADD_NEW_USER', newUser };
}

export const fetchNewUser = (newUser) => {
    return dispatch => {
        dispatch(addNewUser(newUser));
        return fetch(baseURL + 'users',
            {method: "POST", headers:{'Content-Type': 'application/json'}, body: JSON.stringify(newUser)})
            .then(response => {return response.json()})
            .then(json => dispatch(receivedNewUser(newUser, json)))
    }
}

export const receivedNewUser = (newUser, json) => {
    return {
        type: 'FETCHED_NEW_USER',
        newUser: newUser,
        account: json,
        receivedAt: Date.now()
    }
}

export const deleteUser = (dUser) => {
    return { type: 'DELETE_USER', dUser };
}

export const fetchDeleteUser = (dUser) => {
    return dispatch => {
        dispatch(deleteUser(dUser));
        return fetch(baseURL + 'deleteUser',
            {method: "POST", headers:{'Content-Type': 'application/json'}, body: JSON.stringify(dUser)})
            .then(response => {return response.json()})
            .then(json => dispatch(receivedDeletedUser(dUser, json)))
    }
}

export const receivedDeletedUser = (dUser, json) => {
    return {
        type: 'FETCHED_DELETED_USER',
        dUser: dUser,
        account: json,
        receivedAt: Date.now()
    }
}

export const getProfile = (profileID) => {
    return { type: 'GET_PROFILE', profileID };
}

export const clearProfile = () => {
    return { type: 'CLEAR_PROFILE' };
}