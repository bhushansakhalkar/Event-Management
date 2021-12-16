import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import MyInputField from "./MyInputField";
import MySearch from "./SearchComponent";
import HeaderComp from "./HeaderComponent";
import CardComp from "./CardComponent";
import LogoComp from "./LogoComponent";
import MenuBarComp from "./MenuBarComponent";
import MyButton from "./MyButton";
import { Dimensions } from "react-native";
const HomeScreen = () => {

  return (
  

    <ScrollView  >
    <View >  
        <ImageBackground
          style={styles.image}
          source={require("D:/React Native/Event-Management/assets/pic.jpg")}
        />

        <View style={styles.search}>
          <MySearch placeholder="Search Here"></MySearch>
        </View>
        <View style={styles.buttons}>
          <MyButton name="Create Event" />
          <MyButton name="Create Group" />
        </View>

        <View style={styles.current}>
          <AntDesign name="hearto" size={20} color="black" />
          <TextInput
            style={styles.textinput}
            placeholder="Enter your location"
          ></TextInput>
          <AntDesign name="hearto" size={20} color="black" />
          <TouchableOpacity>
            <Text style={styles.location2}>Use my current location</Text>
          </TouchableOpacity>
        </View>

        <View></View>
        <View>
          <Text style={styles.welcome}>Welcome Anna !!</Text>
        </View>

        <View>
          <ScrollView horizontal={true}>
            <Text style={styles.cardBox}>Today</Text>
            <Text style={styles.cardBox}>Tomorrow</Text>
            <Text style={styles.cardBox}>Online</Text>
          </ScrollView>
        </View>


        <Text style={styles.text}>Recommended Events For You</Text>
    
    
    </View>
    </ScrollView>
  );
};






  
  
const styles = StyleSheet.create({
  image: {
    height: "65%",
    width: "100%",
  },
  text: {
    fontSize: 20,
    marginLeft: "3%",
  },
  container: {
    flex: 0.9,
    flexDirection: "row",
    marginLeft: "0.5%",
    paddingBottom: 30,
  },
  footer: {
    flex: 0.2,
    height: 200,
  },
  card: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  cardBox: {
    marginHorizontal: 5,
    marginBottom: 17.5,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 20,
    padding: 10,
  },
  search: {
    position: "absolute",
    marginTop: 20,
    marginLeft: "10%",
  },
  current: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-evenly",
    marginLeft: "2%",
    marginTop: "-10%",
  },
  text: {
    fontSize: 30,
  },
  textinput: {
    fontSize: 12,
    height: 20,
    width: "50%",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderColor: "#ccc",
    marginLeft: "10%",
    marginTop: "-50%",
  },
  background: {
    backgroundColor: "#F2F3FF",
    paddingBottom: 150,
  },
  buttons: {
    flexDirection: "row",
    display: "flex",
    bottom: "65%",
    justifyContent: "space-evenly",
    alignItems: "center",
    
  },
  location1: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "-10%",
  },

  location2: {
    fontSize: 12,
    marginTop: "-15%",
    marginLeft: 42,
  },
  welcome: {
    fontSize: 30,
    marginLeft: 40,
    marginTop: "5%",
  },
});

export default HomeScreen;
