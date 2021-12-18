import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';



const CardCompSmall = (props) => {
  const [color, setColor] = useState('white');

  return (
    <View style={styles.card}>
    <Image style={styles.image}
            source={props.src} />
    
      <View style={{flexDirection:'row'}}>
      <View style={styles.cardText}>    
        <TouchableOpacity 
          onPress={()=>{
            props.navigate(props.destination,{item:props.object})
          }}
        >
        <Text style={styles.cardevent}>{props.eventName}</Text>
        <Text style={styles.carddesc}>{props.eventLocation}</Text>
        <Text style={styles.cardcreated}>{"Created By "+props.createBy}</Text>
        </TouchableOpacity>
      </View>
        
    <View style={{flexDirection:"column",right:0,position:"absolute"}}>
      <View style={styles.circle}>
        <Text style={styles.datetext}>{props.date}</Text>
      </View>
      <View style={{top:20,flexDirection:'column'}} >
        <TouchableOpacity onPress={()=>{
          setColor('black')
        }}>
         <FontAwesome style={{marginRight:'2%',marginRight:10,}} name="heart" size={20} color="black" />   
        </TouchableOpacity>
        <Text style={{marginLeft:'10%'}}>{props.likes}</Text>
      </View>
      </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 200,
    flexDirection: "column",
    marginLeft:'1%',
    marginTop:'5%',
   marginHorizontal: 10,
   backgroundColor:'#FFFFFF',
   marginBottom: 17.5,
   borderColor: '#FFFFFF',
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.3,
   shadowRadius: 5,
   elevation: 5,
   borderRadius: 10
  },
  image: {
    width:'100%',
    height:150,
    flex: 1,
    resizeMode: 'cover',
    borderRadius:2,
  },
  cardevent: {
    
     
    fontSize:15,
    marginTop:'5%',
     
  },
  heart2:{
    backgroundColor:'black',
    color:'white'
  },
  carddesc:{
    fontSize:10,
    marginTop:'5%',
     

  },
  cardcreated:{
    fontSize:10,
    opacity:0.5,
    marginTop:'5%',
},
  cardText:{
    flexDirection:'column',
    marginLeft:'2%',
  },
  circle: {
    width: 70,
    height: 70,
    top:-60,
    right:0,
    position:"absolute",
    borderRadius: 100/2,
    backgroundColor: '#FA841A',
  },
  datetext: {
      fontSize: 16,
      textAlign:'center',
      alignSelf:'center',
      marginTop:'30%',
      color: 'white'
  },
  heart: {
        marginRight:'2%',
        marginRight:10
  },
});

export default CardCompSmall;