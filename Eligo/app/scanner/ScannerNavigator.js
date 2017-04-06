import React, { Component } from 'react';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import ScannerScreen from './views/ScannerScreen'
import ResultsScreen from './views/ResultsScreen'

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
  initialRouteParams: {barcode: "000"}
};

const TNav = TabNavigator(routeConfigs, tabConfigs);

export default class ScannerNavigator extends React.Component {
    static navigationOptions = {
        drawer: () => ({
            label: 'Scanner',
            icon: ({ tintColor }) => (
                <Icon name='barcode'/>
            ),
        })
    }

    render() {
        return(
            <TNav state={this.state}/>
        )
    }
}