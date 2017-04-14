export const ACTION_TYPES = {
    ADD_BARCODE: 'ADD_BARCODE',
}

export const addBarcode = (barcode) => {
    return { type: 'ADD_BARCODE', barcode };
}
