import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MyInputField from "./MyInputField";
import { AntDesign } from "@expo/vector-icons";
import { withOrientation } from "react-navigation";
import HeaderComp from "./HeaderComponent";
import Users from "../../assets/data/Users";

const LoginError = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(1)
  
 
  
    
  return (
    <View style={styles.bg}>
      {/* <HeaderComp title='Login' /> */}
      <Text style={{opacity:show,color:'red',textAlign:'center',marginTop:20}}>Please Login In to avail these Features!</Text>
      <View style={{marginTop:'20%'}}>
      <TextInput style={styles.input} placeholder="Email"  onChangeText={(value) => setEmail(value)} />
      <TextInput style={styles.input}
        placeholder="Password" secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity style={styles.loginbtn} onPress={()=>{
        props.navigation.navigate('Home')
      }}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.social}>
        <AntDesign name="facebook-square" size={30} color="black" />
        <AntDesign name="google" size={30} color="black" />
        <AntDesign name="instagram" size={30} color="black" />
      </View>

      

      <TouchableOpacity style={styles.questext}onPress={()=>{
          props.navigation.navigate('Forgotpassword')
      }}>
        <Text style={styles.textsize}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.newuser} onPress={()=>{
          props.navigation.navigate('SignUp')
      }}>
        
        <Text style={styles.textsize}>New User? Sign up</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      <TouchableOpacity style={styles.newuser} onPress={()=>{
          props.navigation.navigate('Explore')
      }} >
        <Text style={styles.textsize}>Continue as guest?</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  social: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 70,
  },
  input:{
    height: 40,
    width:'80%',
    marginTop:20,
    textAlign: 'center',
    marginLeft:'10%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius:20,
    padding: 10,
},
  headerstyle: {
    backgroundColor: "#004DA9",
    height: 100,
    fontSize: 50,
  },
  headertext: {
    fontSize: 35,
    color: "white",
    textAlign: "center",
    margin: 20,
    height: 100,
  },
  questext: {
    marginTop: '10%',
    marginLeft: '25%',
    justifyContent: "center",
    textAlignVertical: "center",
    height: 30,
    alignItems: "center",
    width: "50%",
  },
  loginText: {
    fontSize: 20,
    color: "white"
  },
  bg: {
    backgroundColor: "#F2F3FF",
    height: "100%",
  },

  textsize: {
    fontSize: 15,
  },
  textinput: {
    fontSize: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginLeft: 20,
    margin: 20,
    paddingVertical: 20,
    borderColor: "#ccc",
    fontSize: 20,
    alignItems: "center",
  },
  loginbtn: {
    fontSize: 30,
    backgroundColor: "grey",
    width: "40%",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    marginTop: 60,

    justifyContent: "center",
    backgroundColor: "#FA841A",
    marginLeft: "30%",
  },
  newuser: {
    marginLeft: '25%',
    marginBottom: "10%",
    justifyContent: "center",
    textAlignVertical: "center",
    height: 30,
    alignItems: "center",
    width: "50%",
  },
});
export default LoginError;
