// import { View, Text, TextInput, Image } from 'react-native'
// import React from 'react'
// import { FontAwesome } from '@expo/vector-icons';
// export default function ProfileScreen() {
//   return (
//     <View className='bg-white flex-1 px-5'>
//       <View className='pt-10 my-5'>
//         <Text className='text-5xl font-bold'>Profile</Text>
//       </View>
//       <View className=' flex-row items-center space-x-5'>
//         <Image className='' source={require("../../../assets/images/profile1.png")}/>
//         <View>
//           <Text className='text-2xl font-bold text-[#4960F9]'>Emma Ashley</Text>
//           <Text className='text-xl text-[#4960F9]'>Online</Text>
//         </View>
//       </View>
//       <View className='  space-y-3'>
//         <View className='space-y-1'>
//         <Text className='text-xl'>Username</Text>
//         <TextInput value='emma-ashley' style={{borderBottomWidth:1}} className='text-xl text-[#4960F9] font-bold p-1' aria-label='Username' />
//         </View>

//         <View className='space-y-1'>
//         <Text className='text-xl'>First Name</Text>
//         <TextInput value='emma-ashley' style={{borderBottomWidth:1}} className='text-xl text-[#4960F9] font-bold p-1' aria-label='Username' />
//         </View>
//         <View className='space-y-1'>
//         <Text className='text-xl'>Last Name</Text>
//         <TextInput value='emma-ashley' style={{borderBottomWidth:1}} className='text-xl text-[#4960F9] font-bold p-1' aria-label='Username' />
//         </View>
//         <View className='space-y-1'>
//         <Text className='text-xl'>Date of Bith</Text>
//         <TextInput value='emma-ashley' style={{borderBottomWidth:1}} className='text-xl text-[#4960F9] font-bold p-1' aria-label='Username' />
//         </View>
//       </View>
//       <View className='mx-5 p-4 px-8 mt-5 border-2 rounded-[40px] text-center border-[#4960F9] flex-row justify-between items-center'>
//             <Text className='text-3xl text-center text-[#27437D]'>Sign out</Text>
//             <FontAwesome name="sign-out" size={30} color="#27437D" />
//         </View>
//     </View>
//   )
// }

// import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { FontAwesome } from '@expo/vector-icons';

// export default function ProfileScreen() {
//   return (
//     <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 20 }}>
//       <View style={{ paddingTop: 50 }}>
//         <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Profile</Text>
//       </View>
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
//         <Image source={require("../../../assets/images/profile1.png")} style={{ width: 100, height: 100, marginRight: 20 }} />
//         <View>
//           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4960F9' }}>Emma Ashley</Text>
//           <Text style={{ fontSize: 18, color: '#4960F9' }}>Online</Text>
//         </View>
//       </View>
//       <View style={{ marginTop: 20 }}>
//         <View style={{ marginBottom: 10 }}>
//           <Text style={{ fontSize: 18 }}>Username</Text>
//           <TextInput value='emma-ashley' style={{ borderBottomWidth: 1, fontSize: 18, borderColor: '#4960F9', paddingVertical: 5 }} />
//         </View>
//         <View style={{ marginBottom: 10 }}>
//           <Text style={{ fontSize: 18 }}>First Name</Text>
//           <TextInput value='emma-ashley' style={{ borderBottomWidth: 1, fontSize: 18, borderColor: '#4960F9', paddingVertical: 5 }} />
//         </View>
//         <View style={{ marginBottom: 10 }}>
//           <Text style={{ fontSize: 18 }}>Last Name</Text>
//           <TextInput value='emma-ashley' style={{ borderBottomWidth: 1, fontSize: 18, borderColor: '#4960F9', paddingVertical: 5 }} />
//         </View>
//         <View style={{ marginBottom: 10 }}>
//           <Text style={{ fontSize: 18 }}>Date of Birth</Text>
//           <TextInput value='emma-ashley' style={{ borderBottomWidth: 1, fontSize: 18, borderColor: '#4960F9', paddingVertical: 5 }} />
//         </View>
//       </View>
//       <TouchableOpacity style={{ marginVertical: 20, padding: 12, borderRadius: 40, backgroundColor: '#4960F9', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontSize: 24, color: 'white', marginRight: 10 }}>Sign out</Text>
//         <FontAwesome name="sign-out" size={30} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// }


import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require("../../../assets/images/profile1.png")} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>Emma Ashley</Text>
          <Text style={styles.status}>Online</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput value='emma-ashley' style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput value='ashley' style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput value='emma' style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput value='20/7,2024' style={styles.input} />
        </View>
        {/* Repeat similar structure for other input fields */}
      </View>
      <TouchableOpacity style={styles.signOutButton} activeOpacity={0.8}>
        <Text style={styles.signOutText}>Sign out</Text>
        <FontAwesome name="sign-out" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 50,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4960F9',
  },
  status: {
    fontSize: 18,
    color: '#4960F9',
  },
  form: {
    marginTop: 0,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 18,
    borderColor: '#4960F9',
    paddingVertical: 5,
    color:"#4960F9"
  },
  signOutButton: {
    marginVertical: 20,
    padding: 12,
    borderRadius: 40,
    backgroundColor: '#4960F9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },
});
