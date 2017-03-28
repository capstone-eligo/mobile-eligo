/**
 * Eligo app
 * 
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

export default class Eligo extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" hideNavBar={true} initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" hideNavBar={false}/>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('Eligo', () => Eligo);
