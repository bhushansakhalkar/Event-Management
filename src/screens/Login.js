import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MyInputField from "./MyInputField";
import { AntDesign } from "@expo/vector-icons";
import { withOrientation } from "react-navigation";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.bg}>
      <View style={styles.headerstyle}>
        <Text style={styles.headertext}>Login</Text>
      </View>

      <MyInputField placeholder="Email" onChangeText={() => setEmail(email)} />
      <MyInputField
        placeholder="Password"
        onChangeText={() => setPassword(password)}
      />
      <TouchableOpacity style={styles.loginbtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.social}>
        <AntDesign name="facebook-square" size={24} color="black" />
        <AntDesign name="google" size={24} color="black" />
        <AntDesign name="instagram" size={24} color="black" />
      </View>

      <TouchableOpacity style={styles.questext}>
        <Text style={styles.textsize}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.newuser}>
        <Text style={styles.textsize}>New User? Sign up</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      <TouchableOpacity style={styles.newuser}>
        <Text style={styles.textsize}>Continue as guest?</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  social: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 50,
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
    marginTop: 100,
    marginLeft: 100,
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
    fontSize: 20,
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
    marginTop: 20,

    justifyContent: "center",
    backgroundColor: "#FA841A",
    marginLeft: "30%",
  },
  newuser: {
    marginLeft: 100,
    marginBottom: "10%",
    justifyContent: "center",
    textAlignVertical: "center",
    height: 30,
    alignItems: "center",
    width: "50%",
  },
});
export default Login;
