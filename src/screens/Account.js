import React from 'react';
import { Text, StyleSheet,View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import MyInputField from './MyInputField';
import MySearch from "./SearchComponent";
import MenuBarComp from './MenuBarComponent';

const Account = (props) => {
  return(
    <View>
    <ScrollView>
      <View style={styles.background}>

{/*       
          <HeaderComp title='Account' /> */}
          <View style={styles.whiteBox}>
          
          <View style={styles.imageCircleBox}>
            
            <Image style={styles.image}
            source={require('D:/React Native/Event-Management/assets/Woman4.jpg')} />
            <AntDesign style={styles.Camera} name="camera" size={40} color="black"  />
            </View>
          <Text style={styles.namestyle1}>Anna Roy</Text>
          <Text style={styles.namestyle}>annaroy@gmail.com</Text>
          
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('ChangeEmail')
          }}>
          <Text  style={styles.SignUpButton} >Change Email Address</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('Changepassword')
          }} >
          <Text  style={styles.SignUpButton} >Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('Changephone')
          }} >
          <Text  style={styles.SignUpButton} >Change Phone Number</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>{
            props.navigation.navigate('Preferences')
          }}>
          <Text  style={styles.SignUpButton} >Set Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('Login')
          }} >
          <Text  style={styles.SignUpButton} >Logout</Text>
          </TouchableOpacity>
          </View>
      
      </View>
      </ScrollView>
      <View style={{flex:0.1,position:'absolute',bottom:0,right:0,left:0}} >
      <MenuBarComp navigation={props.navigation.navigate} />
      </View>
      </View>
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
        left:180,
        bottom:-5,
        width:'100%',
        height:'30%',
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

  }, namestyle1:{
    
    textAlign:'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom:10

  },
  
});

export default Account;
