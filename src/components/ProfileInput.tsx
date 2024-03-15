import { View, Text, StyleSheet,TextInput } from 'react-native'
import React from 'react'

export default function ProfileInput({label,value}:any) {
  return (
    <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput value={value} style={styles.input} />
  </View>
  )
}

const styles=StyleSheet.create({
    inputLabel: {
        fontSize: 18,
      },
      inputContainer: {
        marginBottom: 10,
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
      input: {
        borderBottomWidth: 1,
        fontSize: 18,
        borderColor: '#4960F9',
        paddingVertical: 5,
        color:"#4960F9"
      },
})