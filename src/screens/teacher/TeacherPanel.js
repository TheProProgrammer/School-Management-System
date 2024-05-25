import GlobalStyleSheet from '../../../GlobalStyleSheet';

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
 

const TeacherPanel = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   

  return (
    <View style={GlobalStyleSheet.container}>
      <Title>Teacher Login</Title>
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
        buttonColor='#875FF6'
        textColor='white'
        onPress={() => navigation.navigate('TeacherDashboard')} 
        style={GlobalStyleSheet.myButton}>
          Login 
      </Button>
    </View>
  );
};

export default TeacherPanel;
