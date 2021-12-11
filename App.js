import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUpPage";
import HeaderComp from "./src/screens/HeaderComponent";
import Home from "./src/screens/MyHome";
import EventComponent from "./src/screens/EventComponent";
import Events from "./src/screens/Events";
import Description from "./src/screens/Description";
import CreateEvent from "./src/screens/CreateEvent";
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
    
  },
  {
    initialRouteName: "CreateEvent",
    defaultNavigationOptions: {
      title: "Rel-Event",
    },
  }
);

export default createAppContainer(navigator);
