import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import MyButton from "./MyButton";
import HeaderComp from './HeaderComponent';
import MyInputField from "./MyInputField";

const Changepassword = () => {
  return (
    <View style={styles.background}>
     <HeaderComp title='SignUp' />
      <View style={styles.whiteBox}>
        <MyInputField placeholder="Enter your current password" />
        <MyInputField placeholder="New password" />
        <MyInputField placeholder="Old password" />
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
});

export default Changepassword;
