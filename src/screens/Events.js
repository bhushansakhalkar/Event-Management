import React, { useEffect } from 'react';
import { LogBox,Text, StyleSheet,View, Image } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import { FontAwesome } from '@expo/vector-icons'; 
import MyButton from './MyButton';
import MyInputField from './MyInputField';
import EventComponent from './EventComponent';
import LogoComp from './LogoComponent';
import { SafeAreaView } from 'react-navigation';
import HeaderCompSec from './HeaderCompSecondary';
import MenuBarComp from './MenuBarComponent';


const data = [
  {
  id : '1',
  src : require('D:/React Native/Event-Management/assets/dance.jpg'),
  title:"Heidelberg Dance Club",
  date:"29/11/2021",
   type:"Personal",
   category:"Art", 
   fee:"Free", 
   location:"SRH Campus",
},

{
  id : '2',
  src : require('D:/React Native/Event-Management/assets/dance.jpg'),
  title:"Heidelberg Dance Club",
  date:"29/11/2021",
   type:"Personal",
   category:"Art", 
   fee:"Free", 
   location:"SRH Campus",
},
{
  id : '3',
  src : require('D:/React Native/Event-Management/assets/dance.jpg'),
  title:"Heidelberg Dance Club",
  date:"29/11/2021",
   type:"Personal",
   category:"Art", 
   fee:"Free", 
   location:"SRH Campus",
},
{
  id : '4 ',
  src : require('D:/React Native/Event-Management/assets/dance.jpg'),
  title:"Heidelberg Dance Club",
  date:"29/11/2021",
   type:"Personal",
   category:"Art", 
   fee:"Free", 
   location:"SRH Campus",
},
{
  id : '5 ',
  src : require('D:/React Native/Event-Management/assets/dance.jpg'),
  title:"Heidelberg Dance Club",
  date:"29/11/2021",
   type:"Personal",
   category:"Art", 
   fee:"Free", 
   location:"SRH Campus",
},
]



const Events = () => {
  return(
    <View style={styles.background}>
    <ScrollView style={{flex:0.9}}>
     <HeaderCompSec title="Events"/>
      <View >
        <View style={{alignSelf:'center',marginTop:-20}}>
              <MyButton name="                         Create New Events                        " />
              </View>
            <View style={styles.whiteBackground}>
              <View style={styles.searchWrapper}>
              <MyInputField placeholder='Search' />
              <FontAwesome name="search" style={styles.searchIcon} size={24} color="black" />
              </View>
              <View style={{paddingBottom:'40%'}}>
            {data.map((item) => {
              return(
              
              <EventComponent key={item.id} src={item.src} title={item.title} date={item.date} type={item.type} category={item.category} fee={item.fee} location={item.location} />  
              )
            })}
            </View>
              </View>  
              </View>
             
                </ScrollView>
                <View style={{flex:0.1,position:'absolute',bottom:0,right:0,left:0}} >
                <MenuBarComp />
                </View>
                </View>
  );
};

const styles = StyleSheet.create({
    background:{
      backgroundColor:'#F2F3FF',
      paddingBottom:'5%',
      flex:1
    },whiteBackground:{
      backgroundColor:'white',
      padding:4,
      borderRadius:20,
      borderWidth:1,
      margin:10
    },searchWrapper:{
      flexDirection:'row',
      marginBottom:'10%',
    },searchIcon:{
      position:'absolute',
      right:'2%',
      bottom:'15%',
    }
    
  
  
});

export default Events;
