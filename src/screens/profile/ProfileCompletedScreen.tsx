
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileCompletedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <FontAwesome name="sign-out" size={30} color="white" />
      </View>
      <View style={styles.profileInfo} className='flex justify-center items-center'>
        <Image source={require("../../../assets/images/profile1.png")} style={styles.profileImage} />
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
        
      </View>
      <TouchableOpacity style={styles.signOutButton} activeOpacity={0.8}>
        <Text style={styles.signOutText}>Complete</Text>
        <FontAwesome name="sign-out" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27437D',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileInfo: {
    // flexDirection: 'row',
    // alignItems: 'center',
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
    backgroundColor: 'white',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },
});
