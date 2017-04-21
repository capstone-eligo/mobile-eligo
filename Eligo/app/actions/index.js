export const ACTION_TYPES = {
    ADD_BARCODE: 'ADD_BARCODE',
    CHANGE_PROFILE_NAME: "CHANGE_PROFILE_NAME",
    CHANGE_PROFILE_EMAIL: "CHANGE_PROFILE_EMAIL",
    GET_PROFILE: "GET_PROFILE",
}

export const addBarcode = (barcode) => {
    return { type: 'ADD_BARCODE', barcode };
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
