
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
import axios from "axios";
import Payment from "../../Screen/Payment/index";
import * as Location from "expo-location";
import Geolocation from 'react-native-geolocation-service';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("dab8.db");
const taaaaa="1"

export default class index extends Component {

  constructor() {
    super();
    
    this.state = {region: {
                latitude: 37.550383,
                longitude: 126.939822,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
            },
      zhaqh:true,ckepah:true,ac3tkd:true,tnvjckwj:true,dhksthr:true,show:false,sourcesearchText:'출발지',destsearchText:'도착지',pinClick:false,
      ehfh:'',cndwjsth:'',wldur:'',rlrhks:'전체',sidemenuOpen:false,text:'Input your text',informLocation:{statNm:" ",chgerType:" "},chargertype:" ",locations:[],selectLocations:[], selectRlrhksLocation:[], };}
  
  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (id text primary key not null, lat text,lng text,useTime text,powerType text,busiNm text,statNm text,stat text);"
      );
    });
    this.showDb();
  }

  selectRlrhks(rlrhks){
    if(rlrhks=="전체")
    {
      db.transaction(
      tx => {
        tx.executeSql("select * from items", []);
      },
      null,
    );
    }else{
      db.transaction(
      tx => {
        tx.executeSql("select * from items where busiNm=?", [rlrhks]);
      },
      null,
    );
    }
  }



  add(location) {
    if (location === null || location === "") {
      return;
    }
    db.transaction(
      tx => {
        tx.executeSql("insert into items (id,lat,lng,useTime,powerType,busiNm,statNm,stat) values (?,?,?,?,?,?,?,?)", [location.statId+location.chgerType,location.lat,location.lng,location.useTime,location.powerType,location.busiNm,location.statNm,location.stat]);
      },
      null,
    );
  }
 
  getData=async()=>{
       const {data:{items}}=await axios.get(`http://open.ev.or.kr:8080/openapi/services/EvCharger/getChargerInfo?ServiceKey=0h3zF0FTGvhqH7jmJ1JGbETb95rTwuRFF6kthn1Cj7gUOdKWghixpFIS23yJ1cWtlAZOJ6wAmj1Fx9QljzCylw%3D%3D&pageNo=&pageSize=100&_type=json`);
      setTimeout(() => {        
      }, 1000);
      this.setState({
        locations:items[0].item
      });
      this.state.locations.map((_marker,index)=>{
        this.add(_marker);
        console.log(index);
      })
      this.showDb();
  }

  showDb(){
    db.transaction(
      tx=>{
        tx.executeSql("select * from items", [], (_, { rows }) =>console.log(rows.length));
      }
    )
  }
  getLocation=async()=>{
    try{
      await Location.requestPermissionsAsync();
      const{coords:{latitude,longitude}}=await Location.getCurrentPositionAsync();
      
    }catch(error){
      Alert.alert("Can't find you.","So sad");
    }

  }

  renderMarker(_marker,tmplat,tmplng){
    return(  <Marker
                key= {_marker.id}
                title = {_marker.statNm }
                coordinate={{latitude:tmplat,longitude:tmplng}}
                description = { _marker.useTime }
                //icon={require('../../Image/picupicon.png')}
                pinColor={this.pinColor(_marker.stat)}
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />)
  }
  //충전소 상태따라 핀색깔 변경
  pinColor(v){
    if(v=='1'){
      return 'red';
    }
    else if(v=='2'){        
      return 'blue';
    }
    else if (v=='3'){
      return 'green';
    }
    else{
      return 'gold';
    }
  }
  

  //마커찍을떄 기관체크한거 확인
  checkRlrhks(a){
    if(a==this.state.rlrhks || this.state.rlrhks=="전체"){
      return true;
    }
    else{
      if(this.state.rlrhks=="기타")
      {
        return true;
      }
      return false;
    }
  }

  //지도에 보이는 지역만 찍기
  checkLocal(_marker,a,adelta,b,bdelta){
    if(Number(_marker.lat)>=a-adelta && Number(_marker.lat)<=a+adelta && Number(_marker.lng)>=b-bdelta && Number(_marker.lng)<=b+bdelta)
    {
      return true;
    }
    else{
      return false;
    }
  }

 

  render() {
    
    console.log(this.state.informLocation.statNm);
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
                <Picker.Item label="전체" value="전체"/>
                <Picker.Item label="환경부" value="환경부"/>
                <Picker.Item label="기타" value="기타"/>
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
          <MapView 
            ref={ref=>mymap=ref}
            style={{flex:1}}
            initialRegion={this.state.region}
            onPress={()=>this.setState({pinClick:true})}
          >
          {
            if(this.state.dhksthr==true)
                this.getdhksthr();
          }
          {
            this.state.selectLocations.map((_marker,index)=>{
              var tmplat=Number(_marker.lat);
              var tmplng=Number(_marker.lng);
              return(this.renderMarker(_marker,tmplat,tmplng));
            })
          }
          {
            if(this.state.)
          }
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
            <Button title={this.state.informLocation.statNm} onPress={()=>this.props.navigation.navigate('Payment')} />
            <View style={styles.subcontainer}>
              <View style={{flex:1.3}}>
                <Button title={this.state.informLocation.chgerType} onPress={()=>this.props.navigation.navigate('Payment')} />
              </View>
              <View style={{flex:1}}>
                <Button title="색깔핀" onPress={()=>this.props.navigation.navigate('Payment')} />
              </View>
            </View>
          </View>
          :
          <View style ={styles.subcontainer}>
            <View style={{marginLeft:20,flex:1,bottom:30}}>
              <Button title=" " />
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

