import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';

import { ACTION_TYPES } from '../actions';

// don't touch
export function barcodeReducer(state={ barcodes: {history: []} }, action) {
    const barcodes = { ...state.barcodes };
    switch(action.type) {
        case ACTION_TYPES.ADD_BARCODE:
            var x = Number(Math.random() * 15);
            barcodes.history.push(action.barcode);
            barcodes.lastBarcode = action.barcode;
            
            return { ...state, barcodes };       
        default:
            return state;
    }
};

// can touch 
export function shoppingReducer(state={ count: {} }, action) {
    const count = { ...state.count };
    switch(action.type) {        
        default:
            return state;
    }
};

// don't touch
const sceneReducer = (state = {}, {type, scene}) => {
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }    
}

export const appReducer = combineReducers({
    sceneReducer,
    barcodeReducer,
    shoppingReducer,
});
