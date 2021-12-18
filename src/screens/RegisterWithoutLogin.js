import React,{useState} from 'react';
import { Text, StyleSheet,View, Image,Modal,TouchableOpacity } from 'react-native';
import { ScrollView, TextInput,  } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import MyInputField from './MyInputField';

const RegisterWithoutLogin = (props,{navigation}) => {
    const [show, showBox]  = useState(false)
    return(
    <ScrollView> 
      <View style={styles.background}>
          {/* <HeaderComp title='SignUp' /> */}
          <Modal
    
    transparent={true}
    visible={show}
    >
       <TouchableOpacity style={{backgroundColor:'#000000aa',height:'100%'}} onPress={()=>{showBox(false)}} >
            <View style={{backgroundColor:'#ffffff',marginTop:300,height:'20%',  }}  >
            <View style={{flexDirection:'row',marginLeft:'10%',marginTop:'10%'}}>
            <AntDesign name="checkcircle" size={25} color="#FA841A" />
      <Text style={{textAlign:'center',fontSize:18,marginLeft:'2%',flexWrap:'wrap',flexShrink:1}} >Your Ticket Has been sent to your above mentioned Email Address</Text>
      </View>
      <TouchableOpacity onPress={()=>{
        showBox(false)
        props.navigation.navigate("Explore")
        }} >
      <Text style={{textAlign:"center",marginTop:20,fontSize:20,textDecorationLine:'underline',color:'blue'}}>OK</Text>
      
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
    </Modal>
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
          <MyInputField placeholder="Phone Number" />
          <TouchableOpacity onPress={()=>{
              showBox(true)
          }}>
            <View style={styles.SignUpButtonBox}>
          <Text style={styles.SignUpButton} >Register Without Log In</Text>
          </View>
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
        marginTop:30,
        paddingBottom:50,
        marginLeft:'5%',
        borderRadius:70,
        
    },
    imageCircleBox:{
        alignContent:'center',
        alignItems:'center',
        
    },
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

export default RegisterWithoutLogin;