import React from 'react';
import { View, StyleSheet,Image  } from 'react-native';
import { Button, Title } from 'react-native-paper';
import styles from '../../../GlobalStyleSheet';
const TeacherDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title>Teacher Dashboard</Title>
       
       
      <Button
         mode='elevated'
         textColor='white'
        onPress={() => navigation.navigate('MarkManagement')}
        style={styles.myButton}
      >
        Manage Marks
      </Button>
    </View>
  );
};

 

export default TeacherDashboard;
 