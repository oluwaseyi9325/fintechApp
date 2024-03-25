import { View, Text,Image } from 'react-native'
import React, { ReactNode } from 'react'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface GeneralHeaderProps {
  children: ReactNode;
}


export default function HeaderWraper({children}: GeneralHeaderProps) {
  return (
    <LinearGradient
    colors={['#4960F9', '#1433FF']}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 1 }}
    style={{ shadowOffset: { width: 0, height: 2 },shadowColor: 'black',shadowOpacity: 0.25,shadowRadius: 3.84}}
    className=' px-5 pt-3 rounded-b-[60px]'
  >
    <View >
        {children}
    </View>
     </LinearGradient>
  )
}