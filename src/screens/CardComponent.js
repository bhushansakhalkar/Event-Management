import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";


const CardComp = (props) => {
  return (
      

    <View style={styles.card}>
{/* <Image style={styles.image}
            source={require()} /> */}
      <View >
        <Text style={styles.cardevent}>{props.eventname}</Text>
        <Text style={styles.carddesc}>{props.eventdesc}</Text>
      </View>
      <View style={styles.circle}>
        <Text style={styles.datetext}>{props.date}</Text>
      </View>
      <View>
        <AntDesign style={styles.heart} name="hearto" size={40} color="black" />
        <Text>{props.likes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 275,
    flexDirection: "row",
    margin: 15,
   marginHorizontal: 10,
   marginBottom: 17.5,
   borderColor: '#FFFFFF',
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.3,
   shadowRadius: 5,
   elevation: 5,
   borderRadius: 10
  },
  image: {
    width:148,
        height:148,
        borderRadius:80,
  },
  cardevent: {
    
     marginTop: "90%",
     marginLeft: "10%",
     fontSize:20,
     width: "79%"
    
     
  },
  carddesc:{
    
     marginTop: 20,
     marginLeft: 15

  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    backgroundColor: '#FA841A',
    marginLeft: 70,
    marginTop: 100
  },
  datetext: {
      fontSize: 18,
      color: 'white'
  },
  heart: {
    
        width:'10%',
        height:'15%',
        marginTop: "120%",

  },
});

export default CardComp;
