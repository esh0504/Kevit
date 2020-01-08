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
import Cndwjsth from "../../Screen/cndwjsth/index";
import InviteFriendsList from "../../Screen/InviteFriendsList/index";

export default class index extends Component {

  constructor() {
    super();
    this.state = {
      latitude:37.550383,longitude:126.939822,
      zhaqh:false,ckepah:false,ac3tkd:false,tnvjckwj:false,dhksthr:false,show:false,sourcesearchText:'출발지',destsearchText:'도착지',pinClick:false,
      ehfh:'',cndwjsth:'',wldur:'',rlrhks:'',sidemenuOpen:false,text:'Input your text',dataLocation:[126.955493, 7.5521599]
    };
  }
  
  render() {
    return (
      <Drawer
        side="bottom"
        ref={ref => {
          this.searchdrawer = ref;
        }}
        content={<Cndwjsth navigation={this.props.navigation} />}
        onClose={() => this.searchdrawer._root.close()}
      >    
      <Drawer
        ref={ref => {
          this.sidedrawer = ref;
        }}
        content={<SideBar navigation={this.props.navigation} />}
        onClose={() => this.sidedrawer._root.close()}
      >
      <View style={Container.container}>
        <View style={Container.head}>
        </View>
        <View style ={{flex:1}}>
          <View style={styles.subcontainer}>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={() => this.sidedrawer._root.open()} style={{flex:1}}>
                <Image style={{width: 40, height: 40}} source={require('../../Image/menu.png')} />
              </TouchableOpacity>
            </View>
            <View style={{flex:2}}>
              <Text style={styles.text}>EV Infra</Text>
            </View>
            <View style={{flex:6}}>
              <TextInput
                style={styles.TextInput}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={() => this.searchdrawer._root.open()} style={{flex:1}}>
                <Image style={{width: 40, height: 40}} source={require('../../Image/add.png')} />
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={() => this.setState({show:!this.state.show})} style={{flex:1}}>
                <Image style={{width: 40, height: 40}} source={require('../../Image/Pic.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subcontainer}>
            <View style={Container.container}>
              <Picker selectedValue={this.state.ehfh} onValueChange={(itemValue,itemIndex)=>this.setState({ehfh:itemValue})}>
                <Picker.Item label="전체도로" value="전체도로"/>
                <Picker.Item label="그냥도로" value="그냥도로"/>
                <Picker.Item label="도로" value="도로"/>
              </Picker>
            </View>
            <View style={Container.container}>
              <Picker selectedValue={this.state.cndwjsth} onValueChange={(itemValue,itemIndex)=>this.setState({cndwjsth:itemValue})}>
                <Picker.Item label="모든 충전소" value="모든 충전소"/>
                <Picker.Item label="유료" value="유료"/>
                <Picker.Item label="무료" value="무료"/>
              </Picker>
            </View>
            <View style={Container.container}>
              <Picker selectedValue={this.state.wldur} onValueChange={(itemValue,itemIndex)=>this.setState({wldur:itemValue})}>
                <Picker.Item label="서울" value="서울"/>
                <Picker.Item label="경기" value="경기"/>
                <Picker.Item label="부산" value="부산"/>
              </Picker>
            </View>
            <View style={Container.container}>
              <Picker selectedValue={this.state.rlrhks} onValueChange={(itemValue,itemIndex)=>this.setState({rlrhks:itemValue})}>
                <Picker.Item label="1" value="1"/>
                <Picker.Item label="2" value="2"/>
                <Picker.Item label="3" value="3"/>
              </Picker>
            </View>

          </View>
          <View style={styles.subcontainer}>
            <View style={Container.container}>
              <CheckBox title='콤보'  checked={this.state.zhaqh} onPress={()=>this.setState({zhaqh:!this.state.zhaqh})}/>
            </View>
            <View style={Container.container}>
              <CheckBox title='차데모' checked={this.state.ckepah} onPress={()=>this.setState({ckepah:!this.state.ckepah})}/>             
            </View>
            <View style={Container.container}>
              <CheckBox title='AC3상' checked={this.state.ac3tkd} onPress={()=>this.setState({ac3tkd:!this.state.ac3tkd})}/>     
            </View>
            <View style={Container.container}>
              <CheckBox title='수퍼차저' checked={this.state.tnvjckwj} onPress={()=>this.setState({tnvjckwj:!this.state.tnvjckwj})}/>      
            </View>
            <View style={Container.container}>
              <CheckBox title='완속' checked={this.state.dhksthr} onPress={()=>this.setState({dhksthr:!this.state.dhksthr})}/>
            </View>
          </View>
        </View>
        <View style={{flex:6}}>
          <MapView style={{flex:1}}
            initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
            <Marker coordinate={{latitude:37.550383,longitude:126.939822}}
              title="서강대"
              description="빈장소갯수"
              onPress= {()=>this.setState({pinClick:!this.state.pinClick})}
              pinColor={this.state.pinClick ? 'yellow':'green'}
              Image="../../Image/menu.png"
            />
          </MapView>
          {this.state.show ?
          <View style={{position:'absolute',backgroundColor: Color.white,height:80,width:Dimensions.get('window').width}}> 
            <TextInput
              style={styles.TextInput}
              onChangeText={(sourcesearchText) => this.setState({sourcesearchText})}
              value={this.state.sourcesearchText}
            />
            <TextInput
              style={styles.TextInput}
              onChangeText={(destsearchText) => this.setState({destsearchText})}                  
              value={this.state.destsearchText}
           />
          </View>
          :null}
        </View>
          <View style={{position:'absolute', flexDirection:"row",flex:1,alignItems:'center',bottom:0}}>
        {
          this.state.pinClick ?
          <View style={Container.container}>
            <Button title="어디어디장소" onPress={()=>this.props.navigation.navigate('SignUp')} />
            <View style={styles.subcontainer}>
              <View style={{flex:1.3}}>
                <Button title="주차장상태창" onPress={()=>this.props.navigation.navigate('SignUp')} />
              </View>
              <View style={{flex:1}}>
                <Button title="색깔핀" onPress={()=>this.props.navigation.navigate('SignUp')} />
              </View>
            </View>
          </View>
          :
          <View style ={styles.subcontainer}>
            <View style={{marginLeft:20,flex:1,bottom:30}}>
              <Button title="QR충전" />
            </View>
            <View style={{flex:1,bottom:30}}>
              <Button title="결제충전소" />
            </View>
            <View style={{flex:1,bottom:30}}>
              <Button title="신규정보" />
            </View>
            <View style={{marginRight:20,flex:1,bottom:30}}>
              <Button title="즐겨찾기" />
            </View>
          </View>      
        }
        </View>
      </View>
    </Drawer>
  </Drawer>
    );
  }
}

