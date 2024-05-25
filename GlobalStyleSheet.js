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
        }
    }
  );
  export default GlobalStyleSheet