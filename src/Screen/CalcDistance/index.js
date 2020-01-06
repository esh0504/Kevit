import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StatusBar
} from "react-native";
import styles from "./style";
import Texts from "../../Component/Text/index";
import Color from "../../Config/Color";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
export default class index extends Component {
  ratingCompleted(rating) {
    console.log(rating);
  }
  render() {
    return (
        <View style={styles.g}>
            <Text style={styles.text}>source</Text>
            <Text style={styles.text}>destination</Text>
        </View>
    );
  }