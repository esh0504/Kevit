import React, { Component } from "react";
import  MapView ,{Marker} from 'react-native-maps';
import styles from "./style";
import {CheckBox} from 'react-native-elements';
import Color from "../../Config/Color";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
  Picker,
  Button,
  DrawerLayoutAndroid,
} from "react-native";
import { Icon, Col ,Drawer} from "native-base";
import SideBar from "../../Screen/SideMenu/index";
import Container from "../../Styles/Container/style";
import IconText from "../../Component/Icon2Text/index";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import MyWallet from "../../Screen/MyWallet/index";
import InviteFriendsList from "../../Screen/InviteFriendsList/index";



export default class index extends Component {
  
  render() {
    return (
        <View style={Container.container}>
            <View style={Container.head}>
            </View>
            <View style={{flex:1,flexDirection:"row"}}>
                <Image style={{width: 40, height: 40}} source={require('../../Image/back.png')} />
                <TextInput style={styles.TextInput}/>
            </View>
            <View style={{flex:6}}>
                 <Image style={{width: 100, height: 100}} source={require('../../Image/Pic2.png')} />
            </View>
        </View>
    );
  }
}