import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar
} from "react-native";
import container from "../../Styles/Container/style";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
import { Tab, Tabs } from "native-base";
import Tab1 from "./signUp";
import Tab2 from "./signIn";
import Color from "../../Config/Color";
import style from './style';
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={[container.container]}>
        <StatusBar
            barStyle="light-content"
          />
        <View style={{ flex: 1 }}>
          <View style={{ width: width, height: height / 2.2 }}>
            <ImageBackground
              source={require("../../Image/halfbg.png")}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <Image
                source={require("../../Image/u-icon.png")}
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                  resizeMode: "contain"
                }}
              />
              <Image
                source={require("../../Image/logo.png")}
                style={{
                  height: 25,
                  width: 200,
                  alignSelf: "center",
                  resizeMode: "contain",
                  margin: 10
                }}
              />
            </ImageBackground>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              margin: 10
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  marginHorizontal: 40,
                  fontSize: 11,
                  padding: 10,
                  fontFamily: "uber"
                }}
              >
                By clicking start, you are agree to our
                <Text style={{ fontFamily: "uber-b" }}>
                  Terms and Conditions
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={style.cardView}
        >
          <KeyboardAvoidingView>
            <View style={{ margin: 10 }}>
              <Tabs
                tabBarUnderlineStyle={{
                  backgroundColor: Color.steel,
                  borderRadius: 130
                }}
                tabContainerStyle={{
                  elevation: 0,
                  borderBottomColor: Color.white
                }}
              >
                <Tab
                  activeTabStyle={{ backgroundColor: Color.white }}
                  heading="Sign Up"
                  activeTextStyle={{
                    color: Color.black,
                    fontSize: 20,
                    fontFamily: "uber"
                  }}
                  tabStyle={{ backgroundColor: Color.white }}
                  textStyle={{
                    color: Color.steel,
                    fontSize: 20,
                    fontFamily: "uber"
                  }}
                >
                  <Tab1
                    onPress={() => this.props.navigation.navigate("OTP")}
                    onPressFB={() => this.props.navigation.navigate("Home")}
                  />
                </Tab>
                <Tab
                  activeTabStyle={{ backgroundColor: Color.white }}
                  heading="Sign In"
                  activeTextStyle={{
                    color: Color.black,
                    fontSize: 20,
                    fontFamily: "uber"
                  }}
                  tabStyle={{ backgroundColor: Color.white }}
                  textStyle={{
                    color: Color.steel,
                    fontSize: 20,
                    fontFamily: "uber"
                  }}
                >
                  <Tab2
                    onPress={() => this.props.navigation.navigate("OTP")}
                  />
                </Tab>
              </Tabs>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
