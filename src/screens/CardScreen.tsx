import { View, ScrollView, StyleSheet,Platform ,Text} from 'react-native'
import React from 'react'
import HomepageHeader from '../components/Headers/HomepageHeader'
import useResponsive from '../constants/useResponsive'
import NotificationCollapse from '../components/NotificationCollapse'

export default function CardScreen() {
  const { WIDTH, HEIGHT } = useResponsive()

  return (
    <View className='flex-1 bg-white'>
      <HomepageHeader />
      <View className='space-x-8 top-[180px] ' style={{ flex: 1 ,position:"absolute"}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          overScrollMode='never'
          horizontal
          contentContainerStyle={{
            paddingHorizontal: WIDTH(50), // Adjust the padding to center the ScrollView
            alignItems: 'center',
            padding:10
          }}
        >
          <View style={[styles.card1,{ width: WIDTH(200), height: HEIGHT(270),borderRadius: 40, marginHorizontal: WIDTH(10) }]} />
          <View style={{ width: WIDTH(200), height: HEIGHT(270), backgroundColor: 'red', borderRadius: 40, marginHorizontal: WIDTH(10) }} />
          {/* Add more card components as needed */}
        </ScrollView>
        <View className='' style={{marginTop:HEIGHT(2)}}>
        {/* <Text className="text-3xl text-gray-600 font-bold">Recent Transaction</Text> */}
        <NotificationCollapse/>
      </View>
      </View>
     
    </View>
  )
}

const styles=StyleSheet.create({
  card1:{
      backgroundColor: 'white',
      elevation:10,
      shadowColor: 'black', // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow offset
      shadowOpacity: 0.25, // Shadow opacity
      shadowRadius: 3.84,
      overflow: 'hidden',
    
  }
})


