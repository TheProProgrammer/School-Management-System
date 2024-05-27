import React from 'react';
import { Button, PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import GlobalStyleSheet from '../GlobalStyleSheet';

import AdminPanel from './screens/admin/AdminPanel';
import TeacherPanel from './screens/teacher/TeacherPanel';
import StudentPanel from './screens/student/StudentPanel';
import TeacherDashboard from './screens/teacher/TeacherDashboard';
import MarkManagement from './screens/teacher/MarkManagement';
import StudentDashboard from './screens/student/StudentDashboard';
import StudentManageMarks from './screens/student/StudentManageMarks';
import StudentManageFees from './screens/student/StudentManageFees';
import StudentManageTimeTable from './screens/student/StudentManageTimeTable';
import StudentManageSyllabus from './screens/student/StudentManageSyllabus';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Panel Selection">
        <Stack.Screen
          name="Panel Selection"
          component={PanelSelection}
          options={{ title: 'Welcome to SMS' }}
        />

        <Stack.Screen name="Admin Panel" component={AdminPanel} />
        <Stack.Screen name="Teacher Panel" component={TeacherPanel} />

        <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
        <Stack.Screen name="MarkManagement" component={MarkManagement} /> 
        <Stack.Screen name="Student Panel" component={StudentPanel} />

        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="StudentManageMarks" component={StudentManageMarks} />
        <Stack.Screen name="StudentManageFees" component={StudentManageFees} />
        <Stack.Screen name="StudentManageTimeTable" component={StudentManageTimeTable} />
        <Stack.Screen name="StudentManageSyllabus" component={StudentManageSyllabus} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const PanelSelection = ({navigation}) => {
  return (
    <PaperProvider>
    <SafeAreaView style = {GlobalStyleSheet.background}>

      <PanelSelectionButton text="Go to Student Panel" panel="Student Panel" navigation={navigation}/>
      <PanelSelectionButton text="Go to Admin Panel" panel="Admin Panel" navigation={navigation}/>
      <PanelSelectionButton text="Go to Teacher Panel" panel="Teacher Panel" navigation={navigation}/>

    </SafeAreaView>
    </PaperProvider>
  );
};


const PanelSelectionButton = ({text, panel, navigation}) => {
  return(
    <Button      
      mode='elevated'
      buttonColor='#875FF6'
      textColor='white'
      style = {GlobalStyleSheet.myButton}
      onPress={() => navigation.navigate(panel)}>
        {text}
      </Button>
  )
}

export default App;
