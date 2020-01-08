import { createStackNavigator, createAppContainer } from "react-navigation";
import Slider from "../Screen/Slider/index";
import Welcome from "../Screen/Welcome/index";
import SignUp from "../Screen/SignUp/index";
import OTP from "../Screen/OTP/index";
import Home from "../Screen/Home/presenter";
import HomeUp from "../Screen/HomeUp/index";
import Model from "../Component/Model/index";
import HomeLetsGo from "../Screen/HomeLetsGo/index";
import BookingReq from "../Screen/BookingReq/index";
import BookingReqUp from "../Screen/BookingReqUp/index";
import Promocode from "../Screen/Promocode/index";
import Payment from "../Screen/Payment/index";
import RideReqConfirm from "../Screen/RideReqConfirm/index";
import SideMenu from "../Screen/SideMenu/index";
import MyWallet from "../Screen/MyWallet/index";
import History from "../Screen/History";
import Notification from "../Screen/Notification/index";
import InviteFriends from "../Screen/InviteFriends/index";
import Settings from "../Screen/Settings/index";
import Logout from "../Screen/Logout/index";
import RideReqCancel from "../Screen/RideReqCancel/index";
import HistoryList from "../Component/HistoryList/indx";
import Chat from "../Screen/Chat/index";
import Rating from "../Screen/Rating/index";
import Tips from "../Screen/Tips/index";
import InviteFriendsList from "../Screen/InviteFriendsList/index";
import MyAccount from '../Screen/MyAccount/index';
import cndwjsth from '../Screen/cndwjsth/index';
const AppNavigator = createStackNavigator(
  {
    Slider: {
      screen: Slider,
      navigationOptions: {
        header: null
      }
    },
    cndwjsth:{
      screen: cndwjsth,
      navigationOptions:{
        header:null
      }
    },
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },
    OTP: {
      screen: OTP,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    HomeUp: {
      screen: HomeUp,
      navigationOptions: {
        header: null
      }
    },
    Model: {
      screen: Model,
      navigationOptions: {
        header: null
      }
    },
    HomeLetsGo: {
      screen: HomeLetsGo,
      navigationOptions: {
        header: null
      }
    },
    BookingReq: {
      screen: BookingReq,
      navigationOptions: {
        header: null
      }
    },
    BookingReqUp: {
      screen: BookingReqUp,
      navigationOptions: {
        header: null
      }
    },
    Promocode: {
      screen: Promocode,
      navigationOptions: {
        header: null
      }
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        header: null
      }
    },
    RideReqConfirm: {
      screen: RideReqConfirm,
      navigationOptions: {
        header: null
      }
    },
    SideMenu: {
      screen: SideMenu,
      navigationOptions: {
        header: null
      }
    },
    MyWallet: {
      screen: MyWallet,
      navigationOptions: {
        header: null
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        header: null
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        header: null
      }
    },
    InviteFriends: {
      screen: InviteFriends,
      navigationOptions: {
        header: null
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: null
      }
    },
    RideReqCancel: {
      screen: RideReqCancel,
      navigationOptions: {
        header: null
      }
    },
    HistoryList: {
      screen: HistoryList,
      navigationOptions: {
         header:null,
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        header: null
      }
    },
    Rating: {
      screen: Rating,
      navigationOptions: {
        header: null
      }
    },
    Tips: {
      screen: Tips,
      navigationOptions: {
        header: null
      }
    },
    InviteFriendsList:{
      screen:InviteFriendsList,
      navigationOptions:{
        header:null,
      }
    },
    MyAccount:{
      screen:MyAccount,
      navigationOptions:{
        header:null
      }
    }, 
    
   
  },
  { 
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
