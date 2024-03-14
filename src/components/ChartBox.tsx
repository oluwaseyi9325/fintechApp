import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CartesianChart, Bar } from 'victory-native';
export default function ChartBox() {
    const data = Array.from({ length: 6 }, (_, index) => ({
        month: index + 1,
        listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
      }));
  return (
   <View  className='absolute top-[180px] w-[400px]'>
     <View style={styles.innerContainer} className='text-white rounded-[50px] shadow-lg bg-white  px-5 py-10 mx-10 h-[300px] '>
      <View className='flex-row justify-between items-center'>
        <Text className='text-gray-700 text-xl'>Your total balance</Text>
        <Text className='font-bold text-xl'>...</Text>
      </View>
      <View className='my-2'>
        <Text className='text-[#2D99FF] font-bold text-3xl'>#$85000.00</Text>
      </View>
      <View className='h-[130px] overflow-hidden'>
      {/* <CartesianChart
          data={data}
          xKey="month"
          yKeys={["listenCount"]}
        >
          {({ points, chartBounds }) => (
            <Bar
              chartBounds={chartBounds}
              points={points.listenCount}
            />
          )}
        </CartesianChart> */}
      </View>
    </View>
   </View>
  )
}

const styles=StyleSheet.create({
  innerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84,
    overflow: 'hidden',
    // height:300 // Shadow radius
  },
})