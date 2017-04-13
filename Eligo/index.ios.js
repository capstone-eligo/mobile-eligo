/**
 * Eligo App
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';

import { appReducer } from './app/reducers';
import Login from './app/components/login';
import ShoppingList from './app/components/shoppingList';
import Scanner from './app/components/scanner';

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './app/styles'


class TabIcon extends React.Component {
    render(){
        return (
            <View style={styles.iconContainer}>
              <Icon style={{color: this.props.selected ? '#44B8AE' :'#BBB'}} name='barcode'/>
              <Text style={{color: this.props.selected ? '#44B8AE' :'#BBB'}}>{this.props.title}</Text>
            </View>
        );
    }
}

const Scenes = Actions.create(
  <Scene key='root'>
      <Scene key='login' title='Login' component={Login} hideNavBar></Scene>
      <Scene key='lists' tabs={true} hideNavBar type={ActionConst.REPLACE} style={styles.tabBarStyle}>
          <Scene key='shoppingList' title='Shopping List' component={ShoppingList} icon={TabIcon}></Scene>
          <Scene key='scanner' title='Scanner' component={Scanner} icon={TabIcon}></Scene>
      </Scene>
  </Scene>  
)

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer)

export default class Eligo extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Eligo', () => Eligo);