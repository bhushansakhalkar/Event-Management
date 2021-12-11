import React from 'react';
import { Text, StyleSheet,View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import MyInputField from './MyInputField';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ImageNameComponent from './ImageNameComponent';
import CardComp from './CardComponent';

const Description = (props) => {
  return(
    <ScrollView> 
      <View style={styles.background}>
          <View style={styles.imageBackground}>
              <Image style={styles.image} source={require('D:/React Native/Event-Management/assets/dance2.jpg')}  />
              </View>
              <View style={{flexDirection:'row',backgroundColor:'white', paddingBottom:20,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
              <View style={{flexDirection:'row',left:0,marginLeft:'5%',marginTop:'2%'}}>
              <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          
                </View>
                <View style={{position:'absolute',right:0,marginRight:'5%',marginTop:'2%'}}>
                <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                    </View>
            </View>
          {/* <View style={styles.imageCircleBox}>
            <View style={styles.imageCircle}>
            <Image style={styles.image}
            source={require('D:/React Native/Event-Management/assets/pic.jpg')} />
            <AntDesign style={styles.Camera} name="camera" size={40} color="black"  />
            </View>
            </View> */}
          <View style={styles.whiteBox}>
        <View style={{flexDirection:'row',paddingBottom:'5%', borderBottomColor:'black',borderBottomWidth:1}}>
         <View style={{flexDirection:'column',}}>
         <Image style={styles.imageProfile}
            source={require('D:/React Native/Event-Management/assets/pic.jpg')} />
            <Text style={styles.name}>Jonny Bravo</Text>
         </View>
         <Text style={styles.title}>Title</Text>
         </View> 

         <View style={{flexDirection:'column',paddingBottom:'5%', borderBottomColor:'black',borderBottomWidth:1}}>
         <View style={{flexDirection:'row',marginLeft:'10%',marginTop:'5%'}}>
         <MaterialCommunityIcons name="calendar-month" size={24} color="black" />
            <Text style={styles.info}>Tuesday December 7 18:00 - 23:00 CET</Text>
         </View>
         <View style={{flexDirection:'row',marginLeft:'10%',marginTop:'5%'}}>
         <MaterialIcons name="location-on" size={24} color="black" />
            <Text style={styles.info}>Tuesday December 7 18:00 - 23:00 CET</Text>
         </View>
         <View style={{flexDirection:'row',marginLeft:'10%',marginTop:'5%'}}>
         <MaterialCommunityIcons name="ticket-confirmation" size={24} color="black" />
            <Text style={styles.info}>Tuesday December 7 18:00 - 23:00 CET</Text>
         </View>
         </View> 


         <View style={{flexDirection:'column',paddingBottom:'5%', borderBottomColor:'black',borderBottomWidth:1}}>
            <Text style={styles.about}>About</Text>
            <Text style={styles.aboutMain}>Some Random text to describe the event generated to show this Example 
                of how the text might look in the real app, this is a scrollable screen which.....</Text>
            <TouchableOpacity>
                <Text style={{textAlign:'right',marginTop:'2%',marginRight:'2%',fontStyle:'italic',}}>Show More</Text>
            </TouchableOpacity>
         </View> 

            {/* Map */}
         <View style={{flexDirection:'column',paddingBottom:'5%', borderBottomColor:'black',borderBottomWidth:1}}>
            <Text style={styles.about}>About</Text>
            <Text style={styles.aboutMain}>Some Random text to describe the event generated to show this Example 
                of how the text might look in the real app, this is a scrollable screen which.....</Text>
            <TouchableOpacity>
                <Text style={{textAlign:'right',marginTop:'2%',marginRight:'2%',fontStyle:'italic',}}>Show More</Text>
            </TouchableOpacity>
         </View> 


         <View style={{flexDirection:'column'}}>
         <Text style={styles.about}>Attendees</Text>
         <ScrollView horizontal="true" style={{flexDirection:'row',paddingBottom:'5%',marginTop:'2%', borderBottomColor:'black',borderBottomWidth:1}}>
            <ImageNameComponent />
            <ImageNameComponent />
            <ImageNameComponent />
            <ImageNameComponent />
            <ImageNameComponent />
            <ImageNameComponent />
            <ImageNameComponent />
            <ImageNameComponent />
         </ScrollView> 
         </View>
          
          
          <MyButton name='Register' />


          <View style={{marginTop:'10%'}} >
          <Text style={styles.about}>More Related Events</Text>
              <ScrollView horizontal={true}>
              <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
              <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
              <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
              <CardComp src={require('D:/React Native/Event-Management/assets/dance2.jpg')} eventName='Heidelberg Dance' eventLocation='Heidelberg' date='20 Nov' likes='120' createBy='Bhushan' />
              </ScrollView>
              </View>
          

          </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F2F3FF',
        paddingBottom:100,
    },
    whiteBox:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FFFFFF',
        marginTop:5,
        paddingBottom:50,
        borderRadius:20,
        
    },
    
    image:{
        height:180,
        marginTop:15,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    imageProfile:{
        height:80,
        marginLeft:'10%',
        width:80,
        borderRadius:40
    },
    name:{
        width:'100%',
        marginLeft:'10%'
    },
    title:{
        width:'100%',
        textAlign:'center',
        marginTop:'8%',
        fontSize:20
    },
    about:{
        marginTop:'2%',
        marginLeft:'5%',
        fontSize:15
    },
    aboutMain:{
        marginTop:'2%',
        marginLeft:'15%',
        fontSize:15
    },
    imageBackground:{
        backgroundColor:'#004DA9'
    },
    Camera:{
        position:'absolute',
        right:0,
        left:95,
        bottom:0,
        width:'100%',
        height:'25%',
    },
  
  
});

export default Description;