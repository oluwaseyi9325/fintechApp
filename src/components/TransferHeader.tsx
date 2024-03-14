import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function TransferHeader({headerName}:any) {
    const navigation = useNavigation();
  return (
    <View className=''>
       <View className="p-8 py-8 flex-row   justify-between shadow-lg bg-[#4960F9] rounded-b-[70px] border">
        <AntDesign onPress={()=>navigation.goBack()} name="arrowleft" size={24} color="white" />
     <Text className='font-bold text-2xl text-center text-white'>{headerName}</Text>
     <Text></Text>
    </View>
    </View>
  )
}

