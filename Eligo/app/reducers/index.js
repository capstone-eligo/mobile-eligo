import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';

import { ACTION_TYPES } from '../actions';

export function loginReducer(state={login:{}, auth:{}}, action) {
    const login = {...state.login}
    const auth = {...state.auth}

    switch(action.type) {
        case ACTION_TYPES.SEND_LOGIN:
            return {...state, login};
        case ACTION_TYPES.RECEIVED_LOGIN:
            console.log(action);
            return state;
        default:
            return state;
    }
}

// don't touch
export function barcodeReducer(state={ barcodes: {history: []}, product:{} }, action) {
    const barcodes = { ...state.barcodes };
    var product = { ...state.product };

    switch(action.type) {
        case ACTION_TYPES.ADD_BARCODE:
            barcodes.history.push(action.barcode);
            barcodes.lastBarcode = action.barcode;
            return { ...state, barcodes };
        case ACTION_TYPES.FETCHED_BARCODE:
            console.log(action);
            var product = action.product;
            return { ...state, product };
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
    switch(type) {
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }
}

const mainProfile = {
    name: "Test",
    avatar_url: 'https://c1.staticflickr.com/9/8598/16590802906_95dd43fa9a.jpg',
    email: 'pika0@eligo.com',
    accountId: "tinyMikeHands",
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

export const profileReducer = (state = {profile: mainProfile, members: myMemberProfile}, action) => {
    var profile = { ...state.profile };
    const members = { ...state.members };

    switch(action.type) {
        case ACTION_TYPES.SET_ACCOUNT:
            profile = action.acc
            console.log(action);
            return {...state, profile};

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
