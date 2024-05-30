import React, { useState,useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { TextInput, Button, Menu, Provider ,Text } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const AssignClass = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
  
  const [regNo, setRegNo] = useState('');
  const [name, setName] = useState('');
  const [amountDue, setAmountDue] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [payableAmount, setPayableAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [lateFees, setLateFees] = useState(false);

  const [registrations, setRegistrations] = useState([]);
 
  const addRecord = async () => {
    try {
        const querySnapshot = await firestore().collection('Students').where('RegNo', '==', regNo).get();
        if (!querySnapshot.empty) {
            const docRef = querySnapshot.docs[0].ref;  // Assuming only one document per regNo
            const newFee = {
              amount_due: amountDue,
              amount_paid: amountPaid,
              payable_amount: payableAmount,
              payment_date: paymentDate,
              late_fees: lateFees
            };
            await docRef.update({
              fees: firestore.FieldValue.arrayUnion(newFee)
            });
      navigation.goBack();
    } else {
        console.error('No document found with that registration number.');
      }
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelectRegistration = (reg) => {
    setRegNo(reg);
    closeMenu();
  };

  useEffect(() => {
    const fetchRegistrations = async () => {
      const querySnapshot = await firestore().collection('Teachers').get();
      const regs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        regNo: doc.data().name
      }));
      setRegistrations(regs);
    };

    fetchRegistrations();
  }, []);
  return (
    <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:"bold",marginBottom:60}}>Assign Class</Text>
     <Text>Teacher: </Text>
      <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>{regNo || "Select Registration Number"}</Button>}>
          {registrations.map((item) => (
            <Menu.Item key={item.id} onPress={() => handleSelectRegistration(item.regNo)} title={item.regNo} />
          ))}
        </Menu>
     
      
      <TextInput
        label="Assign Class"
        value={amountDue}
        onChangeText={setAmountDue}
        style={styles.input}
        keyboardType="numeric"
      />
     
      <Button mode="contained" onPress={addRecord}>
        Assign
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"white"
  },
  input: {
    marginBottom: 20,
    backgroundColor:"white"
  },
});

export default AssignClass;
