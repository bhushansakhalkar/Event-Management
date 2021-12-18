import React from 'react';
import { Text, StyleSheet,View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const SearchGroupComponent = (props) => {
  return(
      <View style={styles.container}>
         <View >
         <Image style={styles.image}
         source = {props.src}/>
         </View>
        
         <View style={styles.textContainer}>
         <Text style={styles.title}>{props.name}</Text>
         <Text style={styles.info}>{props.email}</Text>


        </View>
        <View  style={styles.arrow}>
        <MaterialIcons name="navigate-next" size={24} color="black" />
         </View>
         
      </View>
      
  );
};

const styles = StyleSheet.create({
    arrow:{
        position:'absolute',
        right:10,
        top:20
    },
    container:{
        flexDirection:'row',
        marginTop:'8%',
        width:'100%',
        paddingBottom:'5%',
        borderBottomWidth:1,
        borderBottomColor:'black',
       
    },
    image:{
        marginTop:'1%',
        marginLeft:'12%',
        
        height:70,
        width:70,
        borderRadius:60,
        borderWidth:1

    },textContainer:{
        flexDirection:'column',
        marginLeft:'-3%',
        marginTop:'3%'
    },
    title:{
        fontSize:15,
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
        marginTop:'5%',
        marginLeft:'5%',
    }
  
});

export default SearchGroupComponent;