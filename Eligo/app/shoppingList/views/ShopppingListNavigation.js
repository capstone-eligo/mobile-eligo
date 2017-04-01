
'use strict'

// React
import React from 'react'

import { Text } from 'react-native'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { ShoppingList } from '../navConfig'

// Redux
import { connect } from 'react-redux'

// // Icon
// import Icon from 'react-native-vector-icons/FontAwesome'


const mapStateToProps = (state) => {
 return {
  navigationState: state.tabOne
  }
}

class ShoppingListNavigation extends React.Component {
  static navigationOptions = {
    title: "hello",
    drawer: () => ({
      label: 'Shopping List',
      icon: (<Text>Hi</Text>)
    }),
  }

  render(){
    const { navigationState, dispatch } = this.props

    return (
      <ShoppingList
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(ShoppingListNavigation)




