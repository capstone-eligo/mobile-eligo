'use strict'

import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'

import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'

import TabBarNavigation from './app/tabBar/views/TabBarNavigation'

import { NavigatorTabOne } from './app/tabOne/navigationConfiguration'
import { 
  TabBar,
  tabBarReducer
} from './app/tabBar/navigationConfiguration'

const middleware = () => {};

const store = createStore(
  combineReducers({
    tabBar: tabBarReducer,
    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action, state),
  }),
  middleware()
);


class Eligo extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
};

AppRegistry.registerComponent('Eligo', () => Eligo);