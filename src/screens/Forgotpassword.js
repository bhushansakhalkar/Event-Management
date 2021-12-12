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

const Forgotpassword = () => {
  return (
    <View style={styles.background}>
      <View style={styles.headerstyle}>
        <Text style={styles.headertext}>Login</Text>
      </View>
      <View style={styles.whiteBox}>
        <Image
          style={styles.image}
          source={require("D:/React/Event-Management/assets/lock.png")}
        />
        <View style={styles.addmemflex2}>
          <TextInput style={styles.input} placeholder="Enter Email Id" />
        </View>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: "70%",
            marginLeft: "15%",
          }}
        />
        <View style={styles.SignupAlign}>
          <TouchableOpacity>
            <Text style={styles.SignUpButton}>Send password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 25,
    width: "80%",

    marginTop: "40%",

    textAlign: "center",

    marginLeft: "10%",

    alignItems: "center",

    borderRadius: 20,

    padding: 10,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 80,

    marginLeft: "35%",
    marginTop: "-10%",
  },
  SignupAlign: {
    marginTop: "18%",
    marginLeft: "-5%",
  },
  SignUpButton: {
    backgroundColor: "#FA841A",
    color: "#FFFFFF",
    borderRadius: 50,
    textAlign: "center",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,

    width: "60%",
    height: 40,

    alignItems: "center",
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
  SignUpButton: {
    backgroundColor: "#FA841A",
    color: "#FFFFFF",
    borderRadius: 30,
    textAlign: "center",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: "5%",
    marginLeft: "12%",
    width: "80%",
    height: 40,

    alignItems: "center",
  },
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
});

export default Forgotpassword;
