import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';
import storage from '@react-native-firebase/storage';

const StudentManageTimeTable = ({ navigation, route}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const stdClass = route.params.class

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const reference = storage().ref(stdClass+'.png'); // Ensure correct storage reference
        const url = await reference.getDownloadURL();
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching file:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <View style={styles.container}>
      <Title>Timetable</Title>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <Text>No file found{stdClass}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 350,
    height: 350,
  },
});

export default StudentManageTimeTable;
