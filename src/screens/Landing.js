import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Login from "./Login";
import { NavigationActions } from "react-navigation";
import HomeScreen from "./HomeScreen";
import { render } from "react-dom";
import { Dimensions } from 'react-native';

const landingPage = () => {
    const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [splash, showSplash] = useState(false);

  useEffect(() => {
    let myTimeout = setTimeout(() => {
      showSplash(true);
    }, 5000);
    return () => clearTimeout(myTimeout);
  }, []);

  return (
    <View>
      {!splash ? (
        <View>
          <Image
            style={{marginTop:5,height:height-100,width:width}}
            source={require("D:/React Native/Event-Management/assets/landingpage.png")}
          />
        </View>
      ) : (
        <Login />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: '100%',
    
  },
});

export default landingPage;
