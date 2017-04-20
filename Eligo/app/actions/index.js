export const ACTION_TYPES = {
    ADD_BARCODE: 'ADD_BARCODE',
    SUBMIT_PROFILE_EDIT: "SUBMIT_PROFILE_EDIT",
    GET_PROFILE: "GET_PROFILE",
}

export const addBarcode = (barcode) => {
    return { type: 'ADD_BARCODE', barcode };
}

export const submitProfileEdit = (editedProfile) => {
    return { type: 'SUBMIT_PROFILE_EDIT', editedProfile };
}

export const getProfile = (profileID) => {
    return { type: 'GET_PROFILE', profileID };
}
