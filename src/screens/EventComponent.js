import React,{useState} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
const EventComponent = (props) => {
  const [color, setColor] = useState('black');
  const [pressed,setPressed] =useState(!pressed)
  const [likes, setLikes] = useState(props.likes)
  return (
    <View>
          <View style={styles.container}>
            
            <Image style={styles.image} source={props.src}/>
            <View style={styles.textContainer}>
            <TouchableOpacity 
             onPress={()=>{
              props.navigate(props.destination,{item:props.object})
            }}
            >
                <Text  style={styles.header} >{props.title}</Text>
                <Text  style={styles.text} >{"Date : "+props.date}</Text>
                <Text  style={styles.text} >{"Event Type : "+props.type}</Text>
                <Text  style={styles.text} >{"Event Category : "+props.category}</Text>
                <Text  style={styles.text} >{"Fee : "+props.fee}</Text>
                <Text  style={styles.text} >{"Location : "+props.location}</Text>
               </TouchableOpacity> 
                <View style={styles.rating}>
            
              <Text style={{paddingRight:5}}>Rating </Text>
          <AntDesign name="star" size={20} color="black" />
          <AntDesign name="star" size={20} color="black" />
          <AntDesign name="star" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          
          </View>
          
          </View>
          <TouchableOpacity style={{flexDirection:'column'}} onPress={()=>{
          setPressed(!pressed)
          setColor(pressed?'red':'black')
          setLikes(pressed?likes+1:likes-1)
        }} 
          
          >
          <AntDesign style={styles.heart} name="hearto" size={24} color={color} />
          <Text style={styles.heart1}>{likes}</Text>
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
    height:200,
    
},
image:{
  flex:1.4,
    height:190,
    width:100,
    marginLeft:'2%',
    marginRight:'2%'
},
textContainer:{
    flexDirection:'column',
    flex:2,
},
   header:{
        fontSize:16,
   },
   text:{
        fontSize:12,
        marginTop:'3%'
   },
   heart:{
     flex:0.6,
    marginTop:30,
    marginRight:10
   },
   heart1:{
    position:'absolute', 
    top:60
  },
   rating:{
    flexDirection:'row',
    marginTop:'5%',
}
})

export default EventComponent;
