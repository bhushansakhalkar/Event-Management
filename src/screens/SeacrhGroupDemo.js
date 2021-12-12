import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  Swipeable,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import MyButton from "./MyButton";
import HeaderComp from "./HeaderComponent";
import MyInputField from "./MyInputField";
import MySearch from "./SearchComponent";
import AttendeesComp from "./AttendeesComp";

const Searchgroup = [
  {
    name: "Friend 1",
    image: require("D:/React/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 2",
    image: require("D:/React/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 3",
    image: require("D:/React/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 4",
    image: require("D:/React/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 5",
    image: require("D:/React/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 6",
    image: require("D:/React/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 7",
    image: require("D:/React/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
  {
    name: "Friend 8",
    image: require("D:/React/Event-Management/assets/pic.jpg"),
    email: "ashwini9sarode@gmail.com",
  },
];
const Separator = () => <View style={styles.itemSeparator} />;
const LeftSwipeActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#ccffbd", justifyContent: "center" }}
    >
      <Text
        style={{
          color: "#40394a",
          paddingHorizontal: 10,
          fontWeight: "600",
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Bookmark
      </Text>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: "#ff8303",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Text
        style={{
          color: "#1b1a17",
          paddingHorizontal: 10,
          fontWeight: "600",
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Delete
      </Text>
    </View>
  );
};
const swipeFromLeftOpen = () => {
  alert("Swipe from left");
};
const swipeFromRightOpen = () => {
  alert("Swipe from right");
};

const ListItem = ({ text }) => (
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
    onSwipeableLeftOpen={swipeFromLeftOpen}
  >
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 24 }} style={{ fontSize: 20 }}>
        {text}
      </Text>
    </View>
  </Swipeable>
);

const SearchGroup = () => {
  return (
    <View style={styles.background}>
      <View style={styles.headerstyle}>
        <Text style={styles.headertext}>Groups</Text>
      </View>
      <View style={styles.whiteBox}>
        <View style={styles.search}>
          <MySearch placeholder="Search Here"></MySearch>
        </View>
        <FlatList
          keyExtractor={(Searchgroup) => Searchgroup.name}
          data={Searchgroup}
          renderItem={({ item }) => {
            return (
              <ScrollView>
                <View>
                  <AttendeesComp
                    src={item.image}
                    name={item.name}
                    email={item.email}
                  />
                </View>
              </ScrollView>
            );
          }}
          ItemSeparatorComponent={() => <Separator />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
  },

  background: {
    backgroundColor: "#F2F3FF",
    paddingBottom: "100%",
  },
  search: {
    marginTop: "5%",
    marginBottom: "2%",
    marginLeft: "15%",
    width: "60%",
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
  Addmem: {
    backgroundColor: "#FA841A",
    color: "#FFFFFF",
    borderRadius: 30,
    textAlign: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    marginTop: "0%",
    marginLeft: "30%",
    width: "40%",
    height: 30,

    alignItems: "center",
  },
  addmemflex: {
    flexDirection: "column",

    display: "flex",
    justifyContent: "space-evenly",
  },
  addmemflex2: {
    flexDirection: "row",
    display: "flex",
    marginLeft: "15%",
    marginTop: "10%",
  },
  plus: {
    marginLeft: "20%",
  },
  attendees: {
    textAlign: "center",
    marginTop: "3%",
    marginLeft: "3%",
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
    left: 95,
    bottom: 0,
    width: "100%",
    height: "25%",
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
    marginTop: "4%",
  },
  attendees_image: {
    width: 40,
    height: 40,
    borderRadius: 80,
  },
  namestylegrp: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "700",
    marginTop: "4%",
    marginLeft: "4%",
  },
});

export default SearchGroup;
