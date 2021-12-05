import React from 'react';
import { Text, StyleSheet,View, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardComp from './CardComponent';
import LogoComp from './LogoComponent';
import MyButton from './MyButton';
const HomeScreen = () => {
  return (
  <View>
    <LogoComp src={require('D:/React Native/Event-Management/assets/Logo.png')} title="Rel-Event"/>
    <ScrollView>
  <Text style={styles.text}>Recommended Events For You</Text>
  <ScrollView horizontal={true}>
  <View style={styles.container}>
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </View>
  </ScrollView>

  <Text style={styles.text}>Because You Liked Dance Camp</Text>
  <ScrollView horizontal={true}>
  <View style={styles.container}>
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </View>
  </ScrollView>

  <Text style={styles.text}>Trending</Text>
  <ScrollView horizontal={true}>
  <View style={styles.container}>
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </View>
  </ScrollView>

  <Text style={styles.text}>Free Events</Text>
  <ScrollView horizontal={true}>
  <View style={styles.container}>
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </View>
  </ScrollView>

</ScrollView>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginLeft:'3%'
  },
  container:{
    flexDirection:'row',
    marginLeft:'0.5%',
    paddingBottom:30
  }
});

export default HomeScreen;
