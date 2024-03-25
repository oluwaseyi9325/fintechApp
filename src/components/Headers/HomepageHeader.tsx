import { View, Text,Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import  HeaderWraper from './HeaderWraper';
 
export default function HomepageHeader() {
  return (
   
    <HeaderWraper>
      <View >
        <View className='flex-row items-center justify-between py-3'>
        <Entypo name="menu" size={40} color="white" />
        <Image source={require("../../../assets/images/profile1.png")} />
        </View>
    <View className='mb-10 px-10'>
        <Text className='text-2xl  text-white'>Good Moring</Text>
        <Text className='block text-2xl  text-white'>Emma,</Text>
    </View>
    </View>
    </HeaderWraper>
  )
}
