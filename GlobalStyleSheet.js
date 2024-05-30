import { StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
const GlobalStyleSheet = StyleSheet.create(
    {
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#DDEAFC', // Background light blue
        color:'#ffffff',
      },
      background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      },
      myButton: {
        margin: 5,
        borderRadius: 15,
       
        backgroundColor: '#2FD1F5', // Card color primary 2 blue
      },
      myInput: {
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#ffffff', // White background for inputs
        padding: 10,
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
        color: '#222E45', // Dark font color
      },
      marksInput: {
        width: 60,
        borderBottomWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
      },
      buttonRow: {
         
        justifyContent: 'space-between',
        marginVertical:5,
      },
      buttonColumn:{
    justifyContent:'space-between',
    padding:5,
    flexDirection:'column',
    
      },
      button: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#2FD1F5',
      }, 
      title: {
        color: '#222E45', // Dark font color (change this to your desired color)
      }, 

      row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      headerRow: {
        backgroundColor: '#f8f8f8',
      },
      cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
      },
      headerCell: {
        flex: 1,
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    }
);
  export default GlobalStyleSheet