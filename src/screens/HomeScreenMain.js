import React from 'react';
import { Text, StyleSheet,View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardComp from './CardComponent';
import LogoComp from './LogoComponent';
import MenuBarComp from './MenuBarComponent';
import MyButton from './MyButton';
import { Dimensions } from 'react-native';
import MySearch from "./SearchComponent";

const HomeScreenMain = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
  <View style={{flex:1}}>  
     <ScrollView style={{flex:0.8,height:height-200}} >
     <LogoComp src={require('D:/React/Event-Management/assets/pic.jpg')} title="Rel-Event"/>


  <Text style={styles.text}>Recommended Events For You</Text>
  


  <ScrollView horizontal={true}>
  <View style={styles.container}>
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </View>
  </ScrollView> 

  <Text style={styles.text}>Because You Liked Dance Camp</Text>
  <ScrollView horizontal={true}>
  <View style={styles.container}>
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </View>
  </ScrollView>

  <Text style={styles.text}>Trending</Text>
  <ScrollView horizontal={true}>
  <View style={styles.container}>
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </View>
  </ScrollView>

  <Text style={styles.text}>Free Events</Text>
  <ScrollView horizontal={true}>
  <View style={styles.container}>
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React/Event-Management/assets/pic.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </View>
  </ScrollView>
  
  
 
</ScrollView>

<View style={styles.footer} >
    <MenuBarComp  />
    </View>
{/* <Animated.View ref="stickyHeader" style={[styles.stickyStuff, {top: stickySegmentControlX}]}>
    <MenuBarComp  />
     </Animated.View> */}



  </View>
  )
};

const styles = StyleSheet.create({
    image: {
        height: "50%",
        width: "100%",
      },
  text: {
    fontSize: 20,
    marginLeft:'3%'
  },
  container:{
    flex:0.9,
    flexDirection:'row',
    marginLeft:'0.5%',
    paddingBottom:30
  },
  footer: {
    flex:0.2,
    height:200
  },
});

export default HomeScreenMain;