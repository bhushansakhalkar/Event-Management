import React, { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity,Modal,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import MyButton from './MyButton';
import SelectDropdown from 'react-native-select-dropdown';

const MenuBarComp = (props) => {
    const [menu, showMenu] = useState(false)
    const languages = ["English","German"];
  return (
    <View style={styles.container} >
        <View style={styles.row}>
          <TouchableOpacity style={styles.iconContainer,{flex:1}} onPress={()=>{
              props.navigation("Home")
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
              props.navigation("Groups")
          }}>
          <MaterialIcons name="group" size={30} color="#004DA9" />
          <Text  style={styles.text} >Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer ,{flex:1}} onPress={()=>{
              props.navigation("Favorites")
          }}>
          <FontAwesome name="heart" size={30} color="#004DA9" />
          <Text  style={styles.text} >Liked</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={menu}
          >
              <TouchableOpacity style={{backgroundColor:'#000000aa',flex:1}} onPress={()=>{
            showMenu(false);
        }}>
                <View style={{backgroundColor:'#ffffff',position:'absolute',bottom:60,left:5,right:5,paddingBottom:20,borderRadius:20}}  >
                <View style={{marginLeft:40,paddingTop:20}}>
                <SelectDropdown
        defaultButtonText="Languages"
        buttonTextStyle={{color:'white'}}
        buttonStyle={{backgroundColor:'#FA841A',width:'90%',textAlign:'center',borderRadius:40}}
        renderDropdownIcon = {()=>{
            return <AntDesign name="circledowno" size={24} color="white" />
        }}
	    data={languages}
	    onSelect={(selectedItem, index) => {

	    }}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
    />
    </View>
                <MyButton name="      Voice Support        " />
                {/* <TouchableOpacity  onPress={()=>{
            showMenu(false);
        }} > */}
                <MyButton name="        My Groups          " navigation = {props.navigation} destination={"Groups"} onPress={()=>showMenu(false)}/>
                {/* </TouchableOpacity> */}
                <MyButton name="       My Account          " navigation = {props.navigation} destination={"Account"} onPress={()=>{
            showMenu(false);
        }} />
                   {/* <Button onPress={()=>{
            showMenu(false);
        }}>Close</Button> */}
                </View>
              </TouchableOpacity>
              </Modal>
          <TouchableOpacity style={styles.iconContainer ,{flex:1}} onPress={()=>{
              showMenu(true)  
          }}>
          <MaterialIcons name="menu" size={30} color="#004DA9" />
          <Text  style={styles.text} onPress={()=>{
              showMenu(true)  
          }}>Menu</Text>
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

export default MenuBarComp;
