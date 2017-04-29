export const ACTION_TYPES = {
    ADD_BARCODE: 'ADD_BARCODE',
    FETCHED_BARCODE: 'FETCHED_BARCODE',
    CHANGE_PROFILE_NAME: "CHANGE_PROFILE_NAME",
    CHANGE_PROFILE_EMAIL: "CHANGE_PROFILE_EMAIL",
    GET_PROFILE: "GET_PROFILE",
}

export const addBarcode = (barcode) => {
    return { type: 'ADD_BARCODE', barcode };
}

export const fetchBarcode = (barcode) => {
    return dispatch => {
        dispatch(addBarcode(barcode))
        return fetch('https://jsonplaceholder.typicode.com/' + barcode)
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

export const changeProfileName = (newName) => {
    return { type: 'CHANGE_PROFILE_NAME', newName };
}

export const changeProfileEmail = (newEmail) => {
    return { type: 'CHANGE_PROFILE_EMAIL', newEmail };
}

export const getProfile = (profileID) => {
    return { type: 'GET_PROFILE', profileID };
}
