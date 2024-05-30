import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import GlobalStyleSheet from '../../../GlobalStyleSheet';

const StudentManageMarks = ({ navigation, route}) => {
    const [marks, setMarks] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Hardcoded student name
    const studentName = route.params.id;

    useEffect(() => {
        const fetchMarks = async () => {
            try {
                // Clear previous marks and errors
                setMarks(null);
                setErrorMessage('');

                // Query Firestore for the marks document with the given student's name
                const marksSnapshot = await firestore()
                    .collection('Marks')
                    .where('studentId', '==', studentName)
                    .get();

                if (marksSnapshot.empty) {
                    throw new Error('No marks found for this student');
                }

                // Extract the data from the document
                const marksData = marksSnapshot.docs.map(doc => doc.data());

                // Set the marks data to state
                setMarks(marksData);
            } catch (error) {
                setErrorMessage(error.message);
            }
        };

        fetchMarks();
    }, []);

    return (
        <View style={GlobalStyleSheet.container}>
            <Title>Marks</Title>
            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}
            {marks && marks.length > 0 ? (
                marks.map((mark, index) => (
                    <View key={index} style={styles.markContainer}>
                        <Text style={{fontWeight: "bold"}}>Subject: {mark.subject}</Text>
                        <Text>Class: {mark.class}</Text>
                        <Text>First Term: {mark.first}</Text>
                        <Text>Mid Term: {mark.mids}</Text>
                        <Text>Final Term: {mark.finals}</Text>
                    </View>
                ))
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    markContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default StudentManageMarks;
