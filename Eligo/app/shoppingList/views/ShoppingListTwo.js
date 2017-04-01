'use strict'
import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from '../../styles'

export default class ShoppingListTwo extends React.Component {
  render(){
    return(
      <View style={ styles.container }>

        <Image source={require('../../img/eligo_tp.png')} style={ styles.welcomeLogo }/>
        <Text>Shopping List Page 2/2</Text>
      
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={ styles.welcomeButton }>
          <Text>Go back to Screen 1</Text>
        </TouchableOpacity>
      </View>
    )
  }
}



