import { View, Text,Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function HomepageHeader() {
  return (
    <LinearGradient
    colors={['#4960F9', '#1433FF']}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 1 }}
    style={{ shadowOffset: { width: 0, height: 2 },shadowColor: 'black',shadowOpacity: 0.25,shadowRadius: 3.84}}
    className=' px-5 pt-3 rounded-b-[60px]'
  >
    <View >
        <View className='flex-row items-center justify-between py-3'>
        <Entypo name="menu" size={40} color="white" />
        <Image source={require("../../../assets/images/profile1.png")} />
        </View>
    <View className='mb-10 px-10'>
        <Text className='text-2xl  text-white'>Good Moring</Text>
        <Text className='block text-2xl  text-white'>Emma,</Text>
    </View>
    </View>
     </LinearGradient>
  )
}

// import { View, Text, Image, StyleSheet, Platform } from 'react-native';
// import React from 'react';
// import { Entypo } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function HomepageHeader() {
//   return (
//     <LinearGradient
//       colors={['#4960F9', '#1937FE']}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={[styles.container, shadowStyles]}
//     >
//       <View style={styles.headerContainer}>
//         <Entypo name="menu" size={40} color="white" />
//         <Image source={require("../../../assets/images/profile1.png")} />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>Good Morning</Text>
//         <Text style={[styles.text, styles.block]}>Emma,</Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     // borderRadius: 60,
//     marginBottom: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   textContainer: {
//     marginLeft: 10,
//   },
//   text: {
//     fontSize: 24,
//     color: 'white',
//   },
//   block: {
//     marginTop: 5,
//   },
// });

// // Shadow styles
// const shadowStyles = Platform.select({
//   ios: {
//     shadowColor: '#5988F8',
//     shadowOffset: { width: 0, height: 9 },
//     shadowOpacity: 0.5,
//     shadowRadius: 49,
//   },
//   android: {
//     elevation: 10,
//   },
// });
