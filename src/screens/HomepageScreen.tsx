import { View, Text } from 'react-native'
import React from 'react'
import HomepageHeader from '../components/Headers/HomepageHeader'
import ChartBox from '../components/ChartBox'
import { AntDesign } from '@expo/vector-icons';
export default function HomepageScreen() {
  return (
 <View className='bg-white flex-1'>

<View className='relative'>
<HomepageHeader/>
    <ChartBox />
</View>

    <View className='bg-[#4960F9] p-5 rounded-3xl mx-10 flex-row justify-between items-center top-[280px]'>
        <View className=''>
        <Text className='text-white text-3xl'>Check your</Text>
        <Text className='break text-white text-3xl'>bank accounts</Text>
        </View>
        <AntDesign name="right" size={30} color="white" />
    </View>

 </View>
  )
}