import { View, Text, StyleSheet, Image } from 'react-native'
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
       
  <View className='flex-row justify-center items-center my-20'>
    <View>
      <Image source={require("../../assets/images/Done 1.png")}/>
    </View>
    <View className='text-center'>
    <Text className='text-center text-xl'>You have successfully sent</Text>
    <Text className='text-center text-xl'>$99 to Grace Allison</Text>
    </View>
  </View>

   <View className='mx-10 space-y-6 my-10'>
   <View className=' p-4  rounded-3xl text-center bg-[#27437D] '>
            <Text className='text-2xl text-center  text-white'>Execute again</Text>
        </View>
        
        <View className=' p-4 border-2 rounded-3xl text-center border-[#4960F9] '>
            <Text className='text-2xl text-center  text-[#27437D]'>Confimation</Text>
        </View>
   </View>

    </View>
  )
}

