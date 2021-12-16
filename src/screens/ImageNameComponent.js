import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
const ImageNameComponent = (props) => {
  return (
    <View style={{flexDirection:'column',}}>
    <Image 
    style={{width:80,height:80,borderRadius:40}}
    source={props.src}
    />
    <Text style={{marginLeft:'5%'}}>{props.name}</Text>
    </View>
            
  )
};

const styles = StyleSheet.create({


})

export default ImageNameComponent;
