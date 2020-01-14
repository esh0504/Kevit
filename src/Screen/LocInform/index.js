import React, { Component } from "react";
import  MapView ,{Marker} from 'react-native-maps';

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
import Home from "../../Screen/Home/index";
import Container from "../../Styles/Container/style";
import IconText from "../../Component/Icon2Text/index";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Cndwjsth from "../../Screen/cndwjsth/index";
import InviteFriendsList from "../../Screen/InviteFriendsList/index";
import axios from "axios";


export default class index extends Home {
     constructor() {
        super();
     }
     render()
     {
         return(<View style={Container.container}>
            <View style={Container.head}>
            </View>
            <View style={{flex:1}}>
            <Text>{this.state.title}</Text>
            </View>
            <View style={{flex:4}}>
            </View>
            <View style={{flex:5}}>
            <Text> 각종정보들 스크롤바</Text>
            </View>
        </View>);
     };
};
  
