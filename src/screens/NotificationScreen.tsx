import { View, Text } from 'react-native'
import React from 'react'
import NotificationCollapse from '../components/NotificationCollapse';
import SearchInput from '../components/SearchInput';

export default function NotificationScreen() {
  return (
    <View className='flex-1 bg-white p-5 py-10'>
    <SearchInput bg="#F5F6FA"/>
     <View className='mt-10'>
      <Text className='font-bold text-3xl'>You can check your</Text>
      <Text className='font-bold text-3xl'>notifications here.</Text>
     </View>
     <NotificationCollapse/>
    </View>
  )
}