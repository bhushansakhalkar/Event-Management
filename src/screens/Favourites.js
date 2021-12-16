import React from 'react';
import { Text, StyleSheet,View, TouchableOpacity,Image } from 'react-native';
import { FlatList,ScrollView } from 'react-native-gesture-handler';
import CardComp from './CardComponent';
import LogoComp from './LogoComponent';
import MenuBarComp from './MenuBarComponent';
import MyButton from './MyButton';
import { Dimensions } from 'react-native';
import EventComponent from './EventComponent';
import HeaderComp from './HeaderComponent';
import CardCompSmall from './CardComponentSmall';
import HeaderCompSec from './HeaderCompSecondary';



const recommended = [
  {
    id:'1',
    src:require('D:/React Native/Event-Management/assets/dance2.jpg'),
     eventName:'Heidelberg Dance',
      eventLocation:'Heidelberg',
       date:'20 Nov',
        likes:'120',
         createBy:'Bhushan Sakhalkar',
         price:'Free',
         image:require('D:/React Native/Event-Management/assets/pic.jpg'),
         about:"Some dummy text to check if the about function works and how well it works, also writing so much so that the box is filled with data and it doesn't look weird, ofcourse I need to change this when I present it during exam, and incase if I do not remember, sorry in advance",
         attendes:[
          {
            id:1,
            image:require('D:/React Native/Event-Management/assets/pic.jpg'),
            names:"John Abra"
          },
          {
            id:2,
            image:require('D:/React Native/Event-Management/assets/pic.jpg'),
            names:"Jonny Sins"
          },
          {
            id:3,
            image:require('D:/React Native/Event-Management/assets/pic.jpg'),
            names:"Kabir Singh"
          },
          {
            id:4,
            image:require('D:/React Native/Event-Management/assets/pic.jpg'),
            names:"Babu Bhaiya"
          },
          {
            id:5,
            image:require('D:/React Native/Event-Management/assets/pic.jpg'),
            names:"Vasooli Bhai"
          },
        ]
    },
  {
    id:'2',
    src:require('D:/React Native/Event-Management/assets/dance2.jpg'),
     eventName:'Heidelberg Dance',
      eventLocation:'Heidelberg',
       date:'20 Nov',
        likes:'120',
         createBy:'Bhushan Sakhalkar',
         price:'100$',
         image:require('D:/React Native/Event-Management/assets/pic.jpg'),
         about:"Some dummy text to check if the about function works and how well it works, also writing so much so that the box is filled with data and it doesn't look weird, ofcourse I need to change this when I present it during exam, and incase if I do not remember, sorry in advance",
        attendes:[
            {
              id:1,
              image:require('D:/React Native/Event-Management/assets/pic.jpg'),
              names:"John Abra"
            },
            {
              id:2,
              image:require('D:/React Native/Event-Management/assets/pic.jpg'),
              names:"Jonny Sins"
            },
            {
              id:3,
              image:require('D:/React Native/Event-Management/assets/pic.jpg'),
              names:"Kabir Singh"
            },
            {
              id:4,
              image:require('D:/React Native/Event-Management/assets/pic.jpg'),
              names:"Babu Bhaiya"
            },
            {
              id:5,
              image:require('D:/React Native/Event-Management/assets/pic.jpg'),
              names:"Vasooli Bhai"
            },
          ]
          
        
  }
]

const Favorites = (props,{navigation}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
 
  return (
    
  <View style={styles.page}>
       
       <View  style={{flex:0.9,}}>
{/*         
       <HeaderComp  title="Favourites"/> */}
       
       
  <Text style={styles.text}>Your Favourite Events</Text>
  <View style={styles.container}> 
    
    <FlatList 
           
        data={recommended}
        renderItem={({item})=>{
          console.log(item)
          return(
            <View style={{flexDirection:'row'}}>
            <CardCompSmall navigate={props.navigation.navigate} destination={"Description"} object={item} id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} image={item.image} price={item.price} />
            <CardCompSmall navigate={props.navigation.navigate} destination={"Description"} object={item} id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} image={item.image} price={item.price} />
            </View>
          )
        }}
        keyExtractor={recommended => recommended.id}
      />
  
  </View>
 
   
  
    </View>
    <View style={{flex:0.1,position:'absolute',bottom:0,right:0,left:0}} >
    <MenuBarComp navigation={props.navigation.navigate} />
    </View>
    


  </View>
 
  )
};

const styles = StyleSheet.create({
  page:{
    flex:1,
    paddingBottom:50
  },
    text: {
    fontSize: 20,
    marginLeft:'3%'
  },
  container:{
    flexDirection:'row',
    marginLeft:'1%',
  },
});

export default Favorites;
