import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import routes from './routes'
import HomepageScreen from '../screens/HomepageScreen'
import ConfirmationScreen from '../screens/ConfirmationScreen'
import TransferScreen from '../screens/Transfer/TransferScreen'
import TransactionHistoryScreen from '../screens/Transfer/TransactionHistoryScreen'
import CardScreen from '../screens/CardScreen'
import NotificationScreen from '../screens/NotificationScreen'
import ProfileCompletedScreen from '../screens/profile/ProfileCompletedScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'
import { RootStackParamList } from '../types/StackTypes'

const Stack= createStackNavigator<RootStackParamList>()
export default function StackNavigation() {
  return (
  <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name={routes.TRANSFER_SCREEN} component={TransferScreen} />
    <Stack.Screen name={routes.HOMEPAGE} component={HomepageScreen} />
   
    <Stack.Screen name={routes.CONFIRMATION_SCREEN} component={ConfirmationScreen} />
    <Stack.Screen name={routes.TRANSACTION_HISTORY_SCREEN} component={TransactionHistoryScreen} />
    <Stack.Screen name={routes.CARD_SCREEN} component={CardScreen} />
    <Stack.Screen name={routes.NOTIFICATION_SCREEN} component={NotificationScreen} />
    <Stack.Screen name={routes.PROFILE_COMPLETED_SCREEN} component={ProfileCompletedScreen} />
    <Stack.Screen name={routes.PROFILE_SCREEN} component={ProfileScreen} />
  </Stack.Navigator>
  )
}