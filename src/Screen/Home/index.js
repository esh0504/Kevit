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
export default class index extends Component {

  constructor() {
    super();
    this.state = {
      latitude:37.550383,longitude:126.939822,
      zhaqh:false,ckepah:false,ac3tkd:false,tnvjckwj:false,dhksthr:false,show:false,sourcesearchText:'출발지',destsearchText:'도착지',pinClick:false,
      ehfh:'',cndwjsth:'',wldur:'',rlrhks:'',sidemenuOpen:false,text:'Input your text',informLocation:{statNm:" ",chgerType:" "},chargertype:" ",locations:[
  {
    addr: "서울특별시 종로구 종로 157, 지하주차장 4층 하층 T구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.571076",
    lng: "126.995880",
    powerType: "급속(50kW)",
    stat : "3",
    statId: "ME000001",
   statNm: "종묘 공영주차장",
    statUPdate: "20200110085321",
    useTime: "24시간 이용가능",
    region:{latitude:37.550383,longitude:126.939822}
  },
  {
    addr: "서울특별시 종로구 세종대로 189, 지하주차장 4층 D구역 계단실 앞",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.573611",
    lng: "126.976011",
    powerType: "급속(50kW)",
    stat : "3",
    statId: "ME000002",
   statNm: "세종로 공영주차장",
    statUPdate: "20200110091423",
    useTime: "24시간 이용가능",
    region:{latitude:37.573611,longitude:126.976011}
  },
  {
    addr: "서울특별시 중구 동호로 287, 대형버스주차장",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.559352",
    lng: "127.002350",
    powerType: "급속(50kW)",
    stat : "3",
    statId: "ME000003",
   statNm: "그랜드앰배서더 서울",
    statUPdate: "20200110083825",
    useTime: "24시간 이용가능",
    region:{latitude:37.559352,longitude:127.002350}
  },
  {
    addr: "서울특별시 용산구 한남동 산10-84, 지상실외주차장",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.540085",
    lng: "127.002804",
    powerType: "급속(50kW)",
    stat : "1",
    statId: "ME000004",
   statNm: "한강진역 공영주차장",
    statUPdate: "20200110065354",
    useTime: "24시간 이용가능",
    region:{latitude:37.540085,longitude:127.002804}
  },
  {
    addr: "서울특별시 성동구 마장동 808",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.5660935",
    lng: "127.0455256",
    powerType: "급속(50kW)",
    stat : "1",
    statId: "ME000006",
   statNm: "마장동사무소 앞(공중전화부스)",
    statUPdate: "20200110092127",
    useTime: "24시간 이용가능",
    region:{latitude:37.5660935,longitude:127.0455256}
  },
  {
    addr: "서울특별시 동대문구 왕산로 214, 주차장 옥상",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.580650",
    lng: "127.047938",
    powerType: "급속(50kW)",
    stat : "1",
    statId: "ME000007",
   statNm: "청량리롯데백화점",
    statUPdate: "20200109102934",
    useTime: "24시간 이용가능",
    region:{latitude:37.580650,longitude:127.047938}
  },
  {
    addr: "서울특별시 동대문구 이문로 136, 지하주차장 1층 D-04",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.598454",
    lng: "127.061848",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000008",
   statNm: "이마트 이문점",
    statUPdate: "20200107114201",
    useTime: "10:00~24:00",
    region:{latitude:37.598454,longitude:127.061848}
  },
  {
    addr: "서울특별시 중랑구 사가정로 332, 지상주차장 4층 406구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.580612",
    lng: "127.08154",
    powerType: "급속(50kW)",
    stat : "5",
    statId: "ME000010",
   statNm: "홈플러스 면목점",
    statUPdate: "20190826130747",
    useTime: "10:00~24:00",
    region:{latitude:37.580612,longitude:127.08154}
  },
  {
    addr: "서울특별시 성북구 화랑로 76, 지하주차장 3층 98구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.60208293",
    lng: "127.04002398",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000011",
   statNm: "홈플러스 월곡점",
    statUPdate: "20200110071833",
    useTime: "10:00~24:00",
    region:{latitude:37.60208293,longitude:127.04002398}
  },
  {
    addr: "서울특별시 성북구 장위2동 65-154",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.60936",
    lng: "127.053263",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000012",
   statNm: "성북벤처빌딩 공영주차장",
    statUPdate: "20200109203037",
    useTime: "",
    region:{latitude:37.60936,longitude:127.053263}
  },
  {
    addr: "서울특별시 강북구 삼양로 247삼양시장, 지상주차장 3층 324구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.625405",
    lng: "127.017897",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000013",
   statNm: "롯데마트 삼양점",
    statUPdate: "20200110022019",
    useTime: "10:00~24:00",
    region:{latitude:37.625405,longitude:127.017897}
  },
  {
    addr: "서울특별시 도봉구 마들로 645, 지상주차장 4층 406구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.667567",
    lng: "127.045490",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000014",
   statNm: "빅마켓 도봉점",
    statUPdate: "20200110062355",
    useTime: "10:00~22:00",
    region:{latitude:37.667567,longitude:127.045490}
  },
  {
    addr: "서울특별시 은평구 은평로 111, 지하주차장 4층 A구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.60047527",
    lng: "126.92047408",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000016",
   statNm: "이마트 은평점",
    statUPdate: "20200110033625",
    useTime: "10:00~24:00",
    region:{latitude:37.60047527,longitude:
126.92047408}
  },
  {
    addr: "서울특별시 은평구 진관동 66-30, 지하주차장 1층 20구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.638403",
    lng: "126.919044",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000017",
   statNm: "구파발역 환승주차장",
    statUPdate: "20200110023720",
    useTime: "24시간 이용가능",
    region:{latitude:37.638403,longitude:
126.919044}
  },
  {
    addr: "서울특별시 마포구 월드컵로 240, 지상주차장 1층",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.566685",
    lng: "126.898753",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000018",
   statNm: "홈플러스 월드컵점",
    statUPdate: "20200110021426",
    useTime: "08:00~24:00",
    region:{latitude:37.566685,longitude:
126.898753}
  },
  {
    addr: "서울특별시 마포구 마포대로1길 19, 지상주차장",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.539442",
    lng: "126.943054",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000019",
   statNm: "시설관리공단 마포유수지주차장",
    statUPdate: "20200110023948",
    useTime: "24시간 이용가능",
    region:{latitude:37.539442,longitude:
126.943054}
  },
  {
    addr: "서울특별시 마포구 상암동 482-116, 주차장 입구 정면",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.569588",
    lng: "126.879244",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000020",
   statNm: "노을공원",
    statUPdate: "20200110053331",
    useTime: "24시간 이용가능",
    region:{latitude:37.569588,longitude:
126.879244}
  },
  {
    addr: "서울특별시 양천구 목동서로 170, 지상주차장 2층 01구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.52992611",
    lng: "126.87364033",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000021",
   statNm: "홈플러스 목동점",
    statUPdate: "20200110095318",
    useTime: "10:00~24:00",
    region:{latitude:37.52992611,longitude:
126.87364033}
  },
  {
    addr: "서울특별시 양천구 지양로 47",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.520062",
    lng: "126.834854",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000022",
   statNm: "해맞이공영주차장",
    statUPdate: "20200110090535",
    useTime: "24시간 이용가능",
    region:{latitude:37.520062,longitude:
126.834854}
  },
  {
    addr: "서울특별시 강서구 양천로 431, 지하주차장 1층",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "02",
    lat: "37.56401856",
    lng: "126.85059572",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000023",
   statNm: "홈플러스 가양점",
    statUPdate: "20200108132352",
    useTime: "10:00~24:00",
    region:{latitude:37.56401856,longitude:126.85059572}
  },
  {
    addr: "서울특별시 강서구 하늘길 77, 지하주차장 1층 A-18구역",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.563453",
    lng: "126.803539",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000024",
   statNm: "롯데마트 김포공항점",
    statUPdate: "20200110070139",
    useTime: "24시간 이용가능",
    region:{latitude:37.563453,longitude:126.803539}
  },
  {
    addr: "서울특별시 강서구 방화대로 94, 호텔 정면 주차장",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.546851",
    lng: "126.818613",
    powerType: "급속(50kW)",
    stat : "2",
    statId: "ME000025",
   statNm: "메이필드호텔",
    statUPdate: "20200110095137",
    useTime: "24시간 이용가능",
    region:{latitude:37.546851,longitude:126.818613}
  },
  {
    addr: "서울특별시 구로구 경인로 482, 지상주차장 5층",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.49797486",
    lng: "126.87234534",
    powerType: "급속(50kW)",
    stat : "4",
    statId: "ME000026",
   statNm: "롯데마트 구로점",
    statUPdate: "20191126101243",
    useTime: "10:00~24:00",
    region:{latitude:37.49797486,longitude:126.87234534}
  },
  {
    addr: "서울특별시 구로구 오류동 174-10, 천왕역 환승주차장 1층",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "03",
    lat: "37.487234",
    lng: "126.839153",
    powerType: "급속(50kW)",
    stat : "5",
    statId: "ME000027",
   statNm: "천왕역 환승주차장",
    statUPdate: "20200108154551",
    useTime: "24시간 이용가능",
    region:{latitude:37.487234,longitude:126.839153}
  },
  {
    addr: "서울특별시 구로구 구로동 136-14",
    busicall: "1661-9408",
    busiId: "ME",
    busiNm: "환경부",
    chgerId: "01",
    chgerType: "06",
    lat: "37.4912466",
    lng: "126.8919514",
    powerType: "급속(50kW)",
    stat : "4",
    statId: "ME000028",
   statNm: "구로리공원 앞(공중전화부스)",
    statUPdate: "20200110030811",
    useTime: "24시간 이용가능",
    region:{latitude:37.4912466,longitude:126.8919514}
  }]
  };}
  getData=async()=>{
      const {data:{items}}=await axios.get(`http://open.ev.or.kr:8080/openapi/services/EvCharger/getChargerInfo?ServiceKey=0h3zF0FTGvhqH7jmJ1JGbETb95rTwuRFF6kthn1Cj7gUOdKWghixpFIS23yJ1cWtlAZOJ6wAmj1Fx9QljzCylw%3D%3D&pageNo=1&pageSize=1000`);
      this.setState({
        item:items[0].item
      });
      console.log(this.state.item);
  };

  
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
          <MapView 
            ref={ref=>mymap=ref}
            style={{flex:1}}
            initialRegion={{
          latitude: 37.55114225941841,
            longitude: 126.93943310530443,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
            }}
          >
          {this.state.locations.map((_marker, index) => {
            
  if(this.state.ckepah==true)
  {
    if(_marker.chgerType=="01" ||_marker.chgerType=="03" ||_marker.chgerType=="05" ||_marker.chgerType=="06")
    {
      if(_marker.stat=="1"){
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='red'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='2')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='gold'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='3')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm
                 }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='blue'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='4')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='tomato'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else{
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='green'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }
    }
    else{
      return;
    }
  }
  if(this.state.dhksthr==true)
  {
    if(_marker.chgerType=="02")
    {
      if(_marker.stat=="1"){
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='red'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='2')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='gold'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='3')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm
                 }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='blue'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='4')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='tomato'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else{
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='green'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }
    }else{
      return;
    }
  }
  if(this.state.ac3tkd==true)
  {
    if(_marker.chgerType=="03"||_marker.chgerType=="06"||_marker.chgerType=="07")
    {
      if(_marker.stat=="1"){
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='red'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='2')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='gold'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='3')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm
                 }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='blue'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='4')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='tomato'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else{
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='green'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }
    }else{
      return;
    }
  }
  if(this.state.zhaqh==true)
  {
    if(_marker.chgerType=="04"||_marker.chgerType=="05"||_marker.chgerType=="06"){
      if(_marker.stat=="1"){
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='red'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='2')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='gold'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='3')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm
                 }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='blue'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else if(_marker.stat=='4')
            {
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='tomato'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }else{
              return(
              <Marker
                key= {index}
                title = {_marker.statNm }
                coordinate={_marker.region}
                description = { _marker.useTime }
                pinColor='green'
                onPress={()=>this.setState({pinClick:!this.state.pinClick,informLocation:_marker})}
                onSelect={()=>this.setState({informLocation:_marker})}
                onDeselect={()=>this.setState({pinClick:false})}
                />
            )
            }
    }
    else{
      return;
    }
  }
  
  

          
            
           })}
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

