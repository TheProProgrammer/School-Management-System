import { StyleSheet } from "react-native";
const GlobalStyleSheet = StyleSheet.create(
    {
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
        background: {
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        },
        myButton:{
          margin:5,
          borderRadius:15
        },
        myInput:{
          margin:5,
          borderRadius:15
        },
        menuContainer: {
          marginBottom: 20,
        },
        studentList: {
          flex: 1,
          marginBottom: 20,
        },
        studentRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderColor: '#ddd',
        },
        studentName: {
          fontSize: 16,
        },
        marksInput: {
          width: 60,
          borderBottomWidth: 1,
          borderColor: '#000',
          textAlign: 'center',
        },
        buttonRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical:5,
        },
        buttonColumn:{
      justifyContent:'space-between',
      padding:5,
      
        },
        button: {
          flex: 1,
          marginHorizontal: 5,
        },
    }
  );
  export default GlobalStyleSheet