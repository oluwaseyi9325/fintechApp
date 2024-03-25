import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HomepageHeader from '../components/Headers/HomepageHeader'
import ChartBox from '../components/ChartBox'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigations/routes';
export default function HomepageScreen() {
    const navigation:any=useNavigation()
  return (
 <View className='bg-white flex-1'>

<View className='relative'>
<HomepageHeader/>
    <ChartBox />
</View>

    <TouchableOpacity onPress={()=>navigation.navigate(routes.CARD_SCREEN)} className='bg-[#4960F9]  p-5 rounded-3xl mx-10 flex-row justify-between items-center top-[280px]'>
        <View className='px-5'>
        <Text className='text-white text-2xl'>Check your</Text>
        <Text className='break text-white text-2xl'>bank accounts</Text>
        </View>
        <AntDesign name="right" size={30} color="white" />
    </TouchableOpacity>

 </View>
  )
}