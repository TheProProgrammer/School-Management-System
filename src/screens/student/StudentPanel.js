import React, { useState } from 'react';
import { View } from 'react-native';
import { Title, TextInput, Button, Snackbar } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import GlobalStyleSheet from '../../../GlobalStyleSheet';

const StudentPanel = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            // Retrieve the student document based on the entered email
            const studentSnapshot = await firestore()
                .collection('Students')
                .where('Email', '==', email)
                .get();

            // Check if the document exists
            if (studentSnapshot.empty) {
                throw new Error('User not found');
            }

            // Get the first document from the snapshot
            const studentData = studentSnapshot.docs[0].data();

            // Check if the entered password matches the stored password
            if (studentData.Password !== password) {
                throw new Error('Incorrect password');
            }

            // If login successful, navigate to the student dashboard
            navigation.navigate('Student Dashboard', {data: studentData});
        } catch (error) {
            // If there's an error, display error message
            setErrorMessage(error.message);
        }
    };

    return (
        <View style={GlobalStyleSheet.container}>
            <Title>Student Login</Title>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={GlobalStyleSheet.myInput}
            />
            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={GlobalStyleSheet.myInput}
            />
            <Button
                mode='contained'
                color='#875FF6'
                onPress={handleLogin}
                style={GlobalStyleSheet.myButton}>
                Login
            </Button>
            <Snackbar
                visible={!!errorMessage}
                onDismiss={() => setErrorMessage('')}
                action={{
                    label: 'Dismiss',
                    onPress: () => setErrorMessage('')
                }}>
                {errorMessage}
            </Snackbar>
        </View>
    );
};

export default StudentPanel;
