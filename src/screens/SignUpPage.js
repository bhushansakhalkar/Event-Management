import React from 'react';
import { Text, StyleSheet,View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import MyInputField from './MyInputField';

const SignUp = () => {
  return(
    <ScrollView> 
      <View style={styles.background}>
          <HeaderComp title='SignUp' />
          
          <View style={styles.imageCircleBox}>
            <View style={styles.imageCircle}>
            <Image style={styles.image}
            source={require('D:/React Native/Event-Management/assets/pic.jpg')} />
            <AntDesign style={styles.Camera} name="camera" size={40} color="black"  />
            </View>
            </View>
          <View style={styles.whiteBox}>
          <MyInputField placeholder="First Name" />
          <MyInputField placeholder="Last Name" />
          <MyInputField placeholder="Email Id" />
          <MyInputField placeholder="Date of Birth" />
          <MyInputField placeholder="Password" />
          <MyInputField placeholder="Confirm Password" />

          
          <MyButton name='Sign Up' />
          

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
        marginTop:30,
        paddingBottom:50,
        marginLeft:'5%',
        borderRadius:70,
        
    },
    imageCircleBox:{
        alignContent:'center',
        alignItems:'center',
        
    },
    imageCircle:{
        width:150,
        height:150,
        marginTop:-15,
        borderWidth: 1,
        borderRadius:80,
        backgroundColor:'#FFFFFF',
    },
    image:{
        width:148,
        height:148,
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
  
  
});

export default SignUp;