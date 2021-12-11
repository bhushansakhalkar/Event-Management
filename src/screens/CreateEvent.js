import React from 'react';
import { Text, StyleSheet,View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import MyInputField from './MyInputField';
import DatePicker from './DatePicker';

const CreateEvent = () => {
  return(
    
      <View style={styles.background}>
          
          <ScrollView> 
          <HeaderComp title='Create Event' />
          <View style={styles.whiteBox}>
            <View>
                <Image style={styles.mainImage}
                    source={require('D:/React Native/Event-Management/assets/Beach.png')}
                />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image 
                    style={styles.image}
                    source={require('D:/React Native/Event-Management/assets/pic.jpg')}
                    />
                    <TextInput placeholder="Event Name" style={styles.textInput} />
                </View>
                <TextInput placeholder="Description" 
                style={styles.textDescription}
                 multiline={true}
                numberOfLines={6}
                />
          <MyInputField placeholder="Add Location" />
          <DatePicker />
          <MyInputField placeholder="Event Fee" />
          <MyInputField placeholder="Date of Birth" />
          <MyInputField placeholder="Password" />
          <MyInputField placeholder="Confirm Password" />

          
          <MyButton name='Sign Up' />
          
         
          </View>
          </ScrollView>
      </View>
     
  );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F2F3FF',
        paddingBottom:0,
    },
    whiteBox:{
        width:'90%',
        height:'100%',
        backgroundColor:'#FFFFFF',
        marginTop:-10,
        paddingBottom:300,
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
        width:100,
        height:100,
        borderRadius:30,
    },
    mainImage:{
        width:'100%',
        height:150,
        borderRadius:40,
    },
    textInput:{
        borderStyle:'solid',
        borderWidth:1,
        textAlign:'center',
        borderRadius:40,
        borderColor:'black',
        height:'50%',
        width:'70%',
        marginTop:'10%',

    },
    textDescription:{
        borderStyle:'solid',
        borderWidth:1,
        marginLeft:'5%',
        textAlign:'center',
        borderRadius:40,
        borderColor:'black',
        height:'20%',
        width:'90%',
        marginTop:'10%',

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

export default CreateEvent;