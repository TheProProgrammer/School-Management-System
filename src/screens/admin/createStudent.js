import GlobalStyleSheet from '../../../GlobalStyleSheet';


import {Text,View,Image,StyleSheet, ScrollView,Alert} from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminPanel from './AdminPanel';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';


const styles = StyleSheet.create({
   

})

const CreateStudent = ({navigation}) => {


    const [stud,setStud] = useState("hafafsd")


    async function getData(){
        try{
            const user = await firestore().collection('Student').doc('stud1').get();


            // console.log(user["_data"].name)

        }
        catch(e){
            console.log(e)
        }
    }

    getData()
    return(
        <>


                

                {/* Alert.alert(""+{userts}) */}
                <Text>{stud}</Text>


            

             
         
        </>
    )
}
export default CreateStudent;