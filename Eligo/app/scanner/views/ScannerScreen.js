'use strict'
import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

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

  render(){
    return(
      <View style={ styles.container }>

        <Image source={require('../../img/eligo_tp.png')} style={ styles.welcomeLogo }/>
        <Text>Scanner</Text>
      
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('ShoppingList')}
          style={ styles.welcomeButton }>
          <Text>Go to Shopping List</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
