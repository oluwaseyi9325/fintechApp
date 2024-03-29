import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import ProfileInput from '../../components/ProfileInput';
// import {} from Dimensions
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View className='flex-row justify-end '>
        <Image className='flex-row justify-end absolute' source={require("../../../assets/images/blue2.png")}/>
      </View>
     <View style={{ paddingHorizontal: 20}}>
     <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image className='rounded-full' source={require("../../../assets/images/seyi.jpg")} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>Emma Ashley</Text>
          <Text style={styles.status}>Online</Text>
        </View>
      </View>
      <View style={styles.form}>
        <ProfileInput label="Username" value="emma-ashley" />
        <ProfileInput label="First Name" value="ashley" />
        <ProfileInput label="Last Name" value="emma" />
        <ProfileInput label="Date of Birth" value="20/7/2024" />
      </View>
      <TouchableOpacity style={styles.signOutButton} activeOpacity={0.8}>
        <Text style={styles.signOutText}>Sign out</Text>
        <FontAwesome name="sign-out" size={30} color="white" />
      </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
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
    width: 90,
    height: 90,
    marginRight: 10,
    // elevation:10,
    shadowColor:"black",
    shadowOpacity:10,
    shadowOffset:{height:2,width:5}
  },
  name: {
    fontSize: 23,
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
