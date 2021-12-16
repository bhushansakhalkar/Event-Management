import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { Text, StyleSheet,View, TouchableOpacity,Image, ImageBackground,TextInput,KeyboardAvoidingView } from 'react-native';

import SignUp from "./src/screens/SignUpPage";
import HeaderComp from "./src/screens/HeaderComponent";
import Home from "./src/screens/MyHome";
import EventComponent from "./src/screens/EventComponent";
import Events from "./src/screens/Events";
import Description from "./src/screens/Description";
import CreateEvent from "./src/screens/CreateEvent";
import Groups from "./src/screens/Groups";
import GroupsComponent from "./src/screens/GroupComponent";
import CardComp from "./src/screens/CardComponent";
import ImageNameComponent from "./src/screens/ImageNameComponent";
import Favorites from "./src/screens/Favourites";
import { withNavigation } from 'react-navigation';
import MenuBarComp from "./src/screens/MenuBarComponent";
import Account from "./src/screens/Account";
import ChangeEmail from "./src/screens/ChangeEmail";
import Changepassword from "./src/screens/Changepassword";
import Changephone from "./src/screens/Changephone";
import Chats from "./src/screens/Chats";
import CreateGroup from "./src/screens/CreateGroup";
import Forgotpassword from "./src/screens/Forgotpassword";
import Login from "./src/screens/Login";
import SearchGroup from "./src/screens/SearchGroup";
import SearchGroupComponent from "./src/screens/SearchGroupComponent";
import searchdropdown from "./src/screens/SearchDropdown";
import HomeScreen from "./src/screens/HomeScreen";
import MySearch from "./src/screens/SearchComponent";
import Explore from "./src/screens/Explore";
import landingPage from "./src/screens/Landing";
import Attendees from "./src/screens/Attendees";
import LogoComp from "./src/screens/LogoComponent";
import LoginError from "./src/screens/LoginError";
import RegisterWithoutLogin from "./src/screens/RegisterWithoutLogin";
import DescriptionNL from "./src/screens/DescriptionNL";
import MenuBarCompNL from "./src/screens/MenuBarComponentNotLogin";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    SignUp:SignUp,
    Header:HeaderComp,
    Home:Home,
    EventComponent:EventComponent,
    Events:Events,
    Description:Description,
    CreateEvent:CreateEvent,
    ImageNameComponent:ImageNameComponent,
    Groups:Groups,
    CardComp:CardComp,
    GroupsComponent:GroupsComponent,
    Favorites:Favorites,
    MenuBarComp:MenuBarComp,
    Account:Account,
    Login:Login,
    ChangeEmail:ChangeEmail,
    Changepassword:Changepassword,
    Changephone:Changephone,
    Forgotpassword:Forgotpassword,
    SearchGroup:SearchGroup,
    MySearch:MySearch,
    CreateGroup:CreateGroup,
    HomeScreen:HomeScreen, 
    Attendees:Attendees,
    Explore:Explore,
    LoginError:LoginError,
    Chats:Chats,
    DescriptionNL:DescriptionNL,
    RegisterWithoutLogin:RegisterWithoutLogin,
    
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Rel-Event",
      headerTitleStyle:{marginLeft:80,fontStyle:"italic",color:'white'},
      headerStyle:{backgroundColor:'#004DA9',height:90},
      headerTintColor:"#FFF",
      headerLeft:()=><Image style={{width:90,height:60,position:'absolute', top:4,left:0}} source={require('D:/React Native/Event-Management/assets/Logo2.png')} />
    },
  }
);

export default createAppContainer(navigator);
