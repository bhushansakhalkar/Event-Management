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
        fontSize: 30,
        height:'50%',
        color:'white',
        marginTop:30,
    
  },
  SignUpBox:{
        alignContent:'center',
        alignItems:'center',
        height:'15%',
        backgroundColor:'#004DA9'
  },

})

export default HeaderComp;
