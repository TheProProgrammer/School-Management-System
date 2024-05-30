import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import GlobalStyleSheet from '../../../GlobalStyleSheet';

const StudentManageFees = ({ navigation }) => {
    const [fees, setFees] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Hardcoded student name or RegNo for fetching data
    const studentRegNo = "Qw";

    useEffect(() => {
        const fetchFees = async () => {
            try {
                // Clear previous fees and errors
                setFees([]);
                setErrorMessage('');

                // Query Firestore for the student's document with the given RegNo
                const studentDoc = await firestore()
                    .collection('Students')
                    .where('RegNo', '==', studentRegNo)
                    .get();

                if (studentDoc.empty) {
                    throw new Error('No student found with this registration number'+studentRegNo);
                }

                // Extract the fees data from the student document
                const studentData = studentDoc.docs[0].data();
                if (studentData.fees) {
                    setFees(studentData.fees);
                } else {
                    throw new Error('No fees data found for this student '+studentData.fees);
                }
            } catch (error) {
                setErrorMessage(error.message);
            }
        };

        fetchFees();
    }, []);

    return (
        <View style={GlobalStyleSheet.container}>
            <Title>Manage Fees</Title>
            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}
            {fees.length > 0 ? (
                fees.map((fee, index) => (
                    <View key={index} style={styles.feeContainer}>
                        <Text>Amount Due: {fee.amount_due}</Text>
                        <Text>Amount Paid: {fee.amount_paid}</Text>
                        <Text>Late Fees: {fee.late_fees}</Text>
                        <Text>Payable Amount: {fee.payable_amount}</Text>
                        <Text>Payment Date: {fee.payment_date}</Text>
                    </View>
                ))
            ) : (
                <Text>No fees data available.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    feeContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default StudentManageFees;
