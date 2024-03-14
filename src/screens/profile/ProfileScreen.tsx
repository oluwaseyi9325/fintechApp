import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
export default function ProfileScreen() {
  return (
    <View className='bg-white flex-1 px-5'>
      <View className='pt-10 my-5'>
        <Text className='text-5xl font-bold'>Profile</Text>
      </View>
      <View className=' flex-row items-center space-x-5'>
        <Image className='' source={require("../../../assets/images/profile1.png")}/>
        <View>
          <Text className='text-2xl font-bold'>Emma Ashley</Text>
          <Text className='text-xl'>Online</Text>
        </View>
      </View>
      <View className='  space-y-3'>
        <View className='space-y-1'>
        <Text className='text-xl'>Username</Text>
        <TextInput style={{borderBottomWidth:1}} className='text-xl' aria-label='Username' />
        </View>

        <View className='space-y-1'>
        <Text className='text-xl'>First Name</Text>
        <TextInput style={{borderBottomWidth:1}} className='text-xl' aria-label='Username' />
        </View>
        <View className='space-y-1'>
        <Text className='text-xl'>Last Name</Text>
        <TextInput style={{borderBottomWidth:1}} className='text-xl' aria-label='Username' />
        </View>
        <View className='space-y-1'>
        <Text className='text-xl'>Date of Bith</Text>
        <TextInput  style={{borderBottomWidth:1}} className='text-xl' aria-label='Username' />
        </View>
      </View>
      <View className=' p-4 px-8 mt-10 border-2 rounded-3xl text-center border-[#4960F9] flex-row justify-between'>
            <Text className='text-2xl text-center text-[#27437D]'>Sign out</Text>
            <FontAwesome name="sign-out" size={24} color="#27437D" />
        </View>
    </View>
  )
}