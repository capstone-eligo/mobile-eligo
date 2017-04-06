'use strict'
import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'

import Camera from 'react-native-camera'

import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../../styles'

export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: "Test",
  }

  render(){
    return(
      <View style={ styles.container }>
        <Text>Test</Text>
      </View>
    )
  }
}
