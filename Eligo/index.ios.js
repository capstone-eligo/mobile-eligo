/**
 * Eligo App
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';

import LoginScreen from './app/login/views/LoginScreen'
import MainNavigator from './app/MainNavigator'

// parent stack navigator stuff
const routeConfig = {
  Login: {
    screen: LoginScreen,
  },
  MainNav: {
    screen: MainNavigator
  }
};

const stackConfig = {
  initialRouteName: 'Login',
  headerMode: "none"
};

const ModalStack = StackNavigator(routeConfig, stackConfig);

class App extends React.Component {
  render() {
    return (
      <ModalStack/>
    )
  }
}

AppRegistry.registerComponent('Eligo', () => App);