import React, { useState,useEffect } from 'react';
import { View, Alert,Text, TextInput,Button,TouchableOpacity, StyleSheet,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Inbox= ()=>{

    return (

        <View style={styles.container}>
            <Text>Inbox</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }
})

export default Inbox