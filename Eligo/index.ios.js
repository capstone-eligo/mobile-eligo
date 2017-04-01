'use strict'

import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'

import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'

import { ShoppingList } from './app/shoppingList/navConfig'
import { 
  DrawNavigator,
  navDrawerReducer
} from './app/navDrawer/navConfig'

const middleware = () => {};

const store = createStore(
  combineReducers({
    navDraw: navDrawerReducer,
    tabOne: (state,action) => ShoppingList.router.getStateForAction(action, state),
  }),
  middleware()
);


class Eligo extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <DrawNavigator />
      </Provider>
    )
  }
};

AppRegistry.registerComponent('Eligo', () => Eligo);