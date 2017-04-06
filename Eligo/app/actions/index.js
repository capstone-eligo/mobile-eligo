export const ACTION_TYPES = {
    ADD_COUNT: 'ADD_COUNT',
}

export const addToCount = (count) => {
    return { type: 'ADD_COUNT', count };
}
