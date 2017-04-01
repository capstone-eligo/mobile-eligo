'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import ShoppingListOne from './views/ShoppingListOne'
import ShoppingListTwo from './views/ShoppingListTwo'

const routeConfiguration = {
  ShoppingListOne: { screen: ShoppingListOne },
  ShoppingListTwo: { screen: ShoppingListTwo },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'ShoppingListOne'
}

export const ShoppingList = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
