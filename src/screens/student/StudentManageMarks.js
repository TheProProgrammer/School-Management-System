import GlobalStyleSheet from '../../../GlobalStyleSheet';

import React, { useState } from 'react';
import { View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';

const StudentManageMarks = ({navigation}) => {

    return(
        <View style={GlobalStyleSheet.container}>
            <Title>Manage Marks</Title>
        </View>
    );
}
export default StudentManageMarks;