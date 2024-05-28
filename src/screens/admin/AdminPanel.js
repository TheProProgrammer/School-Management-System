import GlobalStyleSheet from '../../../GlobalStyleSheet';


import {Text,View,Image,StyleSheet, ScrollView,Button} from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
    

const styles = StyleSheet.create({
    view:{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', 
    backgroundColor:"white",
    padding:20
  },
  text:{
    width:"100%",
    padding:20,
    color:"black",
    fontSize:20,
    fontWeight:"bold"

  },
  text1:{
    width:"100%",
    // padding:20,

    color:"black",
    fontSize:15,
    paddingTop:20,
    fontWeight:"bold",
    Flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  banner:{
    width:"100%",
    height:"30%",
    backgroundColor:"#5D57D3",
    borderRadius:20,
    Flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
    // margin:10

  },
  card:{
        padding:20,
        // width:"100%",
        height:"70%",
        backgroundColor:"red",
        margin:10
  },
  categories:{
    // Flex:1,

    width:"100%",
    backgroundColor:"orange",
    padding:10,
  }

})
const AdminPanel = ({navigation}) => {

    function TextSection(){
        return (
            <>
                <Text style={styles.text}>Hi, Akansha <Image style={{width:30,height:30}} source={require("../../assets/wave.png")}/></Text>
            </>
        )
    }

    function Banner(){
        return (
            <>

                <View style={[styles.banner]}>
                    
                    <Image style ={{width:"40%",height:"78%",marginLeft:"10%",borderRadius:10}} source={require("../../assets/prof1.jpg")} />
                </View>
            </>
        )
    }

    function Categories(){
        return (
            <>

                <Text style={styles.text}>Categories</Text>
                <View style={{
                  width:"100%",

                }}>
                {/* <ScrollView style = {styles.categories}
                      horizontal={true}
                  >
                      <View style={styles.card}>
                          <Image style ={{
                              width:"100%",
                              height:"50%"

                          }}
                          source={require("../../assets/prof1.jpg")}
                          />
                          <Text style={styles.text1}>Add Teacher</Text>
                      </View>  


                      <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}>Add Teacher</Text>
                    </View>  



                  </ScrollView> */}

                  <ScrollView horizontal={true}>



                    <View style={styles.card} >
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}>Add Teacher</Text>
                        <Button
                        title="Go back to Home"
                        onPress={() => navigation.navigate('Create Student')}
                      />
                    </View>  


                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}>Add Teacher</Text>
                    </View>  


                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}>Add Teacher</Text>
                    </View>  


                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}>Add Teacher</Text>
                    </View>  


                    
                  </ScrollView>
                </View>
                
            </>
        )
    }

    function HomeScreen() {
        return (
            <>
            <View style={styles.view}>

                <TextSection/>

                <Banner />                
                
                <Categories/>
            </View>
             
            </>
        );
      }
  
      function SettingsScreen() {
        return (
          <View style={styles.view}>
            <Text>Settings Screen</Text>
          </View>
        );
      }

    return(
        <>

            

              <Tab.Navigator
                 screenOptions={{
                    headerShown: false,
                    
                }}
       
              >
                <Tab.Screen
                 name="Home" 
                 component={HomeScreen} 
                 options={{
                    tabBarIcon: ({focused}) => (
                      <Image
                        style={{width:30
                            ,
                            height:30
                        }}
                        source={require("../../assets/home.png")}
                        focused={focused}
                      />
                    ),
                    
                  }}
                  />
                <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                      <Image
                        style={{width:30
                            ,
                            height:30
                        }}
                        source={require("../../assets/settings.png")}
                        focused={focused}
                      />
                    ),
                  }}
                
                />
              </Tab.Navigator>
         
        </>
    )
}
export default AdminPanel