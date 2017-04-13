export const ACTION_TYPES = {
    ADD_COUNT: 'ADD_COUNT',
}

export const addToCount = (val) => {
    return { type: 'ADD_COUNT', val };
}
