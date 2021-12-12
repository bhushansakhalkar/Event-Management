
   
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
        width:80,
        height:80,
        borderRadius:50,
        marginTop:5,
        marginRight:'5%'
    },
    SignUp: {
        fontSize: 30,
        height:'50%',

        color:'white',
        marginTop:25,
        
    
  },
  SignUpBox:{
        flexDirection:'row',
        alignItems: 'center',
        // flex: 1,
        justifyContent: 'center',
        height:150,
        backgroundColor:'#004DA9'
  },

})

export default LogoComp;
