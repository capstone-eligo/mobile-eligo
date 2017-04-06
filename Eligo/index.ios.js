/**
 * Eligo App
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';

import { appReducer } from './app/reducers';
import Login from './app/components/login';
import ShoppingList from './app/components/shoppingList';


const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key="loginStack">
      <Scene key='login' title='Login' component={Login}></Scene>
      <Scene key='shoppingList' title='Shopping List' component={ShoppingList}></Scene>      
    </Scene>
  </Scene>  
)

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer)

export default class Eligo extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Eligo', () => Eligo);