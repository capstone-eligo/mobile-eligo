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
  Drawer,
  navDrawerReducer
} from './app/navDrawer/navConfig'

const middleware = () => {};

const store = createStore(
  combineReducers({
    navDraw: (state,action) => Drawer.router.getStateForAction(action, state),
    navDrawerReducer: navDrawerReducer,
    shoppingList: (state,action) => ShoppingList.router.getStateForAction(action, state)
  })
  // middleware()
);


class Eligo extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Drawer />
      </Provider>
    )
  }
};

AppRegistry.registerComponent('Eligo', () => Eligo);