import React from 'react';
import { Button, PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image,View,Text,Alert,StyleSheet} from "react-native"
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

const styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor:"red",
    width:"200px",
    height:"10px",

  }
})
const CustomHeader = (props)=>{

  <> 
    <View style={styles.header}>
    
      <Text>hiiii</Text>
    
    </View>
  </>
}
const App = () => {
  return (


    <NavigationContainer>
    
    
      <Stack.Navigator
       initialRouteName="Panel Selection"
       screenOptions={{
      
        headerShown: true,
        headerTitle:"",
        headerLeft: () => (
          <Image
            style={{
                width:30,
                height:30,
                
            }}
            source={require("./assets/menu.png")}
          />
        ),
        headerRight: () => (
          <View
            style={{
              borderRadius:30,
              borderColor:"#5D57D3",
              borderWidth:5,
              // padding:5,
              shadowOpacity:0.4,
              elevation:10


            }}
          >
          <Image
            style={{
                width:40,
                height:40,
                borderRadius:30,
            }}
            source={require("./assets/prof1.jpg")}
          />
          </View>
        ),
        headerShadowVisible: false,
        headerStyle: {
          elevation: 0, // Remove elevation effect
          
          
        },
      
      }}
       
       >
    
        <Stack.Screen
          name="Panel Selection"
          component={PanelSelection}
          options={{ title: 'Welcome to SMS' }}
        />

        <Stack.Screen 
        name="Admin Panel" 
        component={AdminPanel}
        
       
        />
        <Stack.Screen name="Teacher Panel" component={TeacherPanel} />

        <Stack.Screen name="Teacher Dashboard" component={TeacherDashboard} />
        <Stack.Screen name="Mark Management" component={MarkManagement} /> 
        <Stack.Screen name="Student Panel" component={StudentPanel} />

        <Stack.Screen name="Student Dashboard" component={StudentDashboard} />
        <Stack.Screen name="Student Manage Marks" component={StudentManageMarks} />
        <Stack.Screen name="Student Manage Fees" component={StudentManageFees} />
        <Stack.Screen name="Student Manage TimeTable" component={StudentManageTimeTable} />
        <Stack.Screen name="Student Manage Syllabus" component={StudentManageSyllabus} />
        
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
