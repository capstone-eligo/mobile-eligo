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

export default class ResultsScreen extends React.Component {
  static navigationOptions = {
    tabBar: () => ({
      label: 'Results',
      icon: ({ tintColor }) => (
        <Icon name='barcode'/>
      ),
    }),
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  showBarcode(data, bounds) {
    console.log(data);
  } 

  render(){
    return(
      <View style={ styles.container }>
        <Text>Results</Text>
      </View>
    )
  }
}
