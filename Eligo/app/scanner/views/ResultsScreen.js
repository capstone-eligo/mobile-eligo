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
  constructor(props) {
    super(props);

    this.state = {test: 'hello world'};
  }

  static navigationOptions = {
    tabBar: () => ({
      label: 'Results',
      icon: ({ tintColor }) => (
        <Icon name='barcode'/>
      ),
    }),
  }

  render(){
    return(
      <View style={ styles.container }>
        <Text>Results</Text>
        <Text>{this.state.test}</Text>
      </View>
    )
  }
}
