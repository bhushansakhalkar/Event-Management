import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';
import { ceil } from 'react-native-reanimated';

const HeaderCompSec = (props) => {
  return (
    <View style={styles.headerBox}>
              <Text style={styles.header}>{props.title}</Text>
          </View>
  )
};

const styles = StyleSheet.create({
  
    header: {
        fontSize: 30,
        height:'40%',
        color:'white',
        marginTop:5,
        
    
  },
  headerBox:{
    
        alignItems: 'center',
        justifyContent: 'center',
        height:120,
        backgroundColor:'#004DA9'
  },

})

export default HeaderCompSec;
