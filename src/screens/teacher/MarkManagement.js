import React, { useState,useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Button, Title, Text, Menu, Provider, Divider } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import styles from '../../../GlobalStyleSheet';
const MarkManagement = ({ navigation ,route}) => {
  const  data  = route.params.data;
  const [term, setTerm] = useState('First');
  const [menuVisible, setMenuVisible] = useState(false);
  const [subj,setSubj] = useState('English');
  const [students, setStudents] = useState([]);
  const [classId, setClassId] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Fetch the class assigned to the teacher
        const studSnapshot = await firestore()
          .collection('Students')
          .where('Class', '==', data.classAssigned)
          .get();

        if (!studSnapshot.empty) {
           
          const studentsData = studSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setStudents(studentsData);
           
        }
      } catch (error) {
        console.error('Error fetching students: ', error);
      }
    };

    fetchStudents();
  }, [data]);
  

  const handleMarkChange = (id, marks) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        if (term === 'First') {
          return { ...student, firstTermMarks: marks };
        } else if (term === 'Mid') {
          return { ...student, midTermMarks: marks };
        } else if (term === 'Final') {
          return { ...student, finalTermMarks: marks };
        }
      }
      return student;
    }));
  };

  const renderStudent = ({ item }) => (
    <View style={styles.studentRow}>
      <Text style={styles.studentName}>{item.Name}</Text>
      <TextInput
        style={styles.marksInput}
        value={term === 'First' ? item.firstTermMarks : term === 'Mid' ? item.midTermMarks : item.finalTermMarks}
        onChangeText={(text) => handleMarkChange(item.id, text)}
        keyboardType="numeric"
      />
    </View>
    
  );

  return (
    <Provider>
      <View style={styles.container}>
      <Title style={styles.title}>Mark Management</Title>

        <View style={styles.menuContainer}>
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <Button textColor='white' style={styles.myButton}  mode="outlined" onPress={() => setMenuVisible(true)}>
                {term}
              </Button>
            }
          >
            <Menu.Item onPress={() => setTerm('First')} title="First Term" />
            <Menu.Item onPress={() => setTerm('Mid')} title="Mid Term" />
            <Menu.Item onPress={() => setTerm('Final')} title="Final Term" />
          </Menu>
        </View>

        <FlatList
          data={students}
          renderItem={renderStudent}
          keyExtractor={item => item.RegNo}
          style={styles.studentList}
        />
<View style={styles.buttonColumn}> 
<View style={styles.buttonRow}>
          <Button textColor='white' mode="contained" style={styles.button}>Search</Button>
          <Button textColor='white'  mode="contained" style={styles.button}>Insert</Button>
          
        </View>
        <View style={styles.buttonRow}>
        <Button textColor='white'  mode="contained" style={styles.button}>Update</Button>
          <Button textColor='white'  mode="contained" style={styles.button}>Delete</Button>
          </View>
          </View> 
      </View>
    </Provider>
  );
};

 
 

export default MarkManagement;
 