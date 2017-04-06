/**
 * Eligo App
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

// Login screens
import LoginScreen from './app/login/views/LoginScreen'

// Main navigator screens
import ShoppingListScreen from './app/shoppingList/views/ShoppingListScreen'

// Scanner navigator screens
import ScannerScreen from './app/scanner/views/ScannerScreen'
import ResultsScreen from './app/scanner/views/ResultsScreen'
import ScannerTabScreen2 from './app/scanner/views/ScannerTabScreen2'


// scanner tab navigator stuff
const routeConfigs = {
  Scanner: {
    screen: ScannerScreen
  },
  Results: {
    screen: ResultsScreen
  },
  // Nutrition: {
  //   screen: NutritionScreen
  // }
};

const tabConfigs = {
  initialRouteName: "Scanner",
};

export const ScannerNavigator = TabNavigator(routeConfigs, tabConfigs);
ScannerNavigator.navigationOptions = {
      drawer: () => ({
        label: 'Scanner',
        icon: ({ tintColor }) => (
          <Icon name='barcode'/>
        ),
    }),
  }

// nested drawer stuff
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

class App extends React.Component {
  construtor(props) {
    super(props);
    this.state = {test: "hello"};
  }

  render() {
    return (
      <ModalStack state={this.state}/>
    )
  }
}

AppRegistry.registerComponent('Eligo', () => App);