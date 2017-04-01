import React from 'react'

import { Button } from 'react-native'

export default class ScannerTest extends React.Component {
  static navigationOptions = {
    drawer: () => ({
      label: 'Notifications'
    }),
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}