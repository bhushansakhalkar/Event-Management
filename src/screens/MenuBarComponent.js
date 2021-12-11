import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const MenuBarComp = (props) => {
  return (
    <View style={styles.container} >
        <View style={styles.row}>
          <TouchableOpacity style={styles.iconContainer,{flex:1}}>
          <FontAwesome name="home" size={30} color="#004DA9" />
          <Text  style={styles.text} >Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer,{flex:1}}>
          <MaterialIcons name="explore" size={30} color="#004DA9" />
          <Text  style={styles.text} >Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer ,{flex:1}}>
          <MaterialIcons name="group" size={30} color="#004DA9" />
          <Text  style={styles.text} >Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer ,{flex:1}}>
          <FontAwesome name="heart" size={30} color="#004DA9" />
          <Text  style={styles.text} >Liked</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer ,{flex:1}}>
          <MaterialIcons name="menu" size={30} color="#004DA9" />
          <Text  style={styles.text} >Menu</Text>
          </TouchableOpacity>
          </View>
 
          </View>
  )
};

const styles = StyleSheet.create({
    container:{
        borderRadius:1,
        backgroundColor:'white',
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

export default MenuBarComp;
