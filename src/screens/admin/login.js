import GlobalStyleSheet from '../../../GlobalStyleSheet';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { View, StyleSheet,Alert } from 'react-native';
import { TextInput, Button, Title,Snackbar } from 'react-native-paper';
 

const AdminLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
      try {
          if(email =="a" & password =="b"){
            navigation.navigate('Admin Panel');
          }
          else{
            Alert.alert("wrong credentials")
          }
          // If login successful, navigate to the student dashboard
          
      } catch (error) {
        console.log(error)
          // If there's an error, display error message
          setErrorMessage(error.message);
      }
  };
   

  return (
    <View style={GlobalStyleSheet.container}>
      <Title>Admin Login</Title>
      <TextInput
      
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={GlobalStyleSheet.myInput}
      />
      <TextInput

        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={GlobalStyleSheet.myInput}
      />
      <Button
        mode='elevated'
         
        textColor='white'
        onPress={handleLogin} 
        style={GlobalStyleSheet.myButton}>
          Login 
      </Button>
      <Snackbar
                visible={!!errorMessage}
                onDismiss={() => setErrorMessage('')}
                action={{
                    label: 'Dismiss',
                    onPress: () => setErrorMessage('')
                }}>
                {errorMessage}
            </Snackbar>
    </View>
  );
};

export default AdminLogin;
