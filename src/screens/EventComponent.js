import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
const EventComponent = (props) => {
  return (
    <View >
          <View style={styles.container}>
            
            <Image style={styles.image} source={props.src}/>
            <View style={styles.textContainer}>
            <TouchableOpacity>
                <Text  style={styles.header} >{props.title}</Text>
                <Text  style={styles.text} >{"Date : "+props.date}</Text>
                <Text  style={styles.text} >{"Event Type : "+props.type}</Text>
                <Text  style={styles.text} >{"Event Category : "+props.category}</Text>
                <Text  style={styles.text} >{"Fee : "+props.fee}</Text>
                <Text  style={styles.text} >{"Location : "+props.location}</Text>
               </TouchableOpacity> 
                <View style={styles.rating}>
            
              <Text style={{paddingRight:5}}>Rating </Text>
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          
          </View>
          
          </View>
          <TouchableOpacity style={{flexDirection:'column'}}>
          <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
          </TouchableOpacity>

         
          
          </View>
          <View
            style={{
              marginBottom:'5%',
                borderColor: 'black',
                borderWidth: 1,
                borderStyle:'solid',
            }}
            />
          </View>
  )
};

const styles = StyleSheet.create({
   container:{
    flexDirection:'row',
    width:'100%',
    height:220,
    
},
image:{
  flex:0.9,
    height:180,
    width:100,
    marginTop:'1%',
    marginLeft:'2%',
    marginRight:'2%'
},
textContainer:{
    flexDirection:'column',
    flex:2,
},
   header:{
        fontSize:18,
   },
   text:{
        fontSize:12,
        marginTop:'3%'
   },
   heart:{
     flex:1,
    marginTop:30,
    marginRight:10
   },
   rating:{
    flexDirection:'row',
    marginTop:'5%',
}
})

export default EventComponent;
