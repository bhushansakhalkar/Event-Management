import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
    ScrollView,
    TextInput,
    TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import MyButton from "./MyButton";
import MyInputField from "./MyInputField";


const Changephone= () => {
  return (
    <View style={styles.background}>
    <View style={styles.whiteBox}>
    <MyInputField  placeholder="Enter your current phone number" />
      <MyInputField placeholder="Enter your new phone number" />
      <MyInputField placeholder="OTP" />
      <Text style={styles.errormsg} >Error or success message</Text>
      <MyButton name="Save" />
    </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    
  background: {
    backgroundColor: "#F2F3FF",
    paddingBottom: "100%",
  },
  whiteBox: {
    width: "90%",
    height: "110%",
    backgroundColor: "#FFFFFF",
    marginTop: 50,
    paddingBottom: 50,
    marginLeft: "5%",
    borderRadius: 70,
  },
  errormsg:{
    marginTop: 50,
    textAlign: "center",

  },
});

export default Changephone;


