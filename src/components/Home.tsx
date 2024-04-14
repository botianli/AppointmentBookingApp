import React, { useState,useEffect } from 'react';
import { View, Alert,Text, TextInput,Button,TouchableOpacity, StyleSheet,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = (props) => {
const {isLoggedIn,changeLoginStatus}=props

const changeValue=()=>{
    changeLoginStatus()
}
return (

    <View style={styles.container}>
        <Text>
            Home
        </Text>
        
    </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    
    // button: {
    //   backgroundColor: 'blue',
    //   width: '100%',
    //   height: 40,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderRadius: 5,
    // },
    // buttonText: {
    //   color: '#fff',
    //   fontSize: 16,
    //   fontWeight: 'bold',
    // },
  });

export default Home;