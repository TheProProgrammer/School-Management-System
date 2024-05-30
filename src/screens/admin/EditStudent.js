import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { TextInput, Button,Text } from 'react-native-paper';

const EditStudent = ({ route, navigation }) => {
  const { id } = route.params;
  
  const [reg,setReg] = useState("")
  const [name,setName] = useState("")
  const [gender,setGender] = useState("")
  const [fName,setFName] = useState("")
  const [aClass,setAClass] = useState("")
  const [email,setEmail] = useState("")
  const [passw,setPassw] = useState("")
  const [cast,setCast] = useState("")
  const [occup,setOccup] = useState("")
  const [resid,setResid] = useState("")
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const doc = await firestore().collection('Students').doc(id).get();
        if (doc.exists) {
          const data = doc.data();
          setName(data.Name);
          setReg(data.RegNo)
          setGender(data.Gender)
          setFName(data.FatherName)
          setAClass(data.AdmissionClass)
          setEmail(data.Email)
          setPassw(data.Password)
          setCast(data.Cast)
          setOccup(data.Occupation)
          setResid(data.Residence)
        //   setRegNo(data.);
        //   setCaste(data.caste);
        }
        else{
            console.log("doc doesnt exist")
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [id]);

  const updateRecord = async () => {
    try {
      await firestore().collection('yourCollectionName').doc(id).update({
        RegNo: reg,
        Name: name,
        Gender: gender,
        FatherName:fName,
        Cast:cast,
        Occupation:occup,
        Residence:resid,
        AdmissionClass:aClass,
        Email:email,
        Password:passw
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:20,padding:10}} variant="titleLarge">Edit Student</Text>
   
        <ScrollView>
        <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Registration Number"
        value={reg}
        onChangeText={setReg}
        style={styles.input}
      />
      <TextInput
        label="Gender"
        value={gender}
        onChangeText={setGender}
        style={styles.input}
      />

        <TextInput
        label="Caste"
        value={cast}
        onChangeText={setCast}
        style={styles.input}
      />

<TextInput
        label="Occupation"
        value={occup}
        onChangeText={setOccup}
        style={styles.input}
      />


<TextInput
        label="Residence"
        value={resid}
        onChangeText={setResid}
        style={styles.input}
      />


<TextInput
        label="Father Name"
        value={fName}
        onChangeText={setFName}
        style={styles.input}
      />

<TextInput
        label="Admission Class"
        value={aClass}
        onChangeText={setAClass}
        style={styles.input}
      />


<TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

<TextInput
        label="Password"
        value={passw}
        onChangeText={setPassw}
        style={styles.input}
      />
      <Button mode="contained" onPress={updateRecord} loading={loading}>
        Update
      </Button>

      </ScrollView>

    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
});

export default EditStudent;