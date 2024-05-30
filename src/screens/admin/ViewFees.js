import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Alert } from 'react-native';
import { DataTable, Button, Text } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const ViewFees = ({ navigation }) => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 5; // You can modify this number as per your requirement

  useEffect(() => {
    const fetchStudents = async () => {
     
        try{
        const collection = await firestore().collection('Students').get();
        const dataArray = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // setData(dataArray);

        
        setStudents(dataArray);

        console.log(dataArray[0]["fees"])
        }
        catch(e){
            console.log(e)
        }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (studentId, feeIndex) => {
    try{
    const student = students.find(s => s.id === studentId);
    const updatedFees = [...student.data["fees"]];
    updatedFees.splice(feeIndex, 1);

    await firestore().collection('Students').doc(studentId).update({
      fees: updatedFees
    });
    Alert.alert("Fee Record Deleted", "The fee record has been successfully deleted.");
    // Refresh local state
    setStudents(students.map(s => {
      if (s.id === studentId) {
        return { ...s, data: { ...s.data, fees: updatedFees } };
      }
      return s;
    }));
    }
    catch(e){
        console.log(e)
    }
  };

  const handleEdit = (studentId, feeIndex) => {
    const fee = students.find(s => s.id === studentId).data.fees[feeIndex];
    navigation.navigate('EditFeeScreen', { studentId, feeIndex, fee });
  };

  return (
    <View style={styles.container}>
    <Text style= {{fontSize:20,fontWeight:"bold",paddingBottom:20}}>View Fees</Text>
<ScrollView horizontal>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.headerTitle}>Registration No</DataTable.Title>
          <DataTable.Title numeric style={styles.headerTitle}>Amount Due</DataTable.Title>
          <DataTable.Title numeric style={styles.headerTitle}>Amount Paid</DataTable.Title>
          {/* <DataTable.Title numeric style={styles.headerTitle}>Actions</DataTable.Title> */}
        </DataTable.Header>

        
        {students.map((student, studentIndex) => 
          student["fees"] && student["fees"].length > 0 && student["fees"].map((fee, index) => (
            <DataTable.Row key={student.id + index}>
              <DataTable.Cell style={styles.headerTitle}>{student["RegNo"]}</DataTable.Cell>
              <DataTable.Cell numeric style={styles.headerTitle}>{fee.amount_due}</DataTable.Cell>
              <DataTable.Cell numeric style={styles.headerTitle}>{fee.amount_paid}</DataTable.Cell>
              {/* <DataTable.Cell numeric style={styles.headerTitle}>
                <Button onPress={() => handleEdit(student.id, index)}>Edit</Button>
                <Button onPress={() => handleDelete(student.id, index)}>Delete</Button>
              </DataTable.Cell> */}
            </DataTable.Row>
          ))
        )}

     
      </DataTable>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"white"
  },
  headerTitle: {
    minWidth: 150,  // Adjust the width according to your content
    color:"white"  
},
});

export default ViewFees;
