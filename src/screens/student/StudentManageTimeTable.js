import GlobalStyleSheet from '../../../GlobalStyleSheet';

import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { Title, TextInput, Button, Text} from 'react-native-paper';

const timetable = [
    { time: '8:30 - 9:30', Monday: 'English', Tuesday: 'Math', Wednesday: 'Urdu', Thursday: 'General Knowledge', Friday: 'Social Study' },
    { time: '9:30 - 10:30', Monday: 'Math', Tuesday: 'Islamyat', Wednesday: 'Computer (P1)', Thursday: 'Quran', Friday: 'English' },
    { time: '10:30 - 11:30', Monday: 'Break', Tuesday: 'Break', Wednesday: 'Break', Thursday: 'Break', Friday: 'Break' },
    { time: '11:30 - 12:30', Monday: 'General Knowledge', Tuesday: 'Urdu', Wednesday: 'Social Study', Thursday: 'Computer (P2)', Friday: 'Math' },
    { time: '12:30 - 1:30', Monday: 'Islamyat', Tuesday: 'Quran', Wednesday: 'English', Thursday: 'Urdu', Friday: 'Computer (P1)' },
  ];

const StudentManageTimeTable = ({navigation}) => {
    const renderItem = ({ item }) => (
        <View style={GlobalStyleSheet.row}>
          <Text style={GlobalStyleSheet.cell}>{item.time}</Text>
          <Text style={GlobalStyleSheet.cell}>{item.Monday}</Text>
          <Text style={GlobalStyleSheet.cell}>{item.Tuesday}</Text>
          <Text style={GlobalStyleSheet.cell}>{item.Wednesday}</Text>
          <Text style={GlobalStyleSheet.cell}>{item.Thursday}</Text>
          <Text style={GlobalStyleSheet.cell}>{item.Friday}</Text>
        </View>
      );
    
      return (
        <View style={GlobalStyleSheet.container}>
          <View style={[GlobalStyleSheet.row, GlobalStyleSheet.headerRow]}>
            <Text style={GlobalStyleSheet.headerCell}>Time</Text>
            <Text style={GlobalStyleSheet.headerCell}>Monday</Text>
            <Text style={GlobalStyleSheet.headerCell}>Tuesday</Text>
            <Text style={GlobalStyleSheet.headerCell}>Wednesday</Text>
            <Text style={GlobalStyleSheet.headerCell}>Thursday</Text>
            <Text style={GlobalStyleSheet.headerCell}>Friday</Text>
          </View>
          <FlatList
            data={timetable}
            renderItem={renderItem}
            keyExtractor={(item) => item.time}
          />
        </View>
      );
}
export default StudentManageTimeTable;