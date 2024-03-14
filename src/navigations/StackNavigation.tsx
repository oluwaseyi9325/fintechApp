import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import routes from './routes'
import HomepageScreen from '../screens/HomepageScreen'

const Stack= createStackNavigator()
export default function StackNavigation() {
  return (
  <Stack.Navigator>
    <Stack.Screen name={routes.HOMEPAGE} component={HomepageScreen} />
  </Stack.Navigator>
  )
}