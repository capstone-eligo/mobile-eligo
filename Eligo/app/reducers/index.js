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
export function barcodeReducer(state={ barcodes: {}, product:{}, compare:{} }, action) {
    const barcodes = { ...state.barcodes };
    var product = { ...state.product };

    switch(action.type) {
        case ACTION_TYPES.ADD_BARCODE:
            barcodes.lastBarcode = action.barcode;
            return { ...state, barcodes };
        case ACTION_TYPES.FETCHED_BARCODE:
            if (action.comp) {
                var compare = action.product;
                return { ...state, compare };
            } else {
                var product = action.product;
                return { ...state, ...{product: product, compare: {}} };
            }
        case ACTION_TYPES.ERROR_BARCODE:
            return { ...state, ...{product: {error: true}}}

        default:
            return state;
    }
};

// don't touch
const sceneReducer = (state = {}, {type, scene}) => {
    switch(type) {
        case ActionConst.FOCUS:
            return { ...state, scene };
        case ActionConst.PUSH_OR_POP:
            return state;
        default:
            return state;
    }
}

const mainProfile = {};
export const profileReducer = (state = {profile: mainProfile}, action) => {
    var profile = { ...state.profile };

    switch(action.type) {
        case ACTION_TYPES.SET_ACCOUNT:
            console.log(action);
            if (!action.acc.list) {
                var acc = action.acc;
                acc.list = {};
                return {...state, profile: acc };

            } else {
                return {...state, profile: action.acc };
            }

        case ACTION_TYPES.GET_PROFILE:
            return state;

        case ACTION_TYPES.FETCHED_HISTORY:
            var refreshed = Object.assign({}, profile);
            refreshed.history = action.history;

            return {...state, profile: refreshed}

        case ACTION_TYPES.FETCHED_NEW_USER:
            var refreshed = Object.assign({}, action.account);
            refreshed.accountId = profile.accountId;

            return {...state, profile: refreshed};

        case ACTION_TYPES.CHANGE_PROFILE_NAME:
            profile.name = action.newName;
            return {...state, profile};

        case ACTION_TYPES.CHANGE_PROFILE_EMAIL:
            profile.email = action.newEmail;

            return {...state, profile};

        case ACTION_TYPES.FETCHED_DELETED_USER:
            var refreshed = Object.assign({}, action.account);
            refreshed.accountId = profile.accountId;

            return {...state, profile: refreshed};

        case ACTION_TYPES.FETCHED_SHOPPING_LIST:
            var refreshed = Object.assign({}, profile);
            refreshed.list = action.shopList;

            return {...state, profile: refreshed};

        default:
            return state;
    }
}

export const appReducer = combineReducers({
    sceneReducer,
    barcodeReducer,
    profileReducer,
});
