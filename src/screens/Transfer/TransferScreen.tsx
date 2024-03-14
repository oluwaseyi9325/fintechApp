import { View, Text,Image } from 'react-native'
import React from 'react'
import TransferHeader from '../../components/TransferHeader'

export default function TransferScreen() {
  return (
    <View className='bg-white flex-1'>
    <TransferHeader headerName="Transfer"/>

    <View className='flex-row justify-center items-center mt-10'>
  <View>
  <View className='my-5 flex-row justify-center'>
      <Image className='w-[90px] h-[90px]' source={require("../../../assets/images/Done 1.png")}/>
    </View>
    <View className='text-center'>
    <Text className='text-center text-2xl text-[#27437D]'>You have successfully sent</Text>
    <Text className='text-center text-2xl text-[#27437D]'>$99 to <Text className='font-bold'>Grace Allison.</Text></Text>
    </View>

    <View className=' flex-row justify-center'>
      <Image source={require("../../../assets/images/ProfileImage.png")}/>
    </View>
  </View>
  </View>

  <View className='mx-10 space-y-3'>
   <View className=' p-4  rounded-3xl text-center bg-[#27437D] '>
            <Text className='text-2xl text-center  text-white'>Execute again</Text>
        </View>
        
        <View className=' p-4 border-2 rounded-3xl text-center border-[#4960F9] '>
            <Text className='text-2xl text-center text-[#27437D]'>Confimation</Text>
        </View>
   </View>
    </View>
  )
}