import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUp from "./src/screens/SignUp";
import Changephone from "./src/screens/Changephone";
import Attendees from "./src/screens/Attendees";
import MySearch from "./src/screens/SearchComponent";
import Login from "./src/screens/Login";
import Changepassword from "./src/screens/Changepassword";
import HeaderComp from './src/screens/HeaderComponent';
import Account from './src/screens/Account';
import ChangeEmail from './src/screens/ChangeEmail';
import CreateGroup from './src/screens/CreateGroup';
import Chats from './src/screens/Chats';
import Forgotpassword from './src/screens/Forgotpassword';
import SearchGroup from './src/screens/SearchGroup';
import SearchGroupComponent from './src/screens/SearchGroupComponent';
import HomeScreenMain from './src/screens/HomeScreenMain';
import searchdropdown from './src/screens/SearchDropdown';


const navigator = createStackNavigator({
    Home: HomeScreen,
    SignUp: SignUp,
    Login: Login,
    Header: HeaderComp,
    password: Changepassword,
    search: MySearch,
    phoneno: Changephone,
    Account: Account,
    email: ChangeEmail,
    creategroup: CreateGroup,
    Chats: Chats,
    Attendees: Attendees,
    Forgotpassword: Forgotpassword,
    SearchGroup: SearchGroup,
    SearchGroupComponent: SearchGroupComponent,
    HomeScreenMain: HomeScreenMain,
    searchdropdown: searchdropdown,
}, {
    initialRouteName: "Attendees",
    defaultNavigationOptions: {
        title: "Rel-Event",
    },
});

export default createAppContainer(navigator);