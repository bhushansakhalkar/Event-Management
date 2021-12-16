import React, {useState,useCallback} from 'react';
import { Text, StyleSheet,View, Image,Modal,TouchableOpacity } from 'react-native';
import { FlatList, ScrollView, TextInput,  } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import HeaderComp from './HeaderComponent';
import MyButton from './MyButton';
import MyInputField from './MyInputField';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ImageNameComponent from './ImageNameComponent';
import CardComp from './CardComponent';
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import recommended from '../../assets/data/Recommended';

const Description = (props,route) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [show, showBox]  = useState(false)

      const item = props.navigation.getParam('item');  
    const attendes = item.attendes;  
      const [color, setColor] = useState('black');
      const [pressed,setPressed] =useState(!pressed)
      const [likes, setLikes] = useState(item.likes)


    const [textShown, setTextShown] = useState(false); 
const [lengthMore,setLengthMore] = useState(true); 
const toggleNumberOfLines = () => { 
    setTextShown(!textShown);
}
const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=2); 
    
},[]);


const SRH = {
    latitude: 49.41398606496842, 
    longitude: 8.651340560480826,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
    return(
    <ScrollView> 
       <Modal
    
    transparent={true}
    visible={show}
    >
       <TouchableOpacity style={{backgroundColor:'#000000aa',height:'100%'}} onPress={()=>{showBox(false)}} >
            <View style={{backgroundColor:'#ffffff',marginTop:300,height:'20%',  }}  >
            <View style={{flexDirection:'row',marginLeft:'10%',marginTop:'10%'}}>
            <AntDesign name="checkcircle" size={25} color="#FA841A" />
      <Text style={{textAlign:'center',fontSize:18,marginLeft:'2%',flexWrap:'wrap',flexShrink:1}} >Your Ticket Has been sent to your registered Email Address</Text>
      </View>
      <TouchableOpacity onPress={()=>{
        showBox(false)
        }} >
      <Text style={{textAlign:"center",marginTop:20,fontSize:20,textDecorationLine:'underline',color:'blue'}}>Close</Text>
      
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
    </Modal>
      <View style={styles.background}>
          <View style={styles.imageBackground}>
              <Image style={styles.image} source={item.src}  />
              </View>
              <View style={{flexDirection:'row',backgroundColor:'white', paddingBottom:20,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
              <View style={{flexDirection:'row',left:0,marginLeft:'5%',marginTop:'2%'}}>
              <AntDesign name="star" size={20} color="black" />
          <AntDesign name="star" size={20} color="black" />
          <AntDesign name="star" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          
                </View>
                <View style={{position:'absolute',right:0,marginRight:'5%',marginTop:'2%',flexDirection:'column'}}>
                <TouchableOpacity onPress={()=>{
          setPressed(!pressed)
          setColor(pressed?'red':'black')
          setLikes(pressed?likes+1:likes-1)
        }} >
                <AntDesign  name="hearto" size={24} color={color} />
                </TouchableOpacity>
                <Text style={{}}>{likes}</Text>
                    </View>
            </View>
          
          <View style={styles.whiteBox}>
        <View style={{flexDirection:'row',paddingBottom:'5%', borderBottomColor:'black',borderBottomWidth:1}}>
         <View style={{flexDirection:'column',}}>
         <Image style={styles.imageProfile}
            source={item.image} />
            <Text style={styles.name}>{item.createBy}</Text>
         </View>
         <Text style={styles.title}>{item.eventName}</Text>
         </View> 

         <View style={{flexDirection:'column',paddingBottom:'5%', borderBottomColor:'black',borderBottomWidth:1}}>
         <View style={{flexDirection:'row',marginLeft:'10%',marginTop:'5%'}}>
         <MaterialCommunityIcons name="calendar-month" size={24} color="black" />
            <Text style={styles.about}>{item.date}</Text>
         </View>
         <View style={{flexDirection:'row',marginLeft:'10%',marginTop:'5%'}}>
         <MaterialIcons name="location-on" size={24} color="black" />
            <Text style={styles.about}>{item.eventLocation}</Text>
         </View>
         <View style={{flexDirection:'row',marginLeft:'10%',marginTop:'5%'}}>
         <MaterialCommunityIcons name="ticket-confirmation" size={24} color="black" />
            <Text style={styles.about}>{item.price}</Text>
         </View>
         </View> 


         <View style={{flexDirection:'column',paddingBottom:'5%', borderBottomColor:'black',borderBottomWidth:1}}>
            <Text style={styles.about}>About</Text>
            <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 3}
              style={styles.aboutMain}>{item.about}</Text>
                {
                  lengthMore ? <Text
                  onPress={toggleNumberOfLines}
                  style={{ lineHeight: 21,position:'absolute',bottom:0,right:5,}}>{textShown ? 'Show less' : 'Show more'}</Text>
                  :null
              }
            {/* <TouchableOpacity>
                <Text style={{textAlign:'right',marginTop:'2%',marginRight:'2%',fontStyle:'italic',}}>Show More</Text>
            </TouchableOpacity> */}
         </View> 

            {/* Map */}
            <MapView
            style={styles.map}
            initialRegion={SRH} //your region data goes here.
            >
                <MapView.Marker
            coordinate={SRH}
            title={"SRH Hochschule Heidelberg"}
            description={"SRH Hochschule Heidelberg"}
         />
        {/* <Marker coordinate={SRH} /> */}
        </MapView>
         <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
         <Text style={styles.about}>Attendees</Text>
         <TouchableOpacity style={{width:'100%',marginLeft:210,marginTop:5,}} onPress={()=>{props.navigation.navigate('Attendees')}} ><Text style={{color:'blue'}}>Show All</Text></TouchableOpacity>
            </View>
            <View  style={{flexDirection:'row',paddingBottom:'5%',marginTop:'2%',  borderBottomColor:'black',borderBottomWidth:1}}>
            
            <ScrollView horizontal={true} 
            contentContainerStyle={{paddingRight:100}}
                style={{flexDirection:'row'}}
            >
                {attendes.map((item)=>{
                    return(
                    
                        <ImageNameComponent key={item.id} src={item.image} name={item.names}  />
                        )
                })}
                </ScrollView>
            {/* <FlatList horizontal
            data={attendes}
            style={{width: width + 400, height:'100%',paddingRight:200}}
            renderItem={({item})=>{
                console.log("Attendees");
                console.log(item);
                
                return(
                    
                    <ImageNameComponent src={item.image} name={item.names}  />
                    )
            }}
            keyExtractor={attendes => attendes.id}
            /> */}
            </View>
        
         </View>
          
         <TouchableOpacity style={{flexDirection:'column',paddingTop:'5%',alignContent:'center',
        alignItems:'center',    
        marginTop:'10%', }}  onPress={()=>{showBox(true)}} >

          <Text style={{ backgroundColor:'#FA841A',
        color:'#FFFFFF',
        borderRadius:30,
        textAlign:'center',
        paddingTop:10,
        paddingLeft:50,
        paddingRight:50,
        height: 40,
        borderWidth:1,}} >Register</Text>
            </TouchableOpacity>

          <View style={{marginTop:'10%'}} >
          <Text style={styles.text}>More Such Events</Text>
  <View style={styles.container}> 
    
    <FlatList horizontal={true}
           
        data={recommended}
        renderItem={({item})=>{
        //   console.log(item)
          return(
            
            <CardComp navigate={props.navigation.navigate} destination={"Description"} object={item} id={item.id} src={item.src} eventName={item.eventName} eventLocation={item.eventLocation} date={item.date} likes={item.likes}  createBy={item.createBy} image={item.image} price={item.price} />
          
          )
        }}
        keyExtractor={recommended => recommended.id}
      />
  
  </View>
              </View>
          

          </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F2F3FF',
        paddingBottom:200,
    },
    whiteBox:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FFFFFF',
        marginTop:5,
        paddingBottom:50,
        borderRadius:20,
        
    },
    text: {
        fontSize: 20,
        marginLeft:'3%',
        marginTop:'10%',
      },
    map:{
        marginTop:'5%',
        height:'15%',
        width:'100%',
        borderWidth:1,
        borderColor:'black',
    },
    image:{
        height:200,
        width:'100%',
        marginTop:1,
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
        height:'100%',
        marginRight:10,
        marginTop:'8%',
        fontSize:20,
        flex: 1, 
        flexWrap: 'wrap'
    },
    about:{
        marginLeft:'5%',
        fontSize:15
    },
    aboutMain:{
        marginTop:'2%',
        marginLeft:'15%',
        marginBottom:'5%',
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