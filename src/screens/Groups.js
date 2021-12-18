import React from 'react';
import { Text, StyleSheet,View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import MyInputField from './MyInputField';
import GroupsComponent from './GroupComponent';
import HeaderCompSec from './HeaderCompSecondary';
import MenuBarComp from './MenuBarComponent';
import groups2 from '../../assets/data/Groups2';
const Groups = (props) => {
  return(
    <View style={styles.background}>
    <ScrollView style={{flex:0.9}}> 
{/*       
      <HeaderComp title="Groups" /> */}
          <View style={styles.whiteBox}>
            <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
            props.navigation.navigate('CreateGroup')
          }}>
          <Ionicons name="create-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Create group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
            props.navigation.navigate('SearchGroup')
          }}>
            <Ionicons name="search" size={24} color="white" />
            <Text style={styles.buttonText}>Search Groups</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:'5%'}} >
            {groups2.map((item)=>{
                return(
                        <GroupsComponent key={item.id} src={item.src} number={item.number} title={item.title} info={item.info}  />
                    
                )
            }
            
            )}
              </View>

          

          </View>
     
      </ScrollView>
       <View style={{flex:0.1,position:'absolute',bottom:0,right:0,left:0}} >
       <MenuBarComp navigation={props.navigation.navigate} />
       </View>
       </View>
  );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F2F3FF',
        paddingBottom:50,
        height:'100%',
        flex:1,
    },
    whiteBox:{
        width:'95%',
        backgroundColor:'#FFFFFF',
        marginTop:50,
        paddingBottom:50,
        marginLeft:'2%',
        borderRadius:70,
        
    },
    buttonContainer:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#FA841A',
        borderRadius:40,
        marginLeft:'12%',
        width:'80%',
        padding:'2%'
    },
    buttonText:{
        paddingLeft:'2%',
        paddingTop:'1%',
        color:'white'
    },
    header: {
        fontSize: 30,
        height:'50%',
        color:'white',
        marginTop:5,
        
    
  },
  headerBox:{
    
        alignItems: 'center',
        justifyContent: 'center',
        height:'40%',
        backgroundColor:'#004DA9'
  },
    
  
});

export default Groups;