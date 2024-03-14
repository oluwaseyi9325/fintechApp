// BottomNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // or any other icon library
import HomepageScreen from '../screens/HomepageScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:any=null;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications';
          }else if(route.name === 'Profile'){
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons className='' name={iconName} size={size} color={color} />;
        },
    headerShown:false,
    tabBarLabel:"",
tabBarStyle:{padding:40}
      })}
    //   tabBarOptions={{
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    //   }as any}
    >
      <Tab.Screen name="Home"  component={HomepageScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
