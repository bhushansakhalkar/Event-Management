import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const HeaderComp = (props) => {
  return (
    <View style={styles.SignUpBox}>
              <Text style={styles.SignUp}>{props.title}</Text>
          </View>
  )
};

const styles = StyleSheet.create({
    SignUp: {
        fontSize: 40,
        height:'50%',
        color:'white',
        marginTop:25,
    
  },
  SignUpBox:{
        alignContent:'center',
        alignItems:'center',
        height:'20%',
        backgroundColor:'#004DA9'
  },

})

export default HeaderComp;
