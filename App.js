import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Switch } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

import LoginScreen from './src/components/LoginScreen';
import Home from './src/components/Home';

import { useState } from 'react';
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
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //     <Stack.Screen 
  //     name="LoginScreen"
  //     component={LoginScreen}
  //     options={{title:'Login'}}/>
     
  //    <Stack.Screen 
  //     name="Home"
  //     component={Home}
  //     options={{title:'Home'}}/>
  //     </Stack.Navigator>
  //  </NavigationContainer>

  // <View style={styles.container}>
  //    {loggedIn ? (

  //     <View>
  //       <Home isloggedIn={loggedIn} changeLoginStatus={changeLoginStatus} />
  //       </View>
        
  //     ) : (
  //        <View>
  //         <LoginScreen isloggedIn={loggedIn} changeLoginStatus={changeLoginStatus} />
  //         </View>
        
  //     )}
  // </View>
   
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
