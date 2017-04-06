import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome'

import ScannerNavigator from './scanner/ScannerNavigator'
import ShoppingListScreen from './shoppingList/views/ShoppingListScreen'

const drawRouteConfigs = {
  ShoppingList: {
    screen: ShoppingListScreen
  },
  ScannerNav: {
    screen: ScannerNavigator
  }
};

const drawerConfigs = {
  initialRouteName: "ShoppingList"
};

const DNav = DrawerNavigator(drawRouteConfigs, drawerConfigs);

export default class MainNavigator extends React.Component {
    render() {
        return(
            <DNav />
        )
    }
}