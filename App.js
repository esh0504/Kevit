import React, { Component } from 'react'
import Navigation from './src/Navigation/index'
import { AppLoading } from "expo";//
import * as Font from 'expo-font';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "uber" : require("./assets/fonts/UberMoveText-Medium.ttf"),
      "uber-l" : require("./assets/fonts/UberMoveText-Light.ttf"),
      "uber-r" : require("./assets/fonts/UberMoveText-Regular.ttf"),
      "uber-b" : require("./assets/fonts/UberMoveText-Bold.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return <Navigation />;
    } else {
      return <AppLoading />;
    }
  }
}
