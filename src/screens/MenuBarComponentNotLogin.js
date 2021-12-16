import React, { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity,Modal,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import MyButton from './MyButton';
import SelectDropdown from 'react-native-select-dropdown';

const MenuBarCompNL = (props) => {
    const [menu, showMenu] = useState(false)
    const languages = ["English","German"];
  return (
    <View style={styles.container} >
        <View style={styles.row}>
          <TouchableOpacity style={styles.iconContainer,{flex:1}} onPress={()=>{
              props.navigation("LoginError")
          }}>
          <FontAwesome name="home" size={30} color="#004DA9" />
          <Text  style={styles.text} >Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer,{flex:1}} onPress={()=>{
              props.navigation("Events")
          }}>
          <MaterialIcons name="explore" size={30} color="#004DA9" />
          <Text  style={styles.text} >Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer ,{flex:1}} onPress={()=>{
              props.navigation("LoginError")
          }}>
          <MaterialIcons name="group" size={30} color="#004DA9" />
          <Text  style={styles.text} >Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer ,{flex:1}} onPress={()=>{
              props.navigation("LoginError")
          }}>
          <FontAwesome name="heart" size={30} color="#004DA9" />
          <Text  style={styles.text} >Liked</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.iconContainer ,{flex:1}} onPress={()=>{
              props.navigation("LoginError")
          }}>
          <MaterialIcons name="menu" size={30} color="#004DA9" />
          <Text  style={styles.text}>Menu</Text>
          </TouchableOpacity>
          </View>
 
          </View>
  )
};

const styles = StyleSheet.create({
    container:{
        borderRadius:1,
        backgroundColor:'#F2F3FF',
        borderStyle:'solid',
        paddingTop:5,
        paddingBottom:5,
    },
    row:{
        flex:1,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        marginLeft:'8%',
    },
    iconContainer:{
        alignContent:'space-between',
        alignItems:'center',
        flexDirection:'column',
       
        
    },  
    text:{
        fontSize:15,
    }
})

export default MenuBarCompNL;
