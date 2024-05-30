import React from 'react';
import GlobalStyleSheet from '../../../GlobalStyleSheet';
import { View, StyleSheet,Image  } from 'react-native';
import { Button, Title } from 'react-native-paper';

const StudentDashboard = ({ navigation, route }) => {
  const data = route.params.data
  const id = route.params.id
  
  return (
    <View style={GlobalStyleSheet.container}>
      <Title>Hi, {data.Name}</Title>
      <Title>Welcome to Dashboard</Title>
      <Button
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
      onPress={() => navigation.navigate('Student Manage Marks', {id:id})} 
      style={GlobalStyleSheet.myButton}
      >
        Manage Marks
      </Button>
      <Button
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
      onPress={() => navigation.navigate('Student Manage Fees')} 
      style={GlobalStyleSheet.myButton}
      >
        Manage Fees
      </Button>
      <Button
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
      onPress={() => navigation.navigate('Student Manage TimeTable')} 
      style={GlobalStyleSheet.myButton}
      >
        Manage TimeTable
      </Button>
      <Button
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
      onPress={() => navigation.navigate('Student Manage Syllabus', {class: data.AdmissionClass})} 
      style={GlobalStyleSheet.myButton}
      >
        Manage Syllabus
      </Button>
    </View>
  );
};
export default StudentDashboard;
 