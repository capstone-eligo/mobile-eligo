'use strict'
import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from '../../styles'

export default class TabOneScreenOne extends React.Component {
  render(){
    return(
      <View style={ styles.container }>

        <Image source={require('../../img/eligo_tp.png')} style={ styles.welcomeLogo }/>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabOneScreenTwo') }
          style={ styles.welcomeButton }>
          <Text>Go to next screen this tab</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
