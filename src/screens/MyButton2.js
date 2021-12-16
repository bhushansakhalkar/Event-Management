import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyButtons = (props) => {
  return (
    <View style={styles.SignUpButtonBox}>
          <TouchableOpacity >
          <Text  style={styles.SignUpButton} >{props.name}</Text>
          </TouchableOpacity>
          </View>
  )
};

const styles = StyleSheet.create({
    SignUpButtonBox:{
        alignContent:'center',
        alignItems:'center',    
        marginTop:'10%',
    
  },
  SignUpButton:{
        backgroundColor:'#FA841A',
        color:'#FFFFFF',
        borderRadius:30,
        textAlign:'center',
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
        width:'100%',
        height: 40,
        borderWidth:1,
  }
})

export default MyButtons;
