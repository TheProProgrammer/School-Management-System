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
    backgroundColor:"#5f57D3",
    borderRadius:20,
    Flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    // margin:10
    elevation: 5, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 10, height: 2 }, // For iOS
    shadowOpacity: 0.15, // For iOS
    shadowRadius: 3.84, // For iOS

  },
  card:{
        padding:20,
        // width:"100%",
        height:"70%",
        backgroundColor:"white",
        borderColor:"#5f57D3",
        borderRadius:10,
        margin:10,
    elevation: 5, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 3.84, // For iOS
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
                <Text style={styles.text}>Hi, Admin! <Image style={{width:30,height:30}} source={require("../../assets/wave.png")}/></Text>
            </>
        )
    }

    function Banner(){
        return (
            <>

                <View style={[styles.banner]}>
                    <Text style={{marginTop:80,marginLeft:10,fontSize:20,color:"white",fontWeight:"bold"}}>Contact: 0347 74774 7774</Text>
                    <Image style ={{width:"40%",height:"78%",marginLeft:"-20%",marginBottom:150,borderRadius:10}} source={require("../../assets/prof1.jpg")} />
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
                        <Text style={styles.text1}></Text>
                        <Button
                        title="Add Student"
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
                        <Text style={styles.text1}></Text>
                        <Button
                        title="View Student"
                        onPress={() => navigation.navigate('View Student')}
                      />
                    </View>  


                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}></Text>
                        <Button
                        title="      Add Fees       "
                        onPress={() => navigation.navigate('Add Fees')}
                      />
                    </View>  


                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}></Text>
                        <Button
                        title="     Assign Class  "
                        onPress={() => navigation.navigate('AssignClass')}
                      />
                    </View>  

                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}></Text>
                        <Button
                        title="     Timetable     "
                        onPress={() => navigation.navigate('timetable')}
                      />
                    </View>  

                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}></Text>
                        <Button
                        title="    Syllabus    "
                        onPress={() => navigation.navigate('syllabus')}
                      />
                    </View>  


                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}></Text>
                        <Button
                        title="    Age Record     "
                        onPress={() => navigation.navigate('AgeRecord')}
                      />
                    </View>  


                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}></Text>
                        <Button
                        title="    ResultRecord   "
                        onPress={() => navigation.navigate('ResultRecord')}
                      />
                    </View>  


                    <View style={styles.card}>
                        <Image style ={{
                            width:"100%",
                            height:"50%"

                        }}
                        source={require("../../assets/prof1.jpg")}
                        />
                        <Text style={styles.text1}></Text>
                        <Button
                        title="     View Fees     "
                        onPress={() => navigation.navigate('View Fees')}
                      />
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
          <HomeScreen/>
{/*             

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
          */}
        </>
    )
}
export default AdminPanel