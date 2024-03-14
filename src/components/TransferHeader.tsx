import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function TransferHeader({headerName}:any) {
    const navigation = useNavigation();
  return (
    <View className="p-4 flex-row">
        <AntDesign onPress={()=>navigation.goBack()} name="arrowleft" size={24} color="white" />
     <Text className='font-bold text-xl text-center text-white'>Transfer</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    cards:{
        backgroundColor:"red"

    }
})