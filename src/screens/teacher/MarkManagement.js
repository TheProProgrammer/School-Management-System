import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';

const studentsData = [
  { id: '1', name: 'Student 1', marks: '' },
  { id: '2', name: 'Student 2', marks: '' },
  // Add more student data here
];

const MarkManagement = () => {
  const [students, setStudents] = useState(studentsData);

  const handleMarkChange = (id, marks) => {
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, marks } : student
    );
    setStudents(updatedStudents);
  };

  const handleSave = () => {
    // Add save logic here 
    console.log('Marks saved:', students);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
              <TextInput
                label="Marks"
                value={item.marks}
                onChangeText={(text) => handleMarkChange(item.id, text)}
                keyboardType="numeric"
                style={styles.input}
              />
            </Card.Content>
          </Card>
        )}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save Marks
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginVertical: 8,
  },
  input: {
    marginTop: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default MarkManagement;
