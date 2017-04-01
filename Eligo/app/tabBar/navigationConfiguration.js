'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
// import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
// import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'


const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation },
//   TabTwoNavigation: { screen: TabTwoNavigation },
//   TabThreeNavigation: { screen: TabThreeNavigation },
}

const tabBarConfiguration = {
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'white',
// background color is for the tab component
    activeBackgroundColor: '#44B8AE',
    inactiveBackgroundColor: '#FFF',
  }
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}