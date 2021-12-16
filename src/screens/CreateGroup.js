import React, { useState } from "react";
import { Text, StyleSheet, View, Image,Modal,TouchableOpacity } from "react-native";
import {
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import HeaderComp from "./HeaderComponent";
import MyButton from "./MyButton";
import MyInputField from "./MyInputField";
import MySearch from "./SearchComponent";
import MyButtons from "./MyButton2";


const CreateGroup = (props) => {
  const [show, showBox]  = useState(false)
  return (
    <View >
    <Modal
    
    transparent={true}
    visible={show}
    >
       <TouchableOpacity style={{backgroundColor:'#000000aa',height:'100%'}} onPress={()=>{showBox(false)}} >
            <View style={{backgroundColor:'#ffffff',marginTop:300,height:'30%' }}  >
      <MyInputField placeholder="Enter Email Id to Add" />
      <TouchableOpacity onPress={()=>{
        showBox(false)
        alert("Invitation Sent")
        }} >
      <Text style={{textAlign:"center",marginTop:20,fontSize:20}}>Send</Text>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
    </Modal>
    <ScrollView>
      
      <View style={styles.background}>
       {/* <HeaderComp title="Create Group"/> */}

        <View style={styles.imageCircleBox}>
          <View style={styles.imageCircle}>
            <Image
              style={styles.image}
              source={require("D:/React Native/Event-Management/assets/pic.jpg")}
            />
            <AntDesign
              style={styles.Camera}
              name="camera"
              size={40}
              color="black"
            />
          </View>
        </View>
        <Text style={styles.namestyle}>HEIDELBERG YOGA CAMP</Text>
        
        <View style={styles.addmemflex}>
        <View style={styles.plus}>
          <AntDesign name="plus" size={20} color="black" />
          </View>
          <TouchableOpacity onPress={()=>{showBox(true)}}>
            <Text style={styles.Addmem}>Add Members</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.namestylegrp}>Group Members</Text>
        <View style={styles.addmemflex2}>
          <Image
            style={styles.attendees_image}
            source={require("D:/React Native/Event-Management/assets/pic.jpg")}
          />
          <Text style={styles.attendees}>Ashwini Sarode</Text>
        </View>

        <View style={styles.addmemflex2}>
          <Image
            style={styles.attendees_image}
            source={require("D:/React Native/Event-Management/assets/pic.jpg")}
          />
          <Text style={styles.attendees}>Bhushan Sakhalkar</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.SignUpButton}>Logout</Text>
        </TouchableOpacity>
        
        
      </View>

      
    </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  Addmem: {
    backgroundColor: "#FA841A",
    color: "white",
    borderRadius: 30,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: "5%",
    height: 30,
    paddingTop:'4%',
  },
  addmemflex: {
    flexDirection: "row",
    marginLeft:'30%',
    marginTop:15,
    
  },
  addmemflex2: {
    flexDirection: "row",
      display: "flex",
      marginLeft: "15%",
      marginTop: "5%"
      

  },
  plus:{
      marginLeft: '2%',
      marginTop:'2%',
      
  },
  attendees:{
      
     textAlign: 'center',
     marginTop: '3%',
     marginLeft: '3%'


  },
  SignUp: {
    fontSize: 30,
    height: "50%",
    color: "white",
    marginTop: 30,
  },
  SignUpBox: {
    alignContent: "center",
    alignItems: "center",
    height: "25%",
    backgroundColor: "#004DA9",
  },
  background: {
    backgroundColor: "#F2F3FF",
    paddingBottom: 100,
    flex:1,
  },
  whiteBox: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    marginTop: 50,
    paddingBottom: 50,
    marginLeft: "5%",
    borderRadius: 70,
    shadowColor: "#1205CE",
  },
  imageCircleBox: {
    alignContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  imageCircle: {
    width: 120,
    height: 120,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },

  image: {
    width: 118,
    height: 118,
    borderRadius: 80,
  },
  Camera: {
    position: "absolute",
    right: 0,
    left: 90,
    bottom: 0,
    width: "100%",
    height: "35%",
  },

  SignUpButton: {
    backgroundColor: "#FA841A",
    color: "#FFFFFF",
    borderRadius: 30,
    textAlign: "center",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: "15%",
    marginLeft: "12%",
    width: "80%",
    height: 40,
    borderWidth: 1,
    alignItems: "center",
  },
  namestyle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    marginTop: '4%'
  },
  attendees_image: {
    width: 40,
    height: 40,
    borderRadius: 80,
  },
  namestylegrp:{
    textAlign: "left",
    fontSize: 15,
    fontWeight: "700",
    marginTop: '4%',
    marginLeft: '4%'
  }
});

export default CreateGroup;
