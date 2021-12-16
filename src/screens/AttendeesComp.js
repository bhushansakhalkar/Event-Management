import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';

const AttendeesComp = (props) => {
  return (
    <View style={styles.addmemflex2}>
    <Image
      style={styles.attendees_image}
      source={props.src}
    />
    <Text style={styles.attendees}>{props.name}</Text>
    <Text style={styles.attendeesEmail}>{props.email}</Text>
    
  </View>
  
  )
};

const styles = StyleSheet.create({
    addmemflex2: {
        flexDirection: "row",
          display: "flex",
          marginLeft: "10%",
          marginTop: "8%"
          
    
      },
      attendees_image: {
        width: 50,
        height: 50,
        borderRadius: 80,
      },
      attendees:{
      
        textAlign: 'center',
        marginTop: '2%',
        marginLeft: '3%'
   
   
     },
     attendeesEmail:{
      
      marginTop: '10%',
      width: '150%',
      marginLeft: '-52%'
     }
})

export default AttendeesComp;