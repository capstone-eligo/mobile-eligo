import React, { Component } from 'react';

import { 
    View,
    Text,
    Button
} from 'react-native';

import styles from '../../styles'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login",
  }

  render() {
    return (
        <View style={styles.container}>
            <Button
            onPress={() => this.props.navigation.navigate('MainNav')}
            title="Login"/>
        </View>
    );
  }
}