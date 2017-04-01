'use strict'

import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'

import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'

import DrawNav from './app/navDrawer/views/DrawerNavigation'

import { ShoppingList } from './app/shoppingList/navConfig'
import { 
  DrawNavigator,
  tabBarReducer
} from './app/navDrawer/navConfig'

const middleware = () => {};

const store = createStore(
  combineReducers({
    DrawNav: tabBarReducer,
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