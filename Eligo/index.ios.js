/**
 * Eligo App
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

import LoginScreen from './app/loginScreen/views/LoginScreen'
import ShoppingListScreen from './app/shoppingList/views/ShoppingListScreen'
import ScannerScreen from './app/scanner/views/ScannerScreen'


// nested drawer stuff
const drawRouteConfigs = {
  ShoppingList: {
    screen: ShoppingListScreen
  },
  Scanner: {
    screen: ScannerScreen
  }
};

const drawerConfigs = {
  initialRouteName: "ShoppingList"
};

export const mainNavigator = DrawerNavigator(drawRouteConfigs, drawerConfigs);

// parent stack navigator stuff
const routeConfig = {
  Login: {
    screen: LoginScreen,
  },
  MainNav: {
    screen: mainNavigator
  }
};

const stackConfig = {
  initialRouteName: 'Login',
  headerMode: "none"
};

const ModalStack = StackNavigator(routeConfig, stackConfig);

AppRegistry.registerComponent('Eligo', () => ModalStack);