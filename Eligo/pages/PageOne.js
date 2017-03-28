import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
    render() {
        const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'}); 
        return (
            <View style={styles.container}>
                <Text onPress={goToPageTwo} style={styles.welcome}>Eligo</Text>
                <Text style={styles.instructions}>Don't let dietary restrictions, restrict your shopping</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});