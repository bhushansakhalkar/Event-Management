import React from 'react';
import { Text, StyleSheet,View, } from 'react-native';
import { FlatList,ScrollView } from 'react-native-gesture-handler';
import CardComp from './CardComponent';
import LogoComp from './LogoComponent';
import MenuBarComp from './MenuBarComponent';
import MyButton from './MyButton';
import { Dimensions } from 'react-native';
import EventComponent from './EventComponent';


const recommended = [
  {
    id:'1',
    src:require('D:/React Native/Event-Management/assets/dance2.jpg'),
     eventName:'Heidelberg Dance',
      eventLocation:'Heidelberg',
       date:'20 Nov',
        likes:'120',
         createBy:'Bhushan'
  },
  {
    id:'2',
    src:require('D:/React Native/Event-Management/assets/dance2.jpg'),
     eventName:'Heidelberg Dance',
      eventLocation:'Heidelberg',
       date:'20 Nov',
        likes:'120',
         createBy:'Bhushan'
  }
]


const Home = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
 
  return (
    
  <View style={styles.page}>
       
       <ScrollView  style={{flex:0.9,}}>
        
       <LogoComp src={require('D:/React Native/Event-Management/assets/Logo.png')} title="Rel-Event"/>
       
       
  <Text style={styles.text}>Recommended Events For You</Text>
  <View style={styles.container}> 
    
    <FlatList horizontal={true}
           
        data={recommended}
        renderItem={({item})=>{
          return(
            
            <CardComp id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} />
            
          )
        }}
        keyExtractor={recommended => recommended.id}
      />
  
  </View>
 
   <Text style={styles.text}>Because You Liked Dance Camp</Text>
   <View style={styles.container}>
  <ScrollView horizontal={true}>
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  </ScrollView>
  </View>

  <Text style={styles.text}>Because You Liked Dance Camp</Text>
   <View style={styles.container}>
  <ScrollView horizontal={true}>
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <MyButton name="-->" />
  </ScrollView>
  </View>

  <Text style={styles.text}>Because You Liked Dance Camp</Text>
   <View style={styles.container}>
  <ScrollView horizontal={true}>
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
  </ScrollView>
  </View>
  
  
    </ScrollView>
    <View style={{flex:0.1,position:'absolute',bottom:0,right:0,left:0}} >
    <MenuBarComp />
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
    marginLeft:'0.5%',
  },
});

export default Home;
