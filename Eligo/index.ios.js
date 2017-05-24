/**
 * Eligo App
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, StatusBar} from 'react-native';

import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Actions, ActionConst, Router, Scene} from 'react-native-router-flux';
import thunkMiddleware from 'redux-thunk';

import {appReducer} from './app/reducers';
import Login from './app/components/login';
import OnboardOne from './app/components/onboardOne';
import ShoppingList from './app/components/shoppingList';
import Scanner from './app/components/scanner';
import ScanHistory from './app/components/scanHistory';
import Profiles from './app/components/profiles';
import EditProfile from './app/components/editProfile';
import AddUser from './app/components/addUser';
import Settings from './app/components/settings';
import Results from './app/components/results';
import Terms from './app/components/terms';
import Privacy from './app/components/privacy';
import Acknowledge from './app/components/acknowledge';
import DRList from './app/components/drList';

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './app/styles'

class ListIcon extends React.Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Image
          style={{
            tintColor: this.props.selected ? '#44B8AE': '#BBB',
            height: 12,
            width: 12,
            paddingBottom: 3,
          }}
          source={require('./app/img/shopping-list.png')}/>
        <Text
          style={{
            color: this.props.selected ? '#44B8AE': '#BBB'
          }}
        >{this.props.title}</Text>
      </View>
    );
  }
}

class ScannerIcon extends React.Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Image
          style={{
            tintColor: this.props.selected ? '#44B8AE': '#BBB',
            height: 12,
            width: 12,
            paddingBottom: 3,
          }}
          source={require('./app/img/scanner.png')}/>
        <Text
          style={{
            color: this.props.selected ? '#44B8AE': '#BBB'
          }}
        >{this.props.title}</Text>
      </View>
    );
  }
}

class ProfilesIcon extends React.Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Image
          style={{
            tintColor: this.props.selected ? '#44B8AE': '#BBB',
            height: 12,
            width: 12,
            paddingBottom: 3,
          }}
          source={require('./app/img/profile.png')}/>
        <Text
          style={{
            color: this.props.selected ? '#44B8AE': '#BBB'
          }}
        >{this.props.title}</Text>
      </View>
    );
  }
}

class SettingsIcon extends React.Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Image
          style={{
            tintColor: this.props.selected ? '#44B8AE': '#BBB',
            height: 12,
            width: 12,
            paddingBottom: 3,
          }}
          source={require('./app/img/settings.png')}/>
        <Text
          style={{
            color: this.props.selected ? '#44B8AE': '#BBB'
          }}
        >{this.props.title}</Text>
      </View>
    );
  }
}

const Scenes = Actions.create(
  <Scene key='root' statusBarStyle="dark-content">
    {/*<Scene key='login' title='Login' component={Login} hideNavBar></Scene>*/}

    <Scene key='onboardOne' title='History' hideNavBar component={OnboardOne}></Scene>

    <Scene
      key='lists'
      tabs={true}
      hideNavBar
      type={ActionConst.REPLACE}
      style={styles.tabBarStyle}>
      <Scene key='shoppingList' title='List' component={ShoppingList} icon={ListIcon}></Scene>
      <Scene key='scanner' title='Scanner' component={Scanner} icon={ScannerIcon}></Scene>
      <Scene key='profiles' title='Profiles' component={Profiles} icon={ProfilesIcon}></Scene>
      <Scene key='settings' title='Settings' component={Settings} icon={SettingsIcon}></Scene>
    </Scene>

    <Scene key='history' title='History' hideNavBar={false} component={ScanHistory}></Scene>
    <Scene key='editProfile' title='Edit Profile' hideNavBar={false} component={EditProfile}></Scene>
    <Scene key='addUser' title='Add User' hideNavBar={false} component={AddUser}></Scene>
    <Scene key='results' title='Results' hideNavBar={false} component={Results}></Scene>
    <Scene key='terms' title='Terms and agreement' hideNavBar={false} component={Terms}></Scene>
    <Scene key='privacy' title='Privacy' hideNavBar={false} component={Privacy}></Scene>
    <Scene key='acknowledgements' title='Acknowledgements' hideNavBar={false} component={Acknowledge}></Scene>
    <Scene key='drList' title='Dietary Restrictions' hideNavBar={false} component={DRList}></Scene>

    {/*TODO Add onboarding scenes*/}
    {/*TODO Add submit new ingredients to add*/}
  </Scene>
)

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer,
                applyMiddleware(thunkMiddleware));

export default class Eligo extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter
          scenes={Scenes}
          navigationBarStyle={styles.navBar}
          barButtonIconStyle={styles.barButtonIconStyle}
          titleStyle={styles.navBarTitle}/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Eligo', () => Eligo);