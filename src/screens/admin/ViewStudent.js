import GlobalStyleSheet from '../../../GlobalStyleSheet';
// import "react" from "react";
import * as React from 'react';
import {Text,View,Image,StyleSheet, ScrollView,Alert} from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminPanel from './AdminPanel';
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DataTable } from 'react-native-paper';
import { ActivityIndicator, MD2Colors,Button } from 'react-native-paper';


const styles = StyleSheet.create({

    
})

const ViewStudent = ({navigation}) => {


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

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
      };

    const styles = StyleSheet.create({
        container:{
            marginTop:40,
            backgroundColor:"red",
            width:"100%",
            height:700
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
        },
        headerTitle: {
            minWidth: 150,  // Adjust the width according to your content
            color:"white"  
        },
        container: {
            flex: 1,
            padding: 20,
        },
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
              .collection('Student')
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



    const deleteRecord = async (id) => {
        try {
          await firestore().collection("Students").doc(id).delete();
          // Refresh the data after deletion

          console.log("successfully deleted")
          setData(data.filter(item => item.id !== id));
        } catch (error) {
          console.error('Error deleting document:', error);
        }
      };
    

    useEffect(() => {

    async function getData(){
        try{
            const collection = await firestore().collection('Students').get();
            const dataArray = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(dataArray);

            const user = await firestore().collection('Students').get();

            // setStud(user["_data"].name)
            
            console.log(user.docs)

        }
        catch(e){
            console.log(e)
        }
        finally {
            setLoading(false);
          }
    }
    getData();
    }, []);

    if (loading) {
        return <ActivityIndicator animating={true} color={MD2Colors.red800} />
    }

    return(
        <>

            <View style={styles.container}>
                <Text style= {{fontSize:20,fontWeight:"bold",paddingBottom:20}}>Students</Text>
            <ScrollView horizontal>
            <DataTable>
              <DataTable.Header style={{backgroundColor:"#5f57D3",}}>
             
              <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>SerialNo.</Text>  </DataTable.Title>
               
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Registration No</Text>  </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Name</Text>  </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Gender</Text> </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Father Name</Text> </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Caste</Text> </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Occupation</Text> </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Residence</Text> </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Admission Class</Text> </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Email</Text> </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Passsword</Text> </DataTable.Title>
                <DataTable.Title style={styles.headerTitle}><Text style ={{color:"white",fontSize:15}}>Actions</Text> </DataTable.Title>
                
             </DataTable.Header>

                

                {data.map((item,i) => (
                <DataTable.Row key={item.key}>
                    <DataTable.Cell style={styles.headerTitle}>{i+1} </DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.RegNo} </DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.Name} </DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.Gender}</DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.FatherName}</DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.Cast}</DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.Occupation}</DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.Residence}</DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.AdmissionClass}</DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.Email}</DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>{item.Password}</DataTable.Cell>
                    <DataTable.Cell style={styles.headerTitle}>

                    <Button   mode="contained" onPress={() => navigation.navigate('Edit Student',{ id: item.id }) }>
                        Edit
                    </Button>
                    <Button style={{margin:10,backgroundColor:"red"}}  mode="contained" onPress={() => deleteRecord(item.id)}>
                        Delete
                    </Button>             

                    </DataTable.Cell>
                  
                </DataTable.Row>
              ))}
           
              

              {/* <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${items.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Rows per page'}
              /> */}
            </DataTable>

            </ScrollView>
            </View>

            

             
         
        </>
    )
}
export default ViewStudent;