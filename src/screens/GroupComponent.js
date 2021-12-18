import React from 'react';
import { Text, StyleSheet,View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const GroupsComponent = (props) => {
  return(
      <View style={styles.container}>
         <View >
         <Image style={styles.image}
         source = {props.src }/>
         </View>
         <TouchableOpacity style={styles.textContainer}>
         <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.info}>{props.info}</Text>
        </TouchableOpacity>
         <View style={styles.messages}>
             <Text style={{marginLeft:8,marginTop:3}}>{props.number}</Text>
         </View>
      </View>
      
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:'2%',
        paddingBottom:'5%',
        borderBottomWidth:1,
        borderBottomColor:'black',
    },
    image:{
        marginTop:'1%',
        marginLeft:'1%',
        height:70,
        width:70,
        borderRadius:60,
        borderWidth:1

    },textContainer:{
        flexDirection:'column',
        marginLeft:'1%',
        marginTop:'3%'
    },
    title:{
        fontSize:20,
    },
    info:{
        fontSize:12,
        marginTop:'5%',
    },
    messages:{
        borderRadius:80,
        borderWidth:1,
        width:'8%',
        height:'40%',
        position:'absolute',
        right:5,
        top:25
    }
  
});

export default GroupsComponent;