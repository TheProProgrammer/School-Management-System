import React, { useState,useEffect } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Button, Title, Text, Menu, Provider, Divider } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import styles from '../../../GlobalStyleSheet';
const MarkManagement = ({ navigation ,route}) => {
  const  data  = route.params.data;
  const [term, setTerm] = useState('First');
  const [menuVisible, setMenuVisible] = useState(false);
  const [subjectsMenuVisible, setSubjectsMenuVisible] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('Select Subject');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [students, setStudents] = useState([]);
  const [classId, setClassId] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  useEffect(() => {
    const subjectsByClass = {
      'Nursery': ['English', 'Urdu', 'Math', 'Nazra-e-Quran'],
      'Prep': ['English', 'Urdu', 'Math', 'Nazra-e-Quran', 'General Knowledge'],
      '1' : ['English', 'Urdu', 'Math', 'General Knowledge', 'Islamyat'],
      '2' : ['English', 'Urdu', 'Math', 'General Knowledge', 'Islamyat', 'Computer (Part 1)'],
      '3': ['English', 'Urdu', 'Math', 'General Knowledge', 'Islamyat', 'Computer (Part 2)'],
      '4': ['English', 'Urdu', 'Math', 'General Knowledge', 'Social Study', 'Islamyat', 'Computer (Part 1)', 'Computer (Part 2)'],
      '5': ['English', 'Urdu', 'Math', 'General Knowledge', 'Social Study', 'Islamyat', 'Computer (Part 1)','Computer (Part 2)'],
      '6': ['English', 'Urdu', 'Math', 'General Knowledge', 'Social Study', 'Islamyat', 'Computer (Part 1)', 'Computer (Part 2)', 'Quran'],
      '7': ['English', 'Urdu', 'Math', 'General Knowledge', 'Social Study', 'Islamyat', 'Computer (Part 1)','Computer (Part 2)', 'Quran'],
      '8': ['English', 'Urdu', 'Math', 'General Knowledge', 'Social Study', 'Islamyat', 'Computer (Part 1)','Computer (Part 2)', 'Quran']
    };

    setSubjects(subjectsByClass[data.classAssigned] || []);
  }, [data.classAssigned]);
   
  useEffect(() => {
    const fetchStudents = async () => {
      try { 
        // Fetch the class assigned to the teacher
        const studSnapshot = await firestore()
          .collection('Students')
          .where('AdmissionClass', '==', data.classAssigned)
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
   

  const handleInsert = async (student) => {
    try {
      await firestore().collection('Marks').add({
        studentId: student.id,
        subject: selectedSubject,
        term: term,
        marks: term === 'First' ? student.firstTermMarks : term === 'Mid' ? student.midTermMarks : student.finalTermMarks,
        class: data.classAssigned,
      });
      setSnackbarMessage('Marks inserted successfully!');
      setSnackbarVisible(true);
    } catch (error) {
      console.error('Error inserting marks: ', error);
      setSnackbarMessage('Failed to insert marks.');
      setSnackbarVisible(true);
    }
  };

  const handleUpdate = async (student) => {
    try {
      const marksSnapshot = await firestore()
        .collection('Marks')
        .where('studentId', '==', student.id)
        .where('subject', '==', selectedSubject)
        .where('term', '==', term)
        .get();

      if (!marksSnapshot.empty) {
        const marksDoc = marksSnapshot.docs[0];
        await firestore().collection('Marks').doc(marksDoc.id).update({
          marks: term === 'First' ? student.firstTermMarks : term === 'Mid' ? student.midTermMarks : student.finalTermMarks,
        });
        setSnackbarMessage('Marks updated successfully!');
        setSnackbarVisible(true);
      } else {
        setSnackbarMessage('No marks record found to update.');
        setSnackbarVisible(true);
      }
    } catch (error) {
      console.error('Error updating marks: ', error);
      setSnackbarMessage('Failed to update marks.');
      setSnackbarVisible(true);
    }
  };

  const handleDelete = async (student) => {
    try {
      const marksSnapshot = await firestore()
        .collection('Marks')
        .where('studentId', '==', student.id)
        .where('subject', '==', selectedSubject)
        .where('term', '==', term)
        .get();

      if (!marksSnapshot.empty) {
        const marksDoc = marksSnapshot.docs[0];
        await firestore().collection('Marks').doc(marksDoc.id).delete();
        setSnackbarMessage('Marks deleted successfully!');
        setSnackbarVisible(true);
      } else {
        setSnackbarMessage('No marks record found to delete.');
        setSnackbarVisible(true);
      }
    } catch (error) {
      console.error('Error deleting marks: ', error);
      setSnackbarMessage('Failed to delete marks.');
      setSnackbarVisible(true);
    }
  };

  const renderStudent = ({ item }) => (
    <View style={styles.buttonColumn}>
    <View style={styles.studentRow}>
      <Text style={styles.studentName}>{item.Name}</Text>
      <Text> </Text>
      <TextInput
        style={styles.marksInput}
        value={
          term === 'First'
            ? item.firstTermMarks
            : term === 'Mid'
            ? item.midTermMarks
            : item.finalTermMarks
        }
        onChangeText={(text) => handleMarkChange(item.id, text)}
        keyboardType="numeric"
      />
  
  <View style={styles.buttonRow}>
          <Button textColor="white" mode="contained" style={styles.button} onPress={() => handleInsert(item)}>
            Insert
          </Button>
          <Button textColor="white" mode="contained" style={styles.button} onPress={() => {
            setSelectedStudentId(item.id);
            handleUpdate(item);
          }}>
            Update
          </Button>
          <Button textColor="white" mode="contained" style={styles.button} onPress={() => handleDelete(item)}>
            Delete
          </Button>
        </View>
    </View>
  </View>
 
  );

  return (
    <Provider>
      <View style={styles.container}>
      <Title style={styles.title}>Mark Management</Title>
      <View style={styles.menuContainer}>
          <Menu
            visible={subjectsMenuVisible}
            onDismiss={() => setSubjectsMenuVisible(false)}
            anchor={
              <Button textColor='white' style={styles.myButton} mode="outlined" onPress={() => setSubjectsMenuVisible(true)}>
                {selectedSubject}
              </Button>
            }
          >
            {subjects.map((subject, index) => (
              <Menu.Item key={index} onPress={() => { setSelectedSubject(subject); setSubjectsMenuVisible(false); }} title={subject} />
            ))}
          </Menu>
        </View>
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
  

        
      </View>
    </Provider>
  );
};

 
 

export default MarkManagement;
 