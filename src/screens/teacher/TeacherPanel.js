import GlobalStyleSheet from '../../../GlobalStyleSheet';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title,Snackbar } from 'react-native-paper';
 

const TeacherPanel = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
      try {
          // Retrieve the teacher document based on the entered email
          const teacherSnapshot = await firestore()
              .collection('Teachers')
              .where('email', '==', email)
              .get();

          // Check if the document exists
          if (teacherSnapshot.empty) {
              throw new Error('User not found');
          }

          // Get the first document from the snapshot
          const teacherData = teacherSnapshot.docs[0].data();

          // Check if the entered password matches the stored password
          if (teacherData.password !== password) {
              throw new Error('Incorrect password');
          }

          // If login successful, navigate to the student dashboard
          navigation.navigate('Teacher Dashboard', {data: teacherData});
      } catch (error) {
          // If there's an error, display error message
          setErrorMessage(error.message);
      }
  };
   

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

export default TeacherPanel;
