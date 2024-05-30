import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet,Text } from 'react-native';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';

// import ImagePicker from 'react-native-image-picker'

const TimetableScreen = () => {
    const [imageUri, setImageUri] = useState(null);

    const pickImage = () => {
    
          launchImageLibrary({ noData: true }, (response) => {
            // console.log(response);
            if (response) {
              setImageUri(""+response.assets[0].uri);
            //   console.log(response.assets[0].uri)
              uploadImage(response.assets[0].uri)
            }
          });


    };


    

    const uploadImage = async (image) => {
        const reference = storage().ref(`timetable`);
        const task = reference.putFile(image);

        task.then(async (snapshot) => {
            Alert.alert("Upload Successful", "Timetable has been uploaded successfully.");
            
            const downloadURL = await reference.getDownloadURL();
            // await snapshot.ref.getDownloadURL();
            console.log(downloadURL)
            saveTimetableToFirestore(downloadURL);
        }).catch((error) => {
            console.error(error);
            // Alert.alert("Upload Failed", "Failed to upload timetable.");
        });
    };

    const saveTimetableToFirestore = async (downloadURL) => {
        try {
            await firestore().collection('timetable').doc("B1luLd7qZseuKrdDNpDr").update({
                imageUrl: downloadURL,
                createdAt: firestore.Timestamp.now(),
            });
        } catch (error) {
            console.error("Error saving timetable to Firestore: ", error);
            Alert.alert("Error", "Failed to save timetable to Firestore.");
        }
    };

    // const removeImage = async () => {
    //     const reference = storage().refFromURL(imageUri);
    //     reference.delete()
    //         .then(() => {
    //             Alert.alert("Remove Successful", "Timetable has been removed successfully.");
    //             setImageUri(null);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             Alert.alert("Remove Failed", "Failed to remove timetable.");
    //         });
    // };

    return (
        <> 
        
        <Text style={{fontSize:20,fontWeight:"bold",color:"black",margin:20}}>Upload Timetable </Text>
               <View style={styles.container}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
            ) : null}
            <Button title="Upload Timetable" onPress={pickImage} />
            {/* {imageUri ? (
                <Button title="Remove Timetable" onPress={removeImage} />
            ) : null} */}
        </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:"white"
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
});

export default TimetableScreen;
