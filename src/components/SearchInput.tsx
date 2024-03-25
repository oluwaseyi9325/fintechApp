import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function SearchInput({bg}:any) {
  return (
    <View style={{backgroundColor:bg}} className={`rounded-2xl flex-row items-center p-3`}>
    <Ionicons name="search-sharp" size={34} color="#27437D" />
    <TextInput placeholder="Search" className='p-2 font-bold text-[#27437D] text-xl ' />
    </View>
  )
}