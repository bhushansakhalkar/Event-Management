import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
// import MySearch from "./SearchComponent";
import MyButton from "./MyButton";
import MyInputField from "./MyInputField";
import AttendeesComp from "./AttendeesComp";
import { ImageBackground } from "react-native-web";
import SearchGroupComponent from "./SearchGroupComponent";
import AttendeesData from "../../assets/data/Attendees";
import HeaderComp from "./HeaderComponent";

const Attendees = () => {
  
  return (
    <View>
     
      <View style={styles.background}>
        <View style={styles.whiteBox}>
        <View >
          {/* <MySearch placeholder="Search Here"></MySearch> */}
        </View>
        
        <FlatList
          keyExtractor={(AttendeesData) => AttendeesData.id}
          contentContainerStyle={{paddingBottom:60}}
          data={AttendeesData}
          renderItem={({ item }) => {
            return (
              
                <View>
                  <SearchGroupComponent
                    src={item.image}
                    name={item.name}
                    email={item.email}
                  />
                </View>
              
            );
          }}
        
        />
          </View>
          </View>
          </View>
  );
};

const styles = StyleSheet.create({
    
    grpcomponent:{
        marginLeft: '5%',
        marginTop: '5%',

    },
  background: {
    backgroundColor: "#F2F3FF",
    paddingBottom: "90%",
    height:880
  },
  search: {
    marginTop: "6%",
    marginLeft: "10%",
    width: "50%",
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
 

  whiteBox: {
    width: "100%",
    height:670,
    backgroundColor: "#FFFFFF",
    paddingBottom: 50,
    borderRadius: 20,
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

export default Attendees;

// const Attendees = () => {
//   return (
//     <ScrollView>
//       <View style={styles.background}>

//       <View style={styles.headerstyle}>
//           <Text style={styles.headertext}>Login</Text>
//         </View>
//         <View style={styles.whiteBox}>
//         <View style={styles.search}>
//           <MySearch placeholder="Search Here"></MySearch>
//         </View>
//         <View style={styles.addmemflex2}>
//           <Image
//             style={styles.attendees_image}
//             source={require("D:/React/Event-Management/assets/pic.jpg")}
//           />
//           <Text style={styles.attendees}>Ashwini Sarode</Text>
//         </View>
//         <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
//         <View style={styles.addmemflex2}>
//           <Image
//             style={styles.attendees_image}
//             source={require("D:/React/Event-Management/assets/pic.jpg")}
//           />
//           <Text style={styles.attendees}>Ashwini Sarode</Text>
//         </View>
//         <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
//         <View style={styles.addmemflex2}>
//           <Image
//             style={styles.attendees_image}
//             source={require("D:/React/Event-Management/assets/pic.jpg")}
//           />
//           <Text style={styles.attendees}>Ashwini Sarode</Text>
//           <View style={{ height: 1, backgroundColor: "black",alignSelf: 'stretch' }} />
//         </View>

//       </View>

//         <View>
//           <AttendeesComp
//             path = {require("D:/React/Event-Management/assets/pic.jpg")}
//             title = "Bhuffi"

//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };
