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

export default class ShoppingListScreen extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Shopping List',
      icon: ({ tintColor }) => (
        <Icon name="list-ul"/>
      ),
    }),
  }

  render(){
    let temp = this.state ? this.state.test : "nothing passed";

    return(
      <View style={ styles.container }>

        <Image source={require('../../img/eligo_tp.png')} style={ styles.welcomeLogo }/>
        <Text>Shopping List - and test = {temp}</Text>
      
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('DrawerOpen')}
          style={ styles.welcomeButton }>
          <Text>Open drawer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
