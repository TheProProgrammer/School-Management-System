import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import AdminPanel from './Panels/AdminPanel';
import TeacherPanel from './Panels/TeacherPanel';
import StudentPanel from './Panels/StudentPanel';


const Stack = createNativeStackNavigator();

const PanelSelection = ({ navigation }) => {
  return (
    <SafeAreaView style = {styleSheet.background}>
      <Button
      style = {styleSheet.myButton}
      title="Go to Admin Panel"
      onPress={() => navigation.navigate('Admin Panel')}
      />

      <Button
      style = {styleSheet.myButton}
      title="Go to Teacher Panel"
      onPress={() => navigation.navigate('Teacher Panel')}
      />

      <Button
      style = {styleSheet.myButton}
      title="Go to Student Panel"
      onPress={() => navigation.navigate('Student Panel')}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Panel Selection">
        <Stack.Screen
          name="Panel Selection"
          component={PanelSelection}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Admin Panel" component={AdminPanel} />
        <Stack.Screen name="Teacher Panel" component={TeacherPanel} />
        <Stack.Screen name="Student Panel" component={StudentPanel} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styleSheet = StyleSheet.create(
  {
      background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'  
      },
      myButton:{
        marginVertical:50
      },
  }
);

export default App;
