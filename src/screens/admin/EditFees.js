import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { TextInput, Button } from 'react-native-paper';

const EditFees = ({ route, navigation }) => {
  const { id } = route.params;
  const [regNo, setRegNo] = useState('');
  const [name, setName] = useState('');
  const [amountDue, setAmountDue] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [payableAmount, setPayableAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [lateFees, setLateFees] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const doc = await firestore().collection('students').doc(id).get();
        if (doc.exists) {
          const data = doc.data();
          setRegNo(data.reg_no);
          setName(data.name);
          setAmountDue(data.amount_due);
          setAmountPaid(data.amount_paid);
          setPayableAmount(data.payable_amount);
          setPaymentDate(data.payment_date);
          setLateFees(data.late_fees);
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
      await firestore().collection('students').doc(id).update({
        reg_no: regNo,
        name,
        amount_due: amountDue,
        amount_paid: amountPaid,
        payable_amount: payableAmount,
        payment_date: paymentDate,
        late_fees: lateFees,
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Registration Number"
        value={regNo}
        onChangeText={setRegNo}
        style={styles.input}
      />
      <TextInput
        label="Student Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Amount Due"
        value={amountDue}
        onChangeText={setAmountDue}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Amount Paid"
        value={amountPaid}
        onChangeText={setAmountPaid}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Payable Amount"
        value={payableAmount}
        onChangeText={setPayableAmount}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Payment Date"
        value={paymentDate}
        onChangeText={setPaymentDate}
        style={styles.input}
      />
      <Button mode="contained" onPress={updateRecord} loading={loading}>
        Update
      </Button>
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

export default EditFees;
