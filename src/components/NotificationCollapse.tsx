import { View, Text, ScrollView,TouchableOpacity,StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import { Ionicons } from '@expo/vector-icons';
export default function NotificationCollapse() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index:any) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
    const sections = [
        { title: 'Seyi Adedokun', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.',img: require("../../assets/images/seyi.jpg") },
        { title: 'Seyi Adedokun', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.',img: require("../../assets/images/seyi.jpg") },
        { title: 'Seyi Adedokun', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.',img: require("../../assets/images/seyi.jpg") },
        { title: 'Seyi Adedokun', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.',img: require("../../assets/images/seyi.jpg") },
        { title: 'Seyi Adedokun', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.',img: require("../../assets/images/seyi.jpg") },
        { title: 'Seyi Adedokun', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.',img: require("../../assets/images/seyi.jpg") },
        { title: 'Seyi Adedokun', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.',img: require("../../assets/images/seyi.jpg") },
        { title: 'Seyi Adedokun', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.',img: require("../../assets/images/seyi.jpg") },
      ];
    
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='pb-10 mt-5'>
          <View style={styles.container} className=''>
    {sections.map((section, index) => (
      <View key={index} style={styles.section}>
        <TouchableOpacity onPress={() => toggleSection(index)} style={styles.header}>
            <View className='flex-row items-center space-x-3'>
                <Image className='w-10 h-10 rounded-full' source={section.img}/>
           <View>
           <Text style={styles.headerText}>{section.title}</Text>
           <Text className='text-[#4727FE] text-xl'>Rayford sent you 140$</Text>
           </View>
            </View>
          
          {/* Conditional rendering of icon based on collapse/expand state */}
          <Ionicons name={activeIndex === index ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
        </TouchableOpacity>
        <Collapsible  collapsed={activeIndex !== index}>
          <View style={styles.content}>
            <Text>{section.content}</Text>
          </View>
        </Collapsible>
      </View>
    ))}
  </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
    
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor:"white"
    },
    section: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: 'white',
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    content: {
      padding: 15,
    },
  });
  