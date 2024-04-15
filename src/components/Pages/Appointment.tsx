import React, { useState,useEffect } from 'react';
import { View, Alert,Text, TextInput,Button,SafeAreaView,TouchableOpacity, StyleSheet,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 import { TabActions } from '@react-navigation/native';
 import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// const jumpToAction = TabActions.jumpTo('Profile', { user: 'Satya' });

// navigation.dispatch(jumpToAction);

const Appointment= ( {navigation})=>{


   
    
    return (

        <SafeAreaView style={{ flex: 1 , backgroundColor: '#fff'}}>
      <View style={{ flex: 1, justifyContent: 'flex-start'}}>
        {/* Your content */}
        <Calendar />
      </View>
    </SafeAreaView>
       

    //    <View style={styles.container}>
    //    <View >
    //    <Calendar/>
    //    </View>
    //    <View>

    //    </View>
    //    <View>
    //        <Button title="submit"></Button>
    //    </View>
    //    </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      flexDirection: 'column',
    },
    calender:{

    }
})

export default Appointment