import React,{useState} from 'react';
import { Text, StyleSheet,View, TouchableOpacity,Image, ImageBackground,TextInput,KeyboardAvoidingView,Modal } from 'react-native';
import { FlatList,ScrollView } from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box'
import CardComp from './CardComponent';
import LogoComp from './LogoComponent';
import MenuBarComp from './MenuBarComponent';
import Slider from '@react-native-community/slider';
import MyButton from './MyButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import locations from '../../assets/data/Locations';
import recommended from '../../assets/data/Recommended';
import AutoComplete from './AutoComplete';
import Because from '../../assets/data/BecauseYouLiked';
import Free from '../../assets/data/Free';
import { MaterialIcons } from '@expo/vector-icons';
import AutoCompleteLocation from './AutoCompleteLocation';
import Trending from '../../assets/data/Trending';
import MenuBarCompNL from './MenuBarComponentNotLogin';
import Social from '../../assets/data/Social';
import Volunteering from '../../assets/data/Volunteering';
import Personal from '../../assets/data/Personal';

const Explore = (props,{navigation}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [likes, setLikes] = useState(recommended.likes)
  const [menu, showMenu] = useState(false)
  const [age,setAge] = useState(1);
  const [distance,setDistance] = useState(1);
  const [price,setPrice] = useState(1);
  const [isChecked ,setChecked] = useState(false)
  const cats = [
    {label:'Social',value:'Social'},
    {label:'Personal',value:'Personal'},
    {label:'Charity',value:'Charity'},
  ]  

  return (
    
  <KeyboardAvoidingView style={styles.page}>
       
       <ScrollView 
       contentContainerStyle={{paddingBottom:70}}
       style={{flexGrow:1,flex:1}}>
        
       {/* <LogoComp src={require('D:/React Native/Event-Management/assets/Logo.png')} title="Rel-Event"/> */}
      
       <Modal
            transparent={true}
            visible={menu}
          >
              <TouchableOpacity style={{backgroundColor:'#000000aa',flex:1}} onPress={()=>{
                showMenu(false)
              }}>
                <View style={{backgroundColor:'#ffffff',position:'absolute',bottom:0,left:5,right:5,borderRadius:30,paddingBottom:20}}  >
             <View style={{borderBottomWidth:1,marginTop:30,paddingBottom:15}}>
             <Text style={{marginLeft:10}}>Age</Text>
             <Slider 
              value={0}
              maximumValue = {70}
              minimumValue = {1}
              onValueChange={value => setAge("Upto "+parseInt(value)+' years old')}
          />
            <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:'5%'}}>{age}</Text>
          <Text style={{marginLeft:'85%'}}>70</Text>
          </View>

          <Text style={{marginLeft:10}}>Distance</Text>
             <Slider 
              value={0}
              maximumValue = {100}
              minimumValue = {1}
              onValueChange={value => setDistance("Upto "+parseInt(value)+' kms')}
          />
            <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:'5%'}}>{distance}</Text>
          <Text style={{marginLeft:'83%'}}>100</Text>
          </View>

          <Text style={{marginLeft:10}}>Price</Text>
             <Slider 
              value={0}
              maximumValue = {100}
              minimumValue = {1}
              onValueChange={value => setPrice("Upto "+parseInt(value)+' Euros')}
          />
            <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:'5%'}}>{price}</Text>
          <Text style={{marginLeft:'81%'}}>1000</Text>
          </View>
               </View>
              <View style={{borderBottomWidth:1,paddingBottom:15}}>
                  <View style={styles.SignUpButtonBox}>
                    <Text style={styles.SignUpButton}>Sort in ascending
                    <MaterialCommunityIcons name="sort-alphabetical-ascending" size={24} color="white" />
                    </Text>
                    </View>

                    <View style={styles.SignUpButtonBox}>
                    <Text style={styles.SignUpButton}>Sort in descending
                    <MaterialCommunityIcons name="sort-alphabetical-descending" size={24} color="white" />
                    </Text>
                    </View>
                </View>

                <View style={{marginTop:5,marginLeft:10}}>
                  <View style={{flexDirection:'row'}}>
                    <CheckBox
                    onClick={()=>{
                     setChecked( 
                          !isChecked)
                    }}
                    isChecked={isChecked}/>
                    <Text>Social</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <CheckBox
                    onClick={()=>{
                     setChecked( 
                          !isChecked)
                    }}
                    isChecked={isChecked}/>
                    <Text>Personal</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <CheckBox
                    onClick={()=>{
                     setChecked( 
                          !isChecked)
                    }}
                    isChecked={isChecked}/>
                    <Text>Charity</Text>
                    </View>
                  </View>
                      <TouchableOpacity style={{marginTop:10,left:200}} onPress={()=>{
                        showMenu(false)
                      }}>
                        <Text style={{backgroundColor:'#FA841A',
                        color:'#FFFFFF',
                        borderRadius:30,
                        textAlign:'center',
                       paddingTop:5,
                        width:'40%',
                        height: 30,
                        borderWidth:1,}}>Apply</Text>
                        </TouchableOpacity>
                </View>
              </TouchableOpacity>
              </Modal>



       <ImageBackground
          style={styles.image}
          source={require("D:/React Native/Event-Management/assets/Homebg.jpg")}
        ></ImageBackground>

        <View style={styles.search}>
       <AutoComplete name={recommended} placeholder="Search Events" />

      <View style={{marginTop:8,marginLeft:5}}>
        <AntDesign name="search1" size={20} color="white" />
      </View>
        </View>


        {/* <View style={{flexDirection: "row",
    position:'absolute',
    top: 170,
    left:50,}}>
          <TouchableOpacity style={{marginRight:20}}>
          <MyButton name="Create Event" navigation={props.navigation.navigate} destination="CreateEvent" />
          </TouchableOpacity>
          <TouchableOpacity>
          <MyButton name="Create Group" destination="CreateGroup" navigation={props.navigation.navigate} />
          </TouchableOpacity>
        </View> */}
        <View>
        <View style={{marginTop:20,marginLeft:10,flexDirection:'row'}}>
          
         <Ionicons name="md-location" size={26} color="#FA841A" style={{position:'absolute',opacity:1,left:10,top:3}} />
         <AutoCompleteLocation name={locations} placeholder="Enter your Location" />
        </View>
          <TouchableOpacity style={styles.location2}>
            <Ionicons name="ios-locate" size={20} color="#FA841A" />
            <Text style={{fontSize:15,marginLeft:5,textDecorationLine: 'underline'}}>
            
            Use my current location</Text>
          </TouchableOpacity>
        </View>

        
        {/* <View>
          <Text style={styles.welcome}>Good Morning Anna !</Text>
        </View> */}

        <View style={{marginBottom:-10,marginTop:20}}>
          <ScrollView horizontal={true}>
            <TouchableOpacity >
            <Text style={styles.cardBox}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:15}}>
            <Text style={styles.cardBox}>Tomorrow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:15}}>
            <Text style={styles.cardBox}>Online</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:15}}>
            <Text style={styles.cardBox}>Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:15}}>
            <Text style={styles.cardBox}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:15}}>
            <Text style={styles.cardBox}>Charity</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
    <View style={{flexDirection:'row'}}>
        
  <Text style={styles.text}>Trending</Text>
  <View style={{marginLeft:'65%',marginTop:'5%'}}>
        <TouchableOpacity onPress={()=>{showMenu(true)}}>
        <MaterialIcons name="filter-alt" size={30} color="black" />
        <Text>Filter</Text>
        </TouchableOpacity>
        </View>
  </View>
  <View style={styles.container}> 
    
    <FlatList horizontal={true}
           
        data={Trending}
        renderItem={({item})=>{
          return(
            
            <CardComp navigate={props.navigation.navigate} destination={"DescriptionNL"} object={item} id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} image={item.image} price={item.price} />
          
          )
        }}
        keyExtractor={Trending => Trending.id}
      />
  
  </View>
 
  <Text style={styles.text}>Social</Text>
  <View style={styles.container}> 
    
    <FlatList horizontal={true}
           
        data={Social}
        renderItem={({item})=>{
          console.log(item)
          return(
            
            <CardComp navigate={props.navigation.navigate} destination={"DescriptionNL"} object={item} id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} image={item.image} price={item.price} />
          
          )
        }}
        keyExtractor={Social => Social.id}
      />
  
  </View><Text style={styles.text}>Personal</Text>
  <View style={styles.container}> 
    
    <FlatList horizontal={true}
           
        data={Personal}
        renderItem={({item})=>{
          console.log(item)
          return(
            
            <CardComp navigate={props.navigation.navigate} destination={"DescriptionNL"} object={item} id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} image={item.image} price={item.price} />
          
          )
        }}
        keyExtractor={Personal => Personal.id}
      />
  
  </View><Text style={styles.text}>Volunteering Events</Text>
  <View style={styles.container}> 
    
    <FlatList horizontal={true}
           
        data={Volunteering}
        renderItem={({item})=>{
          console.log(item)
          return(
            
            <CardComp navigate={props.navigation.navigate} destination={"DescriptionNL"} object={item} id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} image={item.image} price={item.price} />
          
          )
        }}
        keyExtractor={Volunteering => Volunteering.id}
      />
  
  </View>
  
  
    </ScrollView>
    <View style={{flex:0.1,position:'absolute',bottom:0,right:0,left:0}} >
    <MenuBarCompNL navigation={props.navigation.navigate} />
    </View>
    


  </KeyboardAvoidingView>
 
  )
};

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'#F2F3FF',
    flexGrow:1
  },
    text: {
    fontSize: 20,
    marginLeft:'3%',
    marginTop:'10%',
  },
  container:{
    flexDirection:'row',
    marginLeft:'0.5%',
  },
  image: {
    height: 250,
    width: "100%",
    opacity:0.6,
  },
  search: {
    position: "absolute",
    top: 30,
    left: 50,
    flexDirection:'row'
  },
  buttons: {
    
    
  },
  textinput: {
    fontSize: 12,
    height: 20,
    width: "90%",
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 15,
    borderColor: "#ccc",
    marginTop: "-50%",
  },
  location2: {
    flexDirection:'row',
    marginTop:20,
   marginLeft:20,
    right:0
  },
  welcome: {
    marginTop:40,
    fontSize: 22,
    marginLeft: 10,
    marginBottom:10 
  },
  cardBox: {
    marginBottom: 15,
    backgroundColor:'white',
    marginTop:10,
    color:'#FA841A',
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    textAlign:'center',
    elevation: 5,
    borderRadius: 10,
    width:80,
    paddingRight: 10,
  },
  SignUpButton:{
    backgroundColor:'#FA841A',
    color:'#FFFFFF',
    borderRadius:30,
    textAlign:'center',
   paddingTop:5,
    width:'80%',
    height: 40,
    borderWidth:1,
},
SignUpButtonBox:{
  alignContent:'center',
  alignItems:'center',    
  marginTop:'5%',
  paddingBottom:'2%'

},
});

export default Explore;
