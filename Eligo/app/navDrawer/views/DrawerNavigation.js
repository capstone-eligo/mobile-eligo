'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { Drawer } from '../navConfig'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.navDraw,
  }
}

class DrawerNavigation extends React.Component {
  render(){
    const { dispatch, navigationState } = this.props
    return (
      <Drawer
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(DrawerNavigation)