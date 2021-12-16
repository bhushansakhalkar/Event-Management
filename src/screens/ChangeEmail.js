import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import MyButton from "./MyButton";
import HeaderComp from "./HeaderComponent";
import MyInputField from "./MyInputField";

const ChangeEmail = () => {
  return (
    <View style={styles.background}>
      <View style={styles.whiteBox}>
        <Text style={styles.namestyle}>Your current Email Id</Text>
        <TextInput style={styles.input2} placeholder="annaroygmail.com" />
        <TextInput style={styles.input} placeholder="New Email Id" />
        <TouchableOpacity>
          <Text style={styles.SignUpButton}>Change Email Address</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Send OTP" />
        <TouchableOpacity>
          <Text style={styles.SignUpButton}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    input2:{
    height: 40,
    width: "80%",
    marginTop: 30,
    textAlign: "center",
    marginLeft: "12%",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#DCD3D3'
    },
  input: {
    height: 40,

    width: "80%",

    marginTop: 30,

    textAlign: "center",

    marginLeft: "12%",

    alignItems: "center",

    borderWidth: 1,

    borderRadius: 20,

    padding: 10,
  },
  background: {
    backgroundColor: "#F2F3FF",
    paddingBottom: "100%",
  },
  whiteBox: {
    width: "90%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    marginTop: 50,
    paddingBottom: 50,
    marginLeft: "5%",
    borderRadius: 70,
  },
  namestyle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 10,
  },
  SignUpButton: {
    backgroundColor: "#FA841A",
    color: "#FFFFFF",
    borderRadius: 30,
    textAlign: "center",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: "12%",
    marginLeft: "22%",
    width: "60%",
    height: 40,

    alignItems: "center",
  },
});

export default ChangeEmail;
