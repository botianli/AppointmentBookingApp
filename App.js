import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Switch } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Appointment from './src/components/Pages/Appointment';
import LoginScreen from './src/components/Pages/LoginScreen';
import Home from './src/components/Pages/Home';
import Inbox from './src/components/Pages/Inbox';
import Profile from './src/components/Pages/Profile';
import { useState } from 'react';
import Setting from './src/components/Pages/Setting';
const Tab = createBottomTabNavigator();

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const changeLoginStatus = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    
  <NavigationContainer>
      <Tab.Navigator>
   
  <Tab.Screen 
  name="Home" 
  component={Home}  
  options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color="black" size={size} />
      ),
    }} />
<Tab.Screen 
  name="Appoitment" 
  component={Appointment} 
  options={{
    tabBarLabel: 'Appointment',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="calendar" color="black" size={size} />
    ),
  }}
  />
   <Tab.Screen 
  name="Inbox" 
  component={Inbox} 
  options={{
    tabBarLabel: 'Inbox',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="message" color="black" size={size} />
    ),
  }}
  />
   <Tab.Screen 
  name="Profile" 
  component={Profile} 
  options={{
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="account" color="black" size={size} />
    ),
  }}
  />
    <Tab.Screen 
  name="Setting" 
  component={Setting} 
  options={{
    tabBarLabel: 'Setting',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="bell" color="black" size={size} />
    ),
  }}
  />
 
 
  <Tab.Screen 
  name="Login" 
  component={LoginScreen} 
  options={{
    tabBarLabel: 'Login',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="login" color="black" size={size} />
    ),
  }}
  />

 

  
      
  </Tab.Navigator>
</NavigationContainer>
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
