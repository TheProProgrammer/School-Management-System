import React from 'react';
import { View, StyleSheet,Image  } from 'react-native';
import { Button, Title } from 'react-native-paper';

const TeacherDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title>Teacher Dashboard</Title>
       
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/38/fa/f2/38faf2cbf855e3cb7fdb7a0f66c43502.jpg/image.png' }}
        style={styles.image}
      />
      <Button
        
        onPress={() => navigation.navigate('MarkManagement')}
        style={styles.button}
      >
        Manage Marks
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Makes the image round
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#FF69B4', // Cute pink color
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FFB6C1', // Light pink background for buttons
  },
});

export default TeacherDashboard;
 