import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import NotificationCollapse from '../components/NotificationCollapse';
export default function NotificationScreen() {
  return (
    <View className='flex-1 bg-white p-5 py-10'>
     <View className='bg-gray-200 rounded-2xl flex-row items-center p-3'>
     <Ionicons name="search-sharp" size={34} color="#27437D" />
     <TextInput placeholder='Search' className='p-2 font-bold text-[#27437D] text-xl' />
     </View>
     <View className='mt-10'>
      <Text className='font-bold text-3xl'>You can check your</Text>
      <Text className='font-bold text-3xl'>notifications here.</Text>
     </View>
     <NotificationCollapse/>
    </View>
  )
}