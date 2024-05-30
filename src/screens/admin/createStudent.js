import GlobalStyleSheet from '../../../GlobalStyleSheet';
// import "react" from "react";

import {View,Image,StyleSheet, ScrollView,Alert} from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminPanel from './AdminPanel';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
// import {  } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, Button,Text } from 'react-native-paper';

const styles = StyleSheet.create({

    
})

const CreateStudent = ({navigation}) => {


    const [stud,setStud] = useState("hafafsd")
    const [text1,setText1] = useState("hafafsd")
    
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
    
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
      };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
          },input: {
            marginBottom: 20,
          },
        input1:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            width:"100%",
            backgroundColor:"red",
            height:"50px"

        },
        inputIn:{
            width:"60%",
            margin:20,
            height:30
        }
    })


    async function getData(){
        try{
            const user = await firestore().collection('Student').doc('stud1').get();

            setStud(user["_data"].name)
            console.log(user["_data"].name)

        }
        catch(e){
            console.log(e)
        }
    }
    async function writeData(){
        try{

            const get = await firestore()
              .collection('Students')
              .add({
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

              })
              .then(() => {
                console.log('User added!');
              });
           
        }
        catch(e){
            console.log(e)
        }
    }
    getData()
    return(
        <>


                

                {/* Alert.alert(""+{userts}) */}
                {/* <Text>{stud}</Text> */}
                {/* <View style={styles.container}> */}
                    {/* <Text>Add Student</Text> */}
                  {/* <ScrollView>
                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                                marginRight:10
                            }}
                        >
                            Registration Number: 
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={reg}
                            onChangeText={e=>{setReg(e)}}
                        />
                    </View>
                
                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                                marginRight:30
                            }}
                        >
                            Name
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={name}
                            onChangeText={e=>{setName(e)}}
                        />
                    </View>


                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                            }}
                        >
                            Gender
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={gender}
                            onChangeText={e=>{setGender(e)}}
                        />
                    </View>

                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                            }}
                        >
                            Father Name
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={fName}
                            onChangeText={e=>{setFName(e)}}
                        />
                    </View>

                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                            }}
                        >
                            Cast
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={cast}
                            onChangeText={e=>{setCast(e)}}
                        />
                    </View>

                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                            }}
                        >
                            Occupation
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={occup}
                            onChangeText={e=>{setOccup(e)}}
                        />
                    </View>



                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                            }}
                        >
                            Residence
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={resid}
                            onChangeText={e=>{setResid(e)}}
                        />
                    </View>

                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                            }}
                        >
                            Admission Class
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={aClass}
                            onChangeText={e=>{setAClass(e)}}
                        />
                    </View>

                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                            }}
                        >
                            Email: 
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={email}
                            onChangeText={e=>{setEmail(e)}}
                        />
                    </View>

                    <View style={styles.input1}>
                        <Text
                            style={{
                                backgroundColor:"red",
                                padding:10,
                                fontSize:10,
                                fontWeight:"bold",
                            }}
                        >
                            Password
                        </Text>
                        <TextInput 
                            style={styles.inputIn}
                            defaultValue={passw}
                            onChangeText={e=>{setPassw(e)}}
                        />
                    </View>
                    <View style={styles.input1}>
                    <Button onPress={showDatepicker} title="Select Date" />
                          {show && (
                            <DateTimePicker
                              testID="dateTimePicker"
                              value={date}
                              mode="date"
                              is24Hour={true}
                              display="default"
                              onChange={onChange}
                            />
                          )}
                          <Text>Selected date: {date.toDateString()}</Text>
                    </View>

                    <View style={styles.input1}>
                        <Button onPress={writeData} title="Add Student"/>
                    </View>
                    </ScrollView> */}

{/* <ScrollView>
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
      <Button mode="contained" onPress={writeData} >
        Create Student
      </Button>

      </ScrollView> */}
                {/* </View> */}
               
                <View style={styles.container}>
      <Text style={{fontWeight:20,padding:10}} variant="titleLarge">Add Student</Text>
   
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
      <Button mode="contained" onPress={writeData} >
        Update
      </Button>

      </ScrollView>

    </View>
                
                

            

             
         
        </>
    )
}
export default CreateStudent;