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
import Favs from '../../assets/data/Favourtes';




const Favorites = (props,{navigation}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const numColumns=Math.ceil(Favs.length / 3);
  return (
    
  <View style={styles.page}>
       
       <View  style={{flex:0.9,}}>
{/*         
       <HeaderComp  title="Favourites"/> */}
       
       
  <Text style={styles.text}>Your Favourite Events</Text>
  <View style={styles.container}> 
    
    <FlatList 
           
        data={Favs}
        numColumns = {numColumns}
        renderItem={({item})=>{
          console.log(item)
          return(
            <View style={{flexDirection:'row'}}>
            <CardCompSmall navigate={props.navigation.navigate} destination={"Description"} object={item} id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} image={item.image} price={item.price} />
            </View>
          )
        }}
        keyExtractor={Favs => Favs.id}
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
