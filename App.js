import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import HeaderComp from "./src/screens/HeaderComponent";
import CardComp from "./src/screens/CardComponent";
const navigator = createStackNavigator({
    Home: HomeScreen,
    SignUp: SignUp,
    Header: HeaderComp,
    CardComp: CardComp,
}, {
    initialRouteName: "SignUp",
    defaultNavigationOptions: {
        title: "Rel-Event",
    },
});

export default createAppContainer(navigator);