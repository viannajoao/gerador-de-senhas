import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home/home'
import { Password } from './pages/passwords/password'

const Tab = createBottomTabNavigator()

export function Routes(){

  return(
  <Tab.Navigator>
    <Tab.Screen
      name='home'
      component={Home}
    />
    <Tab.Screen
      name='passwords'
      component={Password}
    />
  </Tab.Navigator>
  )
}