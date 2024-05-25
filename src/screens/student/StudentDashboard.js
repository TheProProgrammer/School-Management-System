import React from 'react';
import GlobalStyleSheet from '../../../GlobalStyleSheet';
import { View, StyleSheet,Image  } from 'react-native';
import { Button, Title } from 'react-native-paper';

const StudentDashboard = ({ navigation }) => {
  return (
    <View style={GlobalStyleSheet.container}>
      <Title>Student Dashboard</Title>
      <Button
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
        onPress={() => {}}
        style={GlobalStyleSheet.myButton}
      >
        Manage Marks
      </Button>
      <Button
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
        onPress={() => {}}
        style={GlobalStyleSheet.myButton}
      >
        Manage Fees
      </Button>
      <Button
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
        onPress={() => {}}
        style={GlobalStyleSheet.myButton}
      >
        Manage TimeTable
      </Button>
      <Button
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
        onPress={() => {}}
        style={GlobalStyleSheet.myButton}
      >
        Manage Syllabus
      </Button>
    </View>
  );
};
export default StudentDashboard;
 