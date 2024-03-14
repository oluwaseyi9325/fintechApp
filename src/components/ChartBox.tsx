import { View, Text } from 'react-native'
import React from 'react'
import { VictoryChart, VictoryLine } from 'victory-native';
export default function ChartBox() {
    const data = Array.from({ length: 6 }, (_, index) => ({
        month: index + 1,
        listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
      }));
  return (
   <View className='absolute top-[180px] w-[400px]'>
     <View className='text-white rounded-lg shadow-lg bg-white  p-10 mx-10 h-[300px] '>
      <View className='h-10'>
      <CartesianChart
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
        </CartesianChart>
      </View>
    </View>
   </View>
  )
}