import GlobalStyleSheet from '../../../GlobalStyleSheet';

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
 

const TeacherPanel = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   

  return (
    <View style={styles.container}>
      <Title>Teacher Login</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={() => navigation.navigate('TeacherDashboard')} style={styles.button}>Button </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16, 
  },
  button: {
    marginTop: 16,
  },
});

export default TeacherPanel;
