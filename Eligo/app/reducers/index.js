import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';

import { ACTION_TYPES } from '../actions';

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

export function shoppingReducer(state={ count: {} }, action) {
    const count = { ...state.count };
    switch(action.type) {        
        default:
            return state;
    }
};

const sceneReducer = (state = {}, {type, scene}) => {
    switch(type) {
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }    
}

const mainProfile = {
    name: 'Pika Chu 0',
    avatar_url: 'https://c1.staticflickr.com/9/8598/16590802906_95dd43fa9a.jpg',
    email: 'pika0@eligo.com'
}

const myMemberProfile = [
    {
        name: 'Pika Chu 1',
        avatar_url: 'https://c1.staticflickr.com/9/8598/16590802906_95dd43fa9a.jpg',
        email: 'pika@eligo.com'
    }, {
        name: 'Ee Vee 1',
        avatar_url: 'https://c1.staticflickr.com/9/8654/16609336835_4d3c09b4a8_b.jpg',
        email: 'eevee@eligo.com'
    }, {
        name: 'Pika Chu 2',
        avatar_url: 'https://c1.staticflickr.com/9/8598/16590802906_95dd43fa9a.jpg',
        email: 'pika2@eligo.com'
    }, {
        name: 'Ee Vee 2',
        avatar_url: 'https://c1.staticflickr.com/9/8654/16609336835_4d3c09b4a8_b.jpg',
        email: 'eevee2@eligo.com'
    }
];

export const profileReducer = (state = {profile:mainProfile, members: myMemberProfile}, action) => {
    const profile = { ...state.profile };
    const members = { ...state.members };
    
    switch(action.type) {
        case ACTION_TYPES.GET_PROFILE:
        
            return state;
            
        case ACTION_TYPES.CHANGE_PROFILE_NAME:
            profile.name = action.newName;

            return {...state, profile};

        case ACTION_TYPES.CHANGE_PROFILE_EMAIL:
            profile.email = action.newEmail;

            return {...state, profile};

        default:
            return state;
    }
}

export const appReducer = combineReducers({
    sceneReducer,
    barcodeReducer,
    shoppingReducer,
    profileReducer,
});
