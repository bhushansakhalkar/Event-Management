import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
const ImageNameComponent = (props) => {
  return (
         
          <View style={{flexDirection:'row'}}>
         <View style={{flexDirection:'column'}}>
         <Image style={styles.imageProfile}
            source={require('D:/React Native/Event-Management/assets/pic.jpg')} />
            <Text style={styles.name}>Jonny Bravo</Text>
         </View>
            </View>
         
  )
};

const styles = StyleSheet.create({
   container:{
    flexDirection:'row',
    width:'100%',
    height:220,
    
},
imageProfile:{
    height:80,
    marginLeft:'10%',
    width:80,
    borderRadius:40
},
name:{
    width:'100%',
    marginLeft:'10%'
},

})

export default ImageNameComponent;
