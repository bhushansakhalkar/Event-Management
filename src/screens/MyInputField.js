import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

const MyInputField = (props) => {
  return (
    <View style={styles.input}>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  
  input:{

    height: 40,

    width:'80%',

    marginTop:20,

    textAlign: 'center',

    marginLeft:'10%',

    alignItems: 'center',

    borderWidth: 1,

    borderRadius:20,

    padding: 10,

},
 
});

export default MyInputField;
