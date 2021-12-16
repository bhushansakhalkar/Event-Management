import React,{useState} from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

const AutoComplete = (props) => {
    const [selectedItem, setSelectedItem] = useState("")
  return (
    <AutocompleteDropdown
 clearOnFocus={false}
 closeOnBlur={true}
 textInputProps={{
   placeholder: props.placeholder,
   autoCorrect: false,
   autoCapitalize: "none",
   style: {
     borderRadius: 40,
     backgroundColor: "white",
     color: "black",
     zIndex: 1000, 
     height:28,
     paddingLeft: 40
   }
 }}
 inputContainerStyle={{
   width:'100%',
   flex:1,
   borderRadius:40
 }}
 suggestionsListContainerStyle={{
   backgroundColor: "white",
   zIndex: 1000, 
 }}
 rightButtonsContainerStyle={{ 
   alignSelfs: "center",
   backgroundColor: "#F2F3FF",
   borderRightWidth:1,
   height:0,
   borderRadius:40,
 }}
 containerStyle={{width:'80%',borderRadius:100, height:30,borderWidth:1, zIndex: 1000, }}
 closeOnSubmit={false}
 initialValue={{}} // or just '2'
 onSelectItem={setSelectedItem}
 dataSet={props.name}/>
  )
};

const styles = StyleSheet.create({
  
})

export default AutoComplete;


 