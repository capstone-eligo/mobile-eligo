export const ACTION_TYPES = {
    ADD_BARCODE: 'ADD_BARCODE',
    FETCHED_BARCODE: 'FETCHED_BARCODE',
    SET_ACCOUNT: "SET_ACCOUNT",
    CHANGE_PROFILE_NAME: "CHANGE_PROFILE_NAME",
    CHANGE_PROFILE_EMAIL: "CHANGE_PROFILE_EMAIL",
    GET_PROFILE: "GET_PROFILE",
}

export const addBarcode = (barcode) => {
    return { type: 'ADD_BARCODE', barcode };
}

export const fetchBarcode = (barcode, accountId) => {
    return dispatch => {
        dispatch(addBarcode(barcode))
        return fetch('https://infinite-journey-83753.herokuapp.com/upc/' + barcode + "?" + "accountId=" + accountId)
            .then(response => response.json())
            .then(json => dispatch(receivedBarcode(barcode, json)))
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

export const setAccount = (acc) => {
    return { type: 'SET_ACCOUNT', acc };
}

export const changeProfileName = (newName) => {
    return { type: 'CHANGE_PROFILE_NAME', newName };
}

export const changeProfileEmail = (newEmail) => {
    return { type: 'CHANGE_PROFILE_EMAIL', newEmail };
}

export const getProfile = (profileID) => {
    return { type: 'GET_PROFILE', profileID };
}
