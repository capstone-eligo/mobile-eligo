import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';

// import { groceryReducer } from './groceryReducer';
// import { todoReducer } from './todoReducer';


import { ACTION_TYPES } from '../actions';

export function countReducer(state={ count: {} }, action) {
    const count = { ...state.count };
    switch(action.type) {
        case ACTION_TYPES.ADD_COUNT:
            var x = Number(Math.random() * 15)
            count[x] = 1
            console.log(count);
            return { ...state, count };       
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
    switch(type){
        case ActionConst.FOCUS:
            return { ...state, scene };
        default:
            return state;
    }    
}

export const appReducer = combineReducers({
    sceneReducer,
    countReducer,
    shoppingReducer,
});
