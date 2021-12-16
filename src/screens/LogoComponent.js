import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';
import { ceil } from 'react-native-reanimated';

const LogoComp = (props) => {
  return (
    <View style={styles.SignUpBox}>
        <Image style={styles.image}
        source={props.src} />
              <Text style={styles.SignUp}>{props.title}</Text>
          </View>
  )
};

const styles = StyleSheet.create({
    image:{
      marginLeft:'10%',
        width:80,
        height:80,
        borderRadius:50,
        marginTop:20,
        
    },
    SignUp: {
      marginLeft:'10%',
        fontSize: 30,
        height:'50%',
        marginTop:35,
        color:'white',
        
    
  },
  SignUpBox:{
        flexDirection:'row',
        height:130,
        backgroundColor:'#004DA9'
  },

})

export default LogoComp;
