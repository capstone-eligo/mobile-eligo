'use strict'
import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from '../../styles'

export default class ShoppingListOne extends React.Component {
  render(){
    return(
      <View style={ styles.container }>

        <Image source={require('../../img/eligo_tp.png')} style={ styles.welcomeLogo }/>
        <Text>Shopping List Page 1/2</Text>
      
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('ShoppingListTwo') }
          style={ styles.welcomeButton }>
          <Text>Go to next screen this tab</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('DrawerOpen')}
          style={ styles.welcomeButton }>
          <Text>Open drawer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
