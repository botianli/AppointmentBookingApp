import React, { useState,useEffect } from 'react';
import { View, Alert,Text, TextInput,Button,TouchableOpacity, StyleSheet,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;
const length = Math.floor(screenWidth * 0.7); // Adjust as needed
  
const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isLoggedIn,changeLoginStatus}=props
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  const handleLogin = () => {
    // Implement your login logic here
    // Alert.alert('Logging in with:', { email, password });
    changeLoginStatus()
   
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
   
      <TextInput
        style={[styles.input]}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
     
    
      <TextInput
        style={[styles.input]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
       <Button 
        title="Login"
        onPress={handleLogin}
        color={'#007AFF'}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  rowcontainer:{

flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: length,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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

export default LoginScreen;