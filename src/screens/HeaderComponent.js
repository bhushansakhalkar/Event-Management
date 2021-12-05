import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';
import { ceil } from 'react-native-reanimated';

const HeaderComp = (props) => {
  return (
    <View style={styles.SignUpBox}>
              <Text style={styles.SignUp}>{props.title}</Text>
          </View>
  )
};

const styles = StyleSheet.create({
  
    SignUp: {
        fontSize: 30,
        height:'50%',
        color:'white',
        marginTop:25,
        
    
  },
  SignUpBox:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        height:150,
        backgroundColor:'#004DA9'
  },

})

export default HeaderComp;
