import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import SearchableDropdown from "react-native-searchable-dropdown";
var items = [
  {
    name: "Heidelberg Yoga Camp",
    image: require("D:/React Native/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Heidelberg Yoga Camp",
    image: require("D:/React Native/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Heidelberg Yoga Camp",
    image: require("D:/React Native/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 4",
    image: require("D:/React Native/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 5",
    image: require("D:/React Native/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 6",
    image: require("D:/React Native/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 7",
    image: require("D:/React Native/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 8",
    image: require("D:/React Native/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
];
const MySearch = (props) => {
  return (
    <View style={styles.row}>
      <SearchableDropdown
        onTextChange={(text) => console.log(text)}
        onItemSelect={(item) => console.log(JSON.stringify(item))}
        containerStyle={{
          padding: 15,
          width: "80%",
        }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 45,
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: "#fff",
          borderColor: "#bbb",
          borderWidth: 1,
          borderRadius: 15,
        }}
        itemTextStyle={{
          color: "#222",
        }}
        itemsContainerStyle={{
          maxHeight: 140,
        }}
        items={items}
        placeholder="Search Here."
        resetValue={false}
        underlineColorAndroid="transparent"
      />

      <View style={styles.row2}>
        <AntDesign name="search1" size={25} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 1,
    backgroundColor: "white",
    borderStyle: "solid",
    paddingTop: 5,
    paddingBottom: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginTop: "5%",
    marginLeft: "8%",
  },
  row2: {
    flexDirection: "row",
    marginTop: "7%",
    marginLeft: "1%",
  },
  iconContainer: {
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: 15,
  },
  Searchbar: {
    marginTop: "15%",
    height: 40,
    width: "60%",
    textAlign: "center",
    marginLeft: "15%",
    alignItems: "center",
    borderWidth: 5,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
  },
  searchicon: {
    position: "absolute",
    marginTop: "5%",
    marginLeft: "76%",
  },
});

export default MySearch;
