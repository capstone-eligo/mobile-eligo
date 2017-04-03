import React, { Component } from 'react';

import { 
    View,
    Text,
    Button
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';

import ShoppingListScreen from '../../shoppingList/views/ShoppingListScreen'
import ScannerScreen from '../../scabber/views/ScannerScreen'


const routeConfigs = {
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

export const mainNavigator = DrawerNavigator(routeConfigs, drawerConfigs);
