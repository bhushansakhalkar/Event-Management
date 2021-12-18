import React from 'react';
import { Text, StyleSheet,View, Image, Switch } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import Slider from '@react-native-community/slider';
import MyInputField from './MyInputField';
import DatePicker from './DatePicker';
import { useState } from 'react/cjs/react.development';
import SelectDropdown from 'react-native-select-dropdown'
import HeaderCompSec from './HeaderCompSecondary';

const CreateEvent = (props) => {
    const [age,setAge] = useState(1);
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const types = ["Art","Charity","Fashion","Family","Fairs","Festivals","Food and Drinks","Kids","Lectures","Music","NightLife","Online","Parties","Performing Arts","Personal","Sports","Visual Arts","Wine Tasting"];
  const categories = ["Social","Personal","Charity"];
  return(
    
      <View style={styles.background}>
          
          <ScrollView> 
          {/* <HeaderCompSec title='Create Event' /> */}
          <View style={styles.whiteBox}>
            <View>
            <TouchableOpacity 
                    style={styles.imageContainer}
                    >
                    <Text style={{position:'absolute',bottom:'35%',left:'35%'}}>Upload Picture</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image 
                    style={styles.image}
                    source={require('D:/React Native/Event-Management/assets/Woman4.jpg')}
                    />
                    <TextInput placeholder="Event Name" style={styles.textInput} />
                </View>
                <TextInput placeholder="Description" 
                style={styles.textDescription}
                 multiline={true}
                numberOfLines={6}
                />
          <MyInputField placeholder="Add Location" />
          <DatePicker />
          <MyInputField placeholder="Event Fee" />
          
          <View style={{width:'80%',marginLeft:'10%',marginTop:'10%'}}>
              <Text style={{textAlign:'center'}}>Please Select the Age Range</Text>
          <View style={{flexDirection:'row',marginTop:20}}>
          <Text style={{marginLeft:'5%'}}>{age}</Text>
          <Text style={{marginLeft:'85%'}}>100</Text>
          </View>
          <Slider 
          value={0}
          maximumValue = {100}
          minimumValue = {1}
          onValueChange={value => setAge("Upto "+parseInt(value)+' years old')}
          />
          </View>
          <View style={{flexDirection:'row',marginTop:'15%',marginLeft:'10%'}}>
          <Text style={{marginTop:'5%'}}>Mode Of Event</Text>
          <View style={{flexDirection:'column',marginLeft:'25%',}}>
          <Switch 
             trackColor={{ false: "#767577", true: "#81b0ff" }}
             thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
             ios_backgroundColor="#3e3e3e"
             onValueChange={toggleSwitch}
             value={isEnabled}
          />
          <View style={{flexDirection:'row',marginTop:'3%'}}>
          <Text style={{position:'absolute',left:30}}>Offline</Text>
          <Text style={{position:'absolute',right:30}} >Online</Text>
          </View>
          </View>
          </View>

          <View style={{width:'90%',marginTop:'30%',marginLeft:'5%'}}>
          <SelectDropdown
          buttonTextStyle={{fontSize:15}}
        defaultButtonText="Please Select an Event Type"
        buttonStyle={{backgroundColor:'white',height:40,width:'100%',textAlign:'center',borderWidth:1,borderStyle:'solid',borderColor:'black',borderRadius:40}}
        renderDropdownIcon = {()=>{
            return <AntDesign name="circledowno" size={20} color="black" />
        }}
	    data={types}
	    onSelect={(selectedItem, index) => {

	    }}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
    />
    </View>




        <View style={{width:'90%',marginTop:'10%',marginLeft:'5%'}}>
        <SelectDropdown 
        defaultButtonText="Please Select an Event Category"
	    data={categories}
        buttonTextStyle={{fontSize:15}}
        buttonStyle={{backgroundColor:'white',height:40, width:'100%',textAlign:'center',borderWidth:1,borderStyle:'solid',borderColor:'black',borderRadius:40}}
        renderDropdownIcon = {()=>{
            return <AntDesign name="circledowno" size={20} color="black" />
        }}
	    onSelect={(selectedItem, index) => {

	    }}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
    />
    </View>
         

          
          <TouchableOpacity style={{
              backgroundColor:'#FA841A',
              borderRadius:30,
              marginTop:70,
              right:0,
              left:180,
              paddingTop:10,
              width:'40%',
              height: 40,
              borderWidth:1,
          }}  onPress={()=>{alert("Event Created")
            props.navigation.navigate('Home')
          }} ><Text style={{textAlign:'center',color:'#FFFFFF',}}>Publish</Text></TouchableOpacity>
          
         
          </View>
          </ScrollView>
      </View>
     
  );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F2F3FF',
        paddingBottom:0,
    },
    whiteBox:{
        width:'90%',
        height:'100%',
        backgroundColor:'#FFFFFF',
        marginTop:20,
        paddingBottom:200,
        marginLeft:'5%',
        borderRadius:70,
        
    },
    imageCircleBox:{
        alignContent:'center',
        alignItems:'center',
        
    },
    imageContainer:{
        width:'100%',
        height:100,
        borderWidth: 1,
        borderRadius:30,
        backgroundColor:'#FFFFFF',
    },
    image:{
        marginTop:10,
        marginRight:10,
        width:90,
        height:90,
        borderRadius:60,
    },
    mainImage:{
        width:'100%',
        height:150,
        borderRadius:40,
    },
    textInput:{
        borderStyle:'solid',
        borderWidth:1,
        textAlign:'center',
        borderRadius:40,
        borderColor:'black',
        height:'50%',
        width:'65%',
        marginTop:'10%',

    },
    textDescription:{
        borderStyle:'solid',
        borderWidth:1,
        marginLeft:'5%',
        textAlign:'center',
        borderRadius:40,
        borderColor:'black',
        height:'20%',
        width:'90%',
        marginTop:'10%',

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

export default CreateEvent;