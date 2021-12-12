import React, { Component } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

var  items  = [
	{
      name: "Heidelberg Yoga Camp",
      image: require("D:/React/Event-Management/assets/pic.jpg"),
      email: "ashwini9sarode@gmail.com",
    },
    {
      name: "Heidelberg Yoga Camp",
      image: require("D:/React/Event-Management/assets/pic.jpg"),
      email: "ashwini9sarode@gmail.com",
    },
    {
      name: "Heidelberg Yoga Camp",
      image: require("D:/React/Event-Management/assets/pic.jpg"),
      email: "ashwini9sarode@gmail.com",
    },
    {
      name: "Friend 4",
      image: require("D:/React/Event-Management/assets/pic.jpg"),
      email: "ashwini9sarode@gmail.com",
    },
    {
      name: "Friend 5",
      image: require("D:/React/Event-Management/assets/pic.jpg"),
      email: "ashwini9sarode@gmail.com",
    },
    {
      name: "Friend 6",
      image: require("D:/React/Event-Management/assets/pic.jpg"),
      email: "ashwini9sarode@gmail.com",
    },
    {
      name: "Friend 7",
      image: require("D:/React/Event-Management/assets/pic.jpg"),
      email: "ashwini9sarode@gmail.com",
    },
    {
      name: "Friend 8",
      image: require("D:/React/Event-Management/assets/pic.jpg"),
      email: "ashwini9sarode@gmail.com",
    },
];
const searchdropdown = () => {

    return (
		<SearchableDropdown
			onTextChange={(text) =>  alert(text)}
			onItemSelect={(item) =>  alert(JSON.stringify(item))}
			containerStyle={{
				padding: 5
			}}
			textInputStyle={{
				padding: 12,
				borderWidth: 1,
				borderColor: '#ccc',
				borderRadius: 5
			}}
			itemStyle={{
				padding: 10,
			    marginTop: 2,
				backgroundColor: '#ddd',
				borderColor: '#bbb',
				borderWidth: 1,
				borderRadius:5
			}}
			itemTextStyle={{
			color: '#222'
			}}
			itemsContainerStyle={{
				maxHeight: 140
			}}
			items={items}
			placeholder="Placeholder."
			resetValue={false}
			underlineColorAndroid='transparent' />
    );
	};
export default searchdropdown;