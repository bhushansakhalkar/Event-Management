import React from 'react';
import { Text, StyleSheet,View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import MyInputField from './MyInputField';
import MySearch from "./SearchComponent";

const Account = () => {
  return(
    <ScrollView>
      <View style={styles.background}>

      
          <HeaderComp title='Account' />
          <View style={styles.whiteBox}>
          
          <View style={styles.imageCircleBox}>
            <View style={styles.imageCircle}>
            <Image style={styles.image}
            source={require('D:/React/Event-Management/assets/pic.jpg')} />
            <AntDesign style={styles.Camera} name="camera" size={40} color="black"  />
            </View>
            </View>
          <Text style={styles.namestyle}>Anna Roy</Text>
          <Text style={styles.namestyle}>annaroy@gmail.com</Text>
          
          <TouchableOpacity >
          <Text  style={styles.SignUpButton} >Change Email Address</Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text  style={styles.SignUpButton} >Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text  style={styles.SignUpButton} >Change Phone Number</Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text  style={styles.SignUpButton} >Set Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <Text  style={styles.SignUpButton} >Logout</Text>
          </TouchableOpacity>
          </View>
      
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F2F3FF',
        paddingBottom:100,
    },
    whiteBox:{
        width:'90%',
        backgroundColor:'#FFFFFF',
        marginTop:50,
        paddingBottom:50,
        marginLeft:'5%',
        borderRadius:70,
        shadowColor: '#1205CE'
        
    },
    imageCircleBox:{
        alignContent:'center',
        alignItems:'center',
        marginBottom: "10%"
        
    },
    imageCircle:{
        width:120,
        height:120,
        marginTop:-25,
        borderWidth: 1,
        borderRadius:50,
        backgroundColor:'#FFFFFF',
    },
    
    image:{
        width:118,
        height:118,
        borderRadius:80,
    },
    Camera:{
        position:'absolute',
        right:0,
        left:95,
        bottom:0,
        width:'100%',
        height:'25%',
    },
    
  SignUpButton:{
        backgroundColor:'#FA841A',
        color:'#FFFFFF',
        borderRadius:30,
        textAlign:'center',
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
        marginTop:'5%',
        marginLeft: '12%',
        width:'80%',
        height: 40,
        borderWidth:1,
        alignItems: 'center'
  },
  namestyle:{
    
    textAlign:'center',
    fontSize: 15,
    fontWeight: '700'

  },
  
});

export default Account;
