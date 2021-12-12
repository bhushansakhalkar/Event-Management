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
import MySearch from "./SearchComponent";

const Chats = () => {
  return (
    <View style={styles.background}>
      <View style={styles.headerstyle}>
        <Text style={styles.headertext}>Login</Text>
      </View>
      <View style={styles.whiteBox}>
        <View style={styles.addmemflex2}>
          <AntDesign
            style={styles.Camera}
            name="back"
            size={20}
            color="black"
          />
          <Image
            style={styles.attendees_image}
            source={require("D:/React/Event-Management/assets/pic.jpg")}
          />
          <Text style={styles.attendees}>Ashwini Sarode</Text>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 0.9 }}>
            <View>
              <Text style={styles.Senderbox}>Hello, How are you?</Text>
            </View>
            <View>
              <Text style={styles.Senderbox}>How is Anna?</Text>
            </View>
            <View>
              <Text style={styles.Receiverbox}>I am fine,how are you?</Text>
            </View>
            <View>
              <Text style={styles.Receiverbox}>Anna's great too!!</Text>
            </View>
          </ScrollView>
          <View style={{ flex: 0.1 }}>
          
            <MyInputField placeholder="Your Message" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  background: {
    backgroundColor: "#F2F3FF",
    paddingBottom: "100%",
  },
  whiteBox: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    marginTop: 50,
    paddingBottom: 50,
    marginLeft: "5%",
    borderRadius: 40,
    shadowColor: "#1205CE",
    height: "100%",
  },

  Senderbox: {
    backgroundColor: "#004DA9",
    color: "#FFFFFF",
    borderRadius: 30,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: "10%",
    marginLeft: "48%",
    width: "50%",
    height: 40,
  },
  Receiverbox: {
    backgroundColor: "#FA841A",
    color: "#FFFFFF",
    borderRadius: 30,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: "10%",
    marginLeft: "2%",
    width: "50%",
    height: 40,
  },
  attendees_image: {
    width: 40,
    height: 40,
    borderRadius: 80,
  },
  addmemflex2: {
    flexDirection: "row",
    display: "flex",
    marginLeft: "15%",
    marginTop: "5%",
  },
  attendees: {
    textAlign: "center",
    marginTop: "3%",
    marginLeft: "3%",
  },
});

export default Chats;
