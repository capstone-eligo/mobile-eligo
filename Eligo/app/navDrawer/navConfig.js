'use strict'

import React from 'react'
import { View, ScrollView, DrawerView, Text } from 'react-native'
import { AppNavigator, DrawerNavigator, DrawerScreen, TabNavigator } from 'react-navigation'

import DrawerNavigation from '../navDrawer/views/DrawerNavigation'
import ShopppingListNavigation from '../shoppingList/views/ShopppingListNavigation'
import ScannerTest from '../scanner/ScannerTest'


import styles from '../styles'

const routeConfiguration = {
  ShoppingListNavigation: { screen: ShopppingListNavigation },
  Scanner: { screen: ScannerTest },
  // DrawerOpen: { screen: DrawerNavigation }
}

// todo fix drawer opening
export const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <Text> Hi </Text>
  </View>
);


const drawerConfiguration = {
  drawerWidth: 500,
  drawerPosition: "left",
  initialRouteName: "ShoppingListNavigation",
  // contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      marginVertical: 0,
    }
  },
  headerMode: "screen",
}

export const Drawer = DrawerNavigator(routeConfiguration, drawerConfiguration)


// navigation drawer reducer is not sending a Navigation Dispatch...it's only sending a simple object
export const navDrawerReducer = (state,action) => {
  if (action.routeName == "DrawerOpen") {
    // return { ...state, index:0 }
    console.log(action)

    return Drawer.router.getStateForAction(action,state) || state
    
  } else {
    console.log(action)
    return Drawer.router.getStateForAction(action,state) || state
  }
}