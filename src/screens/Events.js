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
import EventsData from '../../assets/data/Events';




const Events = (props,{navigation }) => {
  return(
    <View style={styles.background}>
    <ScrollView style={{flex:0.9}}>
     {/* <HeaderComp title="Events"/> */}
      <View >
        <View style={{alignSelf:'center',marginTop:10}}>
              <MyButton navigation={props.navigation.navigate} destination={"CreateEvent"} name="                    Create New Events                      " />
              </View>
            <View style={styles.whiteBackground}>
              <View style={styles.searchWrapper}>
              <MyInputField placeholder='Search' />
              <FontAwesome name="search" style={styles.searchIcon} size={24} color="black" />
              </View>
              <View style={{paddingBottom:'40%'}}>
            {EventsData.map((item) => {
              return(
              
              <EventComponent navigate={props.navigation.navigate} destination={"Description"} object={item} key={item.id} src={item.src} title={item.eventName} date={item.date} type={item.type} category={item.category} likes={item.likes} fee={item.price} location={item.eventLocation} />  
              )
            })}
            </View>
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
      paddingBottom:'2%',
      flex:1,
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
