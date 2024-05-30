import React from 'react';
import { View, StyleSheet,Image  } from 'react-native';
import { Button, Title } from 'react-native-paper';
import styles from '../../../GlobalStyleSheet';
const TeacherDashboard = ({ navigation,route }) => {
  const data = route.params.data
  return (
    <View style={styles.container}>
      
      <Title>Hi, {data.name}</Title>
      <Title>Welcome to Dashboard</Title>
      <Title>Edit marks for your class, {data.classAssigned} :</Title>
      <Button
         mode='elevated'
         textColor='white'
        onPress={() => navigation.navigate('Mark Management', {data: data})}
        style={styles.myButton}
      >
        Manage Marks
      </Button>
    </View>
  );
};

 

export default TeacherDashboard;
 