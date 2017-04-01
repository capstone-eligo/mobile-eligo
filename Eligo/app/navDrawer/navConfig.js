'use strict'

import React from 'react'
import { View, ScrollView, DrawerView, Text } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import ShopppingListNavigation from '../shoppingList/views/ShopppingListNavigation'
import ScannerTest from '../scanner/ScannerTest'


import styles from '../styles'

const routeConfiguration = {
  ShopppingListNavigation: { screen: ShopppingListNavigation },
  Scanner: { screen: ScannerTest }
}

// todo fix drawer opening
const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <Text> HI </Text>
  </View>
);


const drawerConfiguration = {
  drawerWidth: 500,
  drawerPosition: "left",
  contentComponent: CustomDrawerContentComponent
  // contentOptions: {
  //   activeTintColor: '#e91e63',
  //   style: {
  //     marginVertical: 0,
  //   }
  // }
}

export const DrawNavigator = DrawerNavigator(routeConfiguration, drawerConfiguration)

export const navDrawerReducer = (state,action) => {
  if (action.type === 'DrawerOpen') {
    return { ...state, index:0 }
  } else {
    return DrawNavigator.router.getStateForAction(action,state)
  }
}