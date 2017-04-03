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

export default class ScannerScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Scanner',
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
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('ShoppingList')}
          style={ styles.welcomeButton }>
          <Text>Go to Shopping List</Text>
        </TouchableOpacity>

        <View style={ styles.cameraContainer }>
          <Camera 
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fit}
            onBarCodeRead={this.showBarcode}>
          </Camera>
        </View>

        <Text>Placeholder for search</Text>
      </View>
    )
  }
}
