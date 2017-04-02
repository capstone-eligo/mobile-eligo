import React, { Component } from 'react';

import { 
    View,
    Text,
    Button
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';

import ShoppingListScreen from '../../shoppingList/views/ShoppingListScreen'


const routeConfigs = {
  ShoppingList: {
    screen: ShoppingListScreen
  }
};

const drawerConfigs = {
  initialRouteName: "ShoppingList"
};

export const mainNavigator = DrawerNavigator(routeConfigs, drawerConfigs);
